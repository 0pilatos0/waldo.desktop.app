//TODO: We should turn this into a .ts (TypeScript) file, and decide what the best way to do that is

//* All of the Node.js APIs are available in the preload process.
//* It has the same sandbox as a Chrome extension.

// Expose protected methods that allow the renderer process to use the ipcRenderer without exposing the entire object
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
	send: (channel, data) => {
		// Whitelist channels
		let validChannels = ['toMain'];

		if (validChannels.includes(channel)) {
			ipcRenderer.send(channel, data);
		}
	},
	receive: (channel, func) => {
		let validChannels = ['fromMain'];

		if (validChannels.includes(channel)) {
			// Deliberately strip event as it includes `sender`
			ipcRenderer.on(channel, (event, ...args) => func(...args));
		}
	},
});
// --------------------------------

const ipcRenderer = require('electron').ipcRenderer;

// This file is required by the index.html file and will be executed in the renderer process for that window.
// Use `preload.js` to selectively enable features needed in the rendering process.
export function minimizeWindow() {
	ipcRenderer.invoke('minimizeWindow');
}

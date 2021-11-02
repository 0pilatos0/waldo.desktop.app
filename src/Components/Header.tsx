import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './Header.module.css';

function minimizeWindow() {
	// @ts-ignore
	window.api.send('toMain', ['minimizeWindow']);
}
function maximizeWindow() {
	// @ts-ignore
	window.api.send('toMain', ['maximizeWindow']);
}
function closeWindow() {
	// @ts-ignore
	window.api.send('toMain', ['closeWindow']);
}

function Header() {
	let path = window.location.pathname;
	let page = path.split('/').pop();

	const homePage = '';
	const aboutPage = '/about';
	const settingsPage = '/settings';

	return (
		<header className={styles.header}>
			<Link
				className={
					styles[`${page === homePage ? 'link' : 'linkActive'}`]
				}
				to={homePage}
			>
				Waldo
			</Link>
			<Link
				className={
					styles[`${page === aboutPage ? 'link' : 'linkActive'}`]
				}
				to={aboutPage}
			>
				About
			</Link>
			<Link
				className={
					styles[`${page === settingsPage ? 'link' : 'linkActive'}`]
				}
				to={settingsPage}
			>
				Settings
			</Link>

			<button className={styles['link']} onClick={() => minimizeWindow()}>
				-
			</button>
			<button className={styles['link']} onClick={() => maximizeWindow()}>
				O
			</button>
			<button className={styles['link']} onClick={() => closeWindow()}>
				X
			</button>
		</header>
	);
}

export default withRouter(Header);

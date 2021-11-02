import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './Header.module.css';

function minimizeWindow() {
	// @ts-ignore
	window.api.send('toMain', 'minimizeWindow');
	console.log('eeee');
}

function Header() {
	let path = window.location.pathname;
	let page = path.split('/').pop();

	const aboutPage = '/about';
	const homePage = '';
	const settingsPage = '/settings';

	return (
		<header className={styles.header}>
			<Link
				className={
					styles[`${page === aboutPage ? 'link' : 'linkActive'}`]
				}
				to={aboutPage}
			>
				About
			</Link>
			<Link
				className={`${
					styles[`${page === homePage ? 'link' : 'linkActive'}`]
				} ${styles.bigText}`}
				to={homePage}
			>
				waldo.vision
			</Link>
			<Link
				className={
					styles[`${page === settingsPage ? 'link' : 'linkActive'}`]
				}
				to={settingsPage}
			>
				Downloads
			</Link>

			<button
				className={styles['link']}
				onClick={() => minimizeWindow()}
			>
				-
			</button>
			<button
				className={styles['link']}
				onClick={() => minimizeWindow()}
			>
				O
			</button>
			<button
				className={styles['link']}
				onClick={() => minimizeWindow()}
			>
				X
			</button>
		</header>
	);
}

export default withRouter(Header);

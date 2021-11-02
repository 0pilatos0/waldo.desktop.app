import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './Header.module.css';
import waldoLogoTransparent from '../Media/WaldoLogoTransparent.png';

function minimizeWindow() {
	window.api.send('toMain', ['minimizeWindow']);
}
function maximizeWindow() {
	window.api.send('toMain', ['maximizeWindow']);
}
function closeWindow() {
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
			<img src={waldoLogoTransparent} alt='Waldo' className={styles.waldoLogoTransparent} />

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

			<div className={styles['windowButtons']}>
				<button
					className={styles['windowButton']}
					onClick={() => minimizeWindow()}
				>
					-
				</button>
				<button
					className={styles['windowButton']}
					onClick={() => maximizeWindow()}
				>
					O
				</button>
				<button
					className={styles['windowButton']}
					onClick={() => closeWindow()}
				>
					X
				</button>
			</div>
		</header>
	);
}

export default withRouter(Header);

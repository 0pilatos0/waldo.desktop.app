import React from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import styles from './Home.module.css';

function Home() {
	return (
		<div className={styles.home}>
			<Helmet>
				<html lang="en" />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<title>Waldo</title>
				<meta
					name="description"
					content="Waldo is a program that aims to detect cheaters by scanning videos, with completely open source development."
				/>
				<meta name="author" content="waldo.vision" />
				<meta
					name="keywords"
					content="Waldo, waldo.vision, anti-cheat"
				/>
			</Helmet>

			<p>
				Edit <code>src/Home.tsx</code> and save to reload.
			</p>
			<a
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</div>
	);
}

export default withRouter(Home);

import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
	return (
		<div className={styles.home}>
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

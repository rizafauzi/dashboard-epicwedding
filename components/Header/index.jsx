import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}></div>
			<div className={styles.menu}>
				<a> HOME </a>
				<a> EPICWEDDING </a>
				<a> TEMA </a>
				<a> GET IN TOUCH! </a>
			</div>
			<div className={styles.auth}></div>
		</div>
	)
}

export default Header
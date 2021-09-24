import React from 'react'
import Button from '../Button'
import styles from './Sidebar.module.scss'

const Sidebar = (props) => {
	const { 
		next,
		title, 
		previous,
		children, 
		description 
	} = props
	return (
		<div className={styles.sidebar} >
			<div className={styles.menu}>
				<span className="material-icons">
					tune
					</span>
				<p>Pengaturan</p>
			</div>
			<div className={styles.menu}>
				<span className="material-icons">
					devices
					</span>
				<p>Undangan</p>
			</div>
			<div className={styles.menu}>
				<span className="material-icons">
					groups
					</span>
				<p>Tamu</p>
			</div>
		</div>
	)
}

export default Sidebar
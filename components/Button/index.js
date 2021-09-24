import React from 'react'

import styles from './Button.module.scss'

const Button = (props) => {
	const { children, outlined = false, onClick } = props
	return (
		<button type="button" onClick={onClick} className={outlined ? styles.outlined : styles.button }>
			<h1>{ children }</h1>
		</button>
	)
}

export default Button
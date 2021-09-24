import React from 'react'
import Image from 'next/image'

import styles from './ThemeCard.module.scss'

const ThemeCard = (props) => {
	const { data, handleClick, selected } = props

	return (
		<div 
			className={styles.card}
			onClick={() => handleClick(data)} 
		>
			{selected === data.id && (
				<div className={styles.marked}>
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>
				</div>
			)}
			<div className={styles.imgWrapper}>
				<Image 
					layout="fill"
					objectFit="cover"
					src={ data.image }
				/>
			</div>
			<div className={styles.description}>
				<p>{ data.label }</p>
			</div>
		</div>
	)
}

export default ThemeCard
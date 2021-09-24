import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from './Banner.module.scss'

import Button from '../Button'

const Banner = () => {
	const router = useRouter()

	const handleClick = () => {
		router.push('/create/theme')
	}
	return (
		<div className={styles.banner}>
			<div className={styles.bannerImg}>
				<Image 
					layout="fill"
					objectFit="cover"
					src="/img/banner.jpg"
				/>
			</div>
			<div className={styles.description}>
				<p>EPICWEDDING</p>
				<p>Buat undangan hari bahagiamu dalam bentuk website!</p>
				<Button onClick={handleClick} >Mulai Sekarang</Button>
			</div>
		</div>
	)
}

export default Banner
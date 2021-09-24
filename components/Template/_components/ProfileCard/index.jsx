
import Image from 'next/image'
import styles from './ProfileCard.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';


const ProfileCard = (props) => {
	const { image, name, gender, father, mother, right } = props

	return (
		<div className={styles.cardWrapper}>
			<ScrollAnimation 
					animateIn="fadeIn" 
					animateOnce={true}
				>
					<div className={styles.card}>
						{image && (
							<Image 
								layout="fill"
								objectFit="cover"
								src={ image }
							/>
						)}
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn={right ? 'fadeInRight' : 'fadeInLeft'}>
				<div className={styles.description}>
					<h2>{ name }</h2>
					<h5>{`${gender ? 'putra' : 'putri'} dari`}</h5>
					<h5>{ father }</h5>
					<h5>{ mother }</h5>
				</div>
				</ScrollAnimation>
		</div>
	)
}

export default ProfileCard
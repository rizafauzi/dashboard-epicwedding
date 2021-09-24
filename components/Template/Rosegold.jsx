import { useState } from 'react' 
import Image from 'next/image'
import { useSelector } from 'react-redux'
import styles from './Rosegold.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import { Comment, EventCard, ProfileCard } from './_components'

// import { Parallax } from 'react-scroll-parallax';

import { Parallax, Background } from 'react-parallax';

import { comments } from './enum'


const nav = [
	{
		icon: 'home',
		label: 'HOME'
	},
]

const Template = () => {
	const { data, loading, error } = useSelector(state => state.template)

	// const data = {
	// 	name: 'Muhammad Riza Fauzi Rahman, S.Kom',
	// 	nickname: 'Riza',
	// 	father: 'H. Maman Rahman',
	// 	mother: 'Euis Sopiati, M.M',
	// 	spouse_name: 'Sofi Sajidah Hakim, S.Ds',
	// 	spouse_nickname: 'Sofi',
	// 	spouse_father: 'Dadang Muhajirin, Phd',
	// 	spouse_mother: 'Kinasih Sastrowardoyo',
	// }


	const [showContent, setShowContent] = useState(false)

	const invitationOpened = () => {
		setShowContent(true)
		scrollSection('profile')
	}

	const scrollSection = (view) => {
		if (process.browser) {
			const element = document.getElementById(view)
			if(element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}
		}
	}

	const { 
		name,
		father,
		mother,
		nickname,
		spouse_name,
		spouse_nickname,
		spouse_father,
		spouse_mother,
	 } = data

	return (
		// <div className={showContent ? styles.paper : styles.hideContent }>
		
		<div className={ styles.paper }>

			{showContent &&
				<ScrollAnimation 
					animateIn="fadeInDown" 
					animateOnce={true} 
					className={styles.navigation}
				>
					<div className={styles.items}>
						<span style={{ color: 'white' }} className="material-icons-round">
							home
						</span>
						<p>HOME</p>
					</div>
					<div className={styles.items}>
						<span style={{ color: 'white' }} className="material-icons-round">
							today
						</span>
						<p>ACARA</p>
					</div>
					<div className={styles.items}>
						<span style={{ color: 'white' }} className="material-icons-round">
							insert_photo
						</span>
						<p>GALERI</p>
					</div>
					<div className={styles.items}>
						<span style={{ color: 'white' }} className="material-icons-round">
							mode_comment
						</span>
						<p>UCAPAN</p>
					</div>
				</ScrollAnimation>
			}

			<section>
				<Parallax style={{ height: '100vh', position: 'relative' }} strength={500}>
					<Background style={{ height: '100vh' }}>
						<div
							style={{
								height: 20000,
								width: '100vw',
								backgroundSize: 'auto 100vh',
								backgroundRepeat: 'no-repeat',
								backgroundPositionX: 'center',
								backgroundPosition: 'center 0px',
								backgroundImage: "url('/img/banner.jpg')"
							}}
						/>
					</Background>

					<div className={styles.backdrop} />

					<div className={styles.content}>
						<ScrollAnimation animateIn="fadeInLeft">
							<h1 className={styles.title}>{ nickname }</h1>
						</ScrollAnimation>
					
						<ScrollAnimation animateIn="zoomIn">
						<h1 className={styles.title}>{ `&` }</h1>
						</ScrollAnimation>
						
						<ScrollAnimation animateIn="fadeInRight">
							<h1 className={styles.title}>{ spouse_nickname }</h1>
						</ScrollAnimation>

						<div className={styles.spacer} />
						<ScrollAnimation animateIn="zoomIn">
							<h2 className={styles.subtitle}>23 September 2020</h2>
						</ScrollAnimation>				

						<div className={styles.buttonWrapper}>
							<div onClick={invitationOpened} className={styles.button}>
								Buka Undangan
							</div>
						</div>
					</div>
				</Parallax>
			</section>


			<section id="profile" className={styles.profile}>
				<p >Assalamu`alaikum Warahmatullaahi Wabarakaatuh</p>
				<h5>Kami tengadahkan jemari kehadirat ALLAH subhanahu wa ta’ala, seraya melafazkan do’a, sehingga ALLAH subhanahu wa ta’ala menuntun bahtera hidup baru putra-putri kami </h5>
				
				<div className={styles.line}>
					<div className={styles.spacer} />
					<span style={{ color: '#C8C8C8' }} className="material-icons-outlined">
						spa
					</span>
					<div className={styles.spacer} />
				</div>
				<ProfileCard 
					image='/img/banner_2.jpg'
					name={name}
					gender={0}
					father={father}
					mother={mother}
					right={false}
				/>
				<ProfileCard 
					image='/img/banner_2.jpg'
					name={spouse_name}
					gender={0}
					father={spouse_father}
					mother={spouse_mother}
					right={true}
				/>

			</section>

			<section id="event" className={styles.event}>
				<EventCard 
					icon="favorite_border"
					label="Akad Nikah"
					date="Minggu, 7 Maret 2021"
					time="09.00 - 11.00 WIB"
					place="Gedung Graha Patriot Jalan Cipanas Baru, Pananjung, Tarogong Kaler, Garut."
				/>
				<EventCard 
					icon="cake"
					label="Resepsi Nikah"
					date="Minggu, 7 Maret 2021"
					time="10.00 - 11.00 WIB"
					place="Gedung Graha Patriot Jalan Cipanas Baru, Pananjung, Tarogong Kaler, Garut."
				/>
			</section>

			<section id="event" className={styles.gallery}>
			</section>

			<section id="event" className={styles.comments}>

				<div className={styles.inputWrapper}>
					<div className={styles.field}>
						<span style={{ color: 'white' }} className="material-icons-outlined">
							account_circle
						</span>
						<input placeholder="Nama" />
					</div>
					<div className={styles.field} style={{ minHeight: '100px' }}>
						<span style={{ color: 'white' }} className="material-icons-outlined">
							mode_comment
						</span>
						<input placeholder="Nama" />
					</div>
					<div className={styles.buttonWrapper}>
						<div onClick={invitationOpened} className={styles.button}>
							Kirim
						</div>
					</div>
				</div>

				{comments.map((dt, index) => (
					<Comment 
						key={index}
						sort={index}
						sender={dt.user}
						description={dt.description}
						date={dt.created_date}
					/>
				))}
			</section>


		</div>
	)
}	

export default Template

import styles from './EventCard.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';

const EventCard = (props) => {
	const { icon, label, date, time, place } = props
	return (
		<div className={styles.card}>
			<ScrollAnimation animateIn="bounce">
				<span style={{ margin: '5px 0px' }} className="material-icons-outlined color-primary">
					{ icon }
				</span>
			</ScrollAnimation>
			<h3>{ label }</h3>
			<div className={styles.spacer} />
			<div className={styles.eventWrapper} >

				<div className={styles.iconWrapper}>
					<span style={{ margin: '5px 0px', color: 'white' }} className="material-icons-outlined color-primary">
						event
					</span>
				</div>
				<h5>{ date }</h5>

				<div className={styles.iconWrapper}>
					<span style={{ margin: '5px 0px', color: 'white' }} className="material-icons-outlined color-primary">
						schedule
					</span>
				</div>
				<h5>{ time }</h5>

				<div className={styles.iconWrapper}>
					<span style={{ margin: '5px 0px', color: 'white' }} className="material-icons-outlined color-primary">
						place
					</span>
				</div>
				<h5>{ place }</h5>

			</div>
		</div>
	)
}

export default EventCard
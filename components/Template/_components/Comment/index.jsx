

import styles from './Comment.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';

const Comment = (props) => {
	const { sender, description, date, sort } = props

	return (
		<ScrollAnimation className={styles.card} animateIn={sort % 2 === 1 ? 'fadeInRight' : 'fadeInLeft'}>
			<div className={styles.field}>
				<span style={{ color: 'black' }} className="material-icons-outlined">
					account_circle
				</span>
				<h4>
					{ sender }
				</h4>
			</div>
			<div className={styles.field}>
				<div></div>
				<div className="spacer" style={{ margin: '8px 0px' }} />
			</div>
			<div className={styles.field}>
				<span style={{ color: '#9E9E9E' }} className="material-icons-outlined">
					mode_comment
				</span>
				<h5>
					{ description }
				</h5>
			</div>
			<div className={styles.field}>
				<div></div>
				<p>
					{ date }
				</p>
			</div>
		</ScrollAnimation>
	)
}

export default Comment

import styles from './Preview.module.scss'

const Preview = (props) => {
	const { children } = props
	return (
		<div className={styles.preview} >
			<div className={styles.content}>
			<div className={styles.header}>
			</div>
			<div className={styles.scroll}>
				<div className={styles.adaptive}>
					{children}
				</div>
			</div>
			</div>
		</div>
	)
}

export default Preview

import styles from './UploadImage.module.scss'

const UploadImage = () => {
	return (
		<div className={styles.uploadContainer} >
			<span className={`material-icons ${styles.icon}`}>
				add
			</span>
		</div>
	)
}

export default UploadImage
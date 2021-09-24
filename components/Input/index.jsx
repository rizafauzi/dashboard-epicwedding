
import styles from './Input.module.scss'

const Input = (props) => {
	const { isTextarea = false, label, error, handleChange, value, name, fixedValue, placeholder = '' } = props

	return (
		<div className={styles.wrapper}>
			<span>{ label }</span>
			{isTextarea ? (
				<textarea 
					name={name}
					value={value || ''}
					onChange={handleChange}
					placeholder={placeholder}
				/>
			) : (
				<input 
					name={name}
					value={value || ''}
					onChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			<p className={styles.errorMsg}>{ error }</p>
		</div>
	)
}

export default Input
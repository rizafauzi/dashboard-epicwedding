
import styles from './Dropdown.module.scss'

const Dropdown = (props) => {
	// const { Option } = Select;
	const { label, error, handleChange, value, name, fixedValue, placeholder = '' } = props

	const onChange = (value) => {
		handleChange(value)
	}

	return (
		<>
			<span className={styles.label}>{ label }</span>
			<div className={styles.wrapper}>
				{fixedValue}
				{/* <Select defaultValue="00.00" style={{ width: '100%', borderRadius: '10px', background: 'pink', opacity: '0%' }} onChange={onChange}>
					<Option value="00.00">00.00</Option>
					<Option value="01.00">01.00</Option>
					<Option value="01.30">01.30</Option>
					<Option value="02.00">02.00</Option>
				</Select> */}
				<span>{ value }</span>
			</div>
			<p className={styles.errorMsg}>{ error }</p>
		</>
	)

}

export default Dropdown
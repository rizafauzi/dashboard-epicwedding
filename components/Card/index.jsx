
import Switch from 'react-ios-switch'
import { useState } from 'react'
import { Input, UploadImage } from '../../components'
import { Collapse } from 'react-bootstrap'

import styles from './Card.module.scss'

const Card = ({ data, handleSwitch, id }) => {

	const [isOpen, setIsOpen] = useState(false)
	const [isUsed, setIsUsed] = useState(data.checked)
	const [value, setValue] = useState(false)

	const toggleIsOpen = () => {
		// if (data.checked) {
			setIsOpen(!isOpen)
		// }
	}

	const handleChange = () => {

	}

	const toggleSwitch = () => {
		setIsUsed(!isUsed)
	}

	return (
		<div>
			<div className={styles.card}>
				<div onClick={toggleIsOpen} style={{ width: '100%' }} className={styles.cardHeader}>
					<span style={{ color: 'F299A5' }} className="material-icons-round">
						{data.icon}
					</span>
					<p>{data.label}</p>
				</div>
				<div className={styles.cardHeader}>
					<Switch 
						onColor="rgb(242, 153, 165)"
						checked={isUsed}
						onChange={toggleSwitch}
					/>
				</div>
			</div>
			<Collapse in={isOpen}>
				<div className={styles.cardBody}>
					<UploadImage />
					<div className={styles.column}>
						<Input 
							label="Judul"
							value={value}
							handleChange={handleChange}
							placeholder="Pernikahan aku dan kamu"
						/>
						<Input 
							value={value}
							label="Deskripsi"
							isTextarea={true}
							handleChange={handleChange}
							placeholder="Pernikahan aku dan kamu"
						/>
					</div>
				</div>
			</Collapse>
		</div>
	)
}

export default Card
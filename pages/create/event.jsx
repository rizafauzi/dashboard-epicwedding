
import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { setProfileTemplate } from '../../store/actions/template'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar, ThemeCard, Input, Preview, Template, Dropdown } from '../../components'

import styles from '../../styles/Create.module.scss'

const Event = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { data } = useSelector(state => state.template)
	const [ error, setError ] = useState({})

	
	const { 
		date,
		place,
		end_time,
		event_name,
		start_time,
		google_maps,
	 } = data

	const handleChange = (event) => {
		dispatch(setProfileTemplate({
			name: event.target.name,
			value: event.target.value
		}))
	}

	const handleDropdownChange = (value) => {
		console.log(value)
	}

	const validate = () => {
		const validation = { 
			date: date,
			place: place,
			end_time: end_time,
			event_name: event_name,
			start_time: start_time,
			google_maps: google_maps
		}

		for(let i = 0; i < Object.keys(validation).length; i++) {
			const key =  Object.keys(validation)[i]
			if (validation[key] === '' || !validation[key]) {
				setError({
					[key] : 'Data ini harus diisi'
				})
				return false
			}
		}
		return true
	}

	const handleNext = () => {
		if (validate()) {
			router.push('/create/event')
		}
	}

	const handlePrevious = () => {
		router.back()
	}


	return (
		<div className="container">
			<Preview>
				<Template />
			</Preview>
			<Sidebar
				next={handleNext}
				previous={handlePrevious}
				title="Informasi Acara"
				description="Isi profilmu dan profil pasanganmu"
			>
				<div>
					<h2>Profil Kamu</h2>
					<Input 
						value={event_name}
						name='event_name'
						error={error?.event_name}
						label="Nama Acara"
						handleChange={handleChange}
					/>
					<Input 
						value={date}
						name='date'
						error={error?.date}
						label="Tanggal"
						handleChange={handleChange}
					/>
					<Input 
						value={start_time}
						name='start_time'
						error={error?.start_time}
						label="Waktu Dimulai"
						handleChange={handleChange}
					/>
					<Input 
						value={end_time}
						name='end_time'
						label="Waktu Selesai"
						error={error?.end_time}
						handleChange={handleChange}
					/>
					<Input 
						value={place}
						name='place'
						label="Tempat"
						error={error?.place}
						handleChange={handleChange}
					/>
					<Input 
						value={google_maps}
						name='google_maps'
						label="Google Maps"
						error={error?.google_maps}
						handleChange={handleChange}
					/>

					<div className="spacer" style={{ margin: '40px 0px' }} />

				</div>
			</Sidebar>
		</div>
	)
}

export default Event
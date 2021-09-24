
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { setProfileTemplate } from '../../store/actions/template'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar, ThemeCard, Input, Preview, Template } from '../../components'

import styles from '../../styles/Create.module.scss'


const Profile = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { data } = useSelector(state => state.template)
	const [ error, setError ] = useState({})

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

	const handleChange = (event) => {
		dispatch(setProfileTemplate({
			name: event.target.name,
			value: event.target.value
		}))
	}

	const validate = () => {
		const validation = { 
			name: name,
			father: father,
			mother: mother,
			nickname: nickname,
			spouse_name: spouse_name,
			spouse_father: spouse_father,
			spouse_mother: spouse_mother,	
			spouse_nickname: spouse_nickname,
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
				title="Profil"
				description="Isi profilmu dan profil pasanganmu"
			>
				<div>
					<h2>Profil Kamu</h2>
					<Input 
						value={name}
						name='name'
						error={error?.name}
						label="Nama Lengkap"
						handleChange={handleChange}
					/>
					<Input 
						value={nickname}
						name='nickname'
						error={error?.nickname}
						label="Nama Panggilan"
						handleChange={handleChange}
					/>
					<Input 
						value={father}
						name='father'
						label="Nama Ayah"
						error={error?.father}
						handleChange={handleChange}
					/>
					<Input 
						value={mother}
						name='mother'
						label="Nama Ibu"
						error={error?.mother}
						handleChange={handleChange}
					/>

					<div className="spacer" style={{ margin: '40px 0px' }} />

					<h2>Profil Pasanganmu</h2>
					<Input 
						value={spouse_name}
						name="spouse_name"
						label="Nama Lengkap"
						error={error?.spouse_name}
						handleChange={handleChange}
					/>
					<Input 
						value={spouse_nickname}
						name="spouse_nickname"
						label="Nama Panggilan"
						error={error?.spouse_nickname}
						handleChange={handleChange}
					/>
					<Input 
						value={spouse_father}
						label="Nama Ayah"
						name="spouse_father"
						error={error?.spouse_father}
						handleChange={handleChange}
					/>
					<Input 
						value={spouse_mother}
						label="Nama Ibu"
						name="spouse_mother"
						error={error?.spouse_mother}
						handleChange={handleChange}
					/>
				</div>
			</Sidebar>
		</div>
	)
}

export default Profile
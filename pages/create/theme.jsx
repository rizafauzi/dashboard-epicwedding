
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { setThemeTemplate } from '../../store/actions/template'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar, ThemeCard, Preview, Template } from '../../components'

import styles from '../../styles/Create.module.scss'

const themes = [
	{
		id: 1,
		label: 'Red Valvet',
		image: '/img/banner.jpg'
	},
	{
		id: 2,
		label: 'Tosca',
		image: '/img/banner.jpg'
	},
	{
		id: 3,
		label: 'Happy Ending',
		image: '/img/banner.jpg'
	},
	{
		id: 4,
		label: 'Yuhu mamen',
		image: '/img/banner.jpg'
	},
	{
		id: 5,
		label: 'Red Valvet',
		image: '/img/banner.jpg'
	},
	{
		id: 6,
		label: 'Tosca',
		image: '/img/banner.jpg'
	},
	{
		id: 7,
		label: 'Happy Ending',
		image: '/img/banner.jpg'
	},
	{
		id: 8,
		label: 'Yuhu mamen',
		image: '/img/banner.jpg'
	},
]

const Theme = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { data, loading, error } = useSelector(state => state.template)
	const [selected, setSelected] = useState(data.theme)

	const handleSelected = (data) => {
		setSelected(data.id)
	}

	const handleNext = () => {
		dispatch(setThemeTemplate(selected))
		router.push('/create/url')
	}

	const handlePrevious = () => {
		router.push('/')
	}
	
	return (
		<div className="container">
			<Preview>
				<Template />
			</Preview>
			<Sidebar
				next={handleNext}
				previous={handlePrevious}
				title="Tema Website"
				description="Pilih tema yang paling cocok denganmu"
			>
				<div className={styles.cardGrid}>
					{themes.map((dt, index) => (
						<ThemeCard 
							data={dt} 
							key={index}
							selected={selected}
							handleClick={handleSelected} 
						/>
					))}
				</div>
			</Sidebar>
		</div>
	)
}

export default Theme
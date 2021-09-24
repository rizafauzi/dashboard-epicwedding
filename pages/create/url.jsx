
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar, Preview, Template, ThemeCard, Input } from '../../components'
import { setUrlTemplate } from '../../store/actions/template'
import styles from '../../styles/Create.module.scss'


const Url = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { data, loading, error } = useSelector(state => state.template)

	const domain = 'https://epicwedding.com/'
	const [url, setUrl] = useState(data.url)

	const handleChange = (event) => {
		setUrl(event.target.value)
	}

	const handleNext = () => {
		dispatch(setUrlTemplate(url))
		router.push('/create/profile')
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
				title="URL Undangan"
				description="Tentukan URL yang menurutmu paling cocok dan mudah diingat"
			>
				<div>
					<Input 
						value={url}
						fixedValue={domain}
						label="Url Website"
						handleChange={handleChange}
					/>
				</div>
			</Sidebar>
		</div>
	)
}

export default Url
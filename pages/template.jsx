import Head from 'next/head'

import { Template } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Template />
    </div>
  )
}

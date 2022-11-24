import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
    <Layout
    title={'Inicio'}
    description={'Centro de especialidad en comportamiento'}
    >
      <main>
        <h1>Unete</h1>
      </main>

    </Layout>
    </>
  )
}

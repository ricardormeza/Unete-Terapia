import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Carrusel from '../components/Carousel/Carousel'
import ComponenteUno from '../components/ComponenteUno/ComponenteUno'
import ComponenteDos from '../components/ComponenteDos/ComponenteDos'
import ComponenteTres from '../components/ComponenteTres/ComponenteTres'
import Faq from '../components/Faq/Faq'
import CtaDoctoralia from '../components/CtaDoctoralia'
import Experience from '../components/Experience'


export default function Home() {
  return (
    <>
    <Layout
    title={'Inicio'}
    description={'Centro de especialidad en comportamiento'}
    >
      <main className=''>
        
          <Carrusel/>
        <div className='container'>
          
          <ComponenteUno/>
          <ComponenteDos/>
          <ComponenteTres/>
        <CtaDoctoralia/>
        <Experience/>
        <Faq/>
        </div>
        {/* <h1>Unete</h1> */}
      </main>

    </Layout>
    </>
  )
}

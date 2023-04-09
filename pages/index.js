import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Carrusel from '../components/Carousel/Carousel'
import ComponenteUno from '../components/ComponenteUno/ComponenteUno'
import Servicios from '../components/Servicios'
import ComponenteDos from '../components/ComponenteDos/ComponenteDos'
import CtaDos from '../components/CtaDos'
import ComponenteTres from '../components/ComponenteTres/ComponenteTres'
import Recomendaciones from '../components/Recomendaciones'
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
        </div>
        <Servicios/>
        <div className='container'>
        
        <ComponenteDos/>

        </div>
        <CtaDos/>

        <div className='container'>
        <ComponenteTres/>
        {/* <CtaDoctoralia/> */}
        {/* <Experience/> */}
        </div>

        <Recomendaciones/>
        
        <div className='container'>
          <Faq/>
        </div>
        
      </main>
    </Layout>
    </>
  )
}

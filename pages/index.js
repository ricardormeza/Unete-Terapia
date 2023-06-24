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
import Mymapita from '../components/Mapita'


export default function Home() {
  return (
    <>
    <Layout
    title={'Psicóloga experta en bienestar emocional'}
    description={'En UNETE somos un consultorio de psicología acogedor y profesional, donde encontrarás apoyo y orientación para tu bienestar emocional, te brindaremos un espacio seguro para explorar tus pensamientos, emociones y desafíos personales.'}
    abstract={'Mejor psicóloga en Chiapas'}
    author={'Consultorio UNETE'}
    copyright={'terapiapsicologia'}
    keywords={'psicologo, psicologa, ansiedad, depresion, autismo, tanatologia, tdah, psicologia, terapia '}
    robots={'index, follow'}
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
        <Mymapita/>
        
        <div className='container'>
          <Faq/>
        </div>
        
      </main>
    </Layout>
    </>
  )
}

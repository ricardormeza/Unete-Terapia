import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Carrusel from '../components/Carousel/Carousel'
import ComponenteUno from '../components/ComponenteUno/ComponenteUno'
import ComponenteDos from '../components/ComponenteDos/ComponenteDos'
import ComponenteTres from '../components/ComponenteTres/ComponenteTres'
import Faq from '../components/Faq/Faq'


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
          <div className="text-center mt-5">
            <h1 className='text-center text-pink-600'>Mtra. <strong>Yeimi Rocio Avila Pontón</strong> </h1>
            <h2 className='text-green-500'>Especialista en <span>Psicología</span>.</h2>
            <div className='flex'>
            <h2 clasName="text-center w-4/5">Incrementa tu calidad de vida con la mejor <span>Psicóloga </span> en 
            <span> Tuxtla Gutíerrez, Chiapas.</span> </h2>

            </div>
          </div>
          <ComponenteUno/>
          <ComponenteDos/>
          <ComponenteTres/>
        <Faq/>
        </div>
        {/* <h1>Unete</h1> */}
      </main>

    </Layout>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Carrusel from '../components/Carousel/Carousel'
import ComponenteUno from '../components/ComponenteUno/ComponenteUno'
import ComponenteDos from '../components/ComponenteDos/ComponenteDos'
import ComponenteTres from '../components/ComponenteTres/ComponenteTres'


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
            <h2 clasName="text-center">Mejora tu calidad de vida con la mejor <span>Terapia </span> en
            <span>Tuxtla Gutíerrez, Chiapas.</span> </h2>
          </div>
          <ComponenteUno/>
          <ComponenteDos/>
          <ComponenteTres/>
        </div>
        
        {/* <h1>Unete</h1> */}
      </main>

    </Layout>
    </>
  )
}

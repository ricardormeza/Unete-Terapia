import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function ansiedad() {
    return (
        <>
            <Layout
                title={'Especialidades - Ansiedad'}
                description={'Centro de especialidad en comportamiento'}
            >
                <div className='container'>
                    <h1 className='text-xl'>Titulo del problema a tratar ejemplo: Ansiedad</h1>
                    <p className='text-base'>La ansiedad puede ser normal en situaciones estresantes, como hablar en público o realizar una prueba. La ansiedad es solo un indicador de una enfermedad subyacente cuando los sentimientos se vuelven excesivos, en todo momento e interfieren con la vida cotidiana</p>
                </div>
                <Link href='/'>
                Inicio
                </Link>

            </Layout>
        </>
    )
}

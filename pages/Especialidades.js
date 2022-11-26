import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Especialidades() {
    return (
        <>
            <Layout
            title={'Especialidades'}
            description={'Centro de especialidad en comportamiento'}
            >
            <div>Especialidades</div>
            <Link href='/Especialidades/ansiedad'>
                Ansiedad
            </Link>

            </Layout>
        </>
    )
}

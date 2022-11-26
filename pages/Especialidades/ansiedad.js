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
                <div>ansiedad</div>
                <Link href='/'>
                Inicio
                </Link>

            </Layout>
        </>
    )
}

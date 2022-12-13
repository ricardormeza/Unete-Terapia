import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'

export default function ansiedad() {
    return (
        <>
            <Layout
                title={'Especialidades - Ansiedad'}
                description={'Tratamiento y diagnostico especializado en la ansiedad'}
            >
                <section className={`container ${styles.bgAnsiedad}`}>
                    <div >
                        <div className={styles.contenedorAnsiedad}>
                            <div className={styles.DepresionTexto}>
                                <h1 className='text-xl font-DMSans text-green-500'>Terapia individual: Ansiedad</h1>
                                <h2 className='font-DMSans font-bold'>Tratamiento para la <span>ansiedad</span> </h2>
                                <p className='text-base font-DMSans text-justify'>En los criterios clínicos presentan preocupación acerca de varias actividades o acontecimiento y tienen dificultad para controlar las preocupaciones; son más los días en que esto está presente que ausente durante ≥ 6 meses.</p>
                                <p className='text-base font-DMSans text-justify'>Se deben asociar  con sintomas como agitación o nerviosismo, facilidad para fatigarse, dificultades para concentrarse, irritabilidad, tensión muscular, trastornos del sueño.</p>
                                
                            </div>
                            <div>
                                <Image
                                    src='/images/joven-ansiedad.jpeg'
                                    width={400}
                                    height={400}
                                    alt='joven con problema de ansiedad'
                                    className='rounded'
                                />
                            </div>
                        </div>

                    </div>
                    {/* cta ansiedad */}
                    <div className='w-2/4'>
                        <h4 className='text-green-500'>Ayudamos a superar la ansiedad</h4>
                        <p className='font-DMSans'>Realizaremos una evaluación, plantearemos objetivos de tratamiento en la problemática de tu interés.</p>
                        <p className='font-DMSans'>Si buscas generar cambios a largo plazo este tratamiento es ideal para ti.</p>
                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                            <button className='bg-pink-500 hover:bg-green-400 text-white font-bold py-1 px-2 rounded'>
                                Agenda tu cita
                            </button>
                        </Link>
                    </div>
                </section>
            </Layout>
        </>
    )
}

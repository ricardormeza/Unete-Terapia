import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'
import CtaDoctoralia from "../../components/CtaDoctoralia";

export default function depresion() {
    return (
        <>
            <Layout
                title={'Especialidades - Depresión'}
                description={'Tratamiento y diagnostico especializado para superar la depresión'}
            >
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className={`container ${styles.bgDepresion}`}>
                    <div >
                        <div className={styles.contenedorDepresion}>
                            <div className={styles.DepresionTexto}>
                                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-green-500'>Terapia individual: Depresión</h1>
                                <h2 className='font-DMSans'>Tratamiento para la <span>Depresión</span> </h2>
                                <p className='text-base font-DMSans text-justify'>Maltratando de diversas formas y, al mismo tiempo que lo explica, se ríe de forma incontrolada, labilidad afectiva. <span> Cambios en el estado emocional</span>, generalmente independiente de estímulos causales externos.<span>Incontinencia afectiva</span>, <span>falta de control afectivo</span>, existiendo estados afectivos o emocionales que surgen exageradamente rápido, que alcanzan una intensidad excesiva y que no pueden ser dominados. Presentan  sentimientos y emociones fijos y persistentes que no se modulan o varían según las circunstancias externas. Frialdad o indiferencia afectiva  y carencia o pérdida de la capacidad de presentar respuestas afectivas.</p>
                                <p className='text-base font-DMSans text-justify'>Por lo que es importante explorar el sueño, el apetito y la libido. Explorar la presencia de disomnias, es decir, aquellos trastornos primarios del sueño que afectan tanto a su calidad como a su cantidad y al ritmo circadiano. Insomnio y libido poco deseo sexual, ideación suicida, escasa atención  y faltas para concentrarse, y enlentecimiento.</p>
                            </div>
                            <div>
                                <Image
                                    src='/images/chica-depresion-2.jpeg'
                                    width={400}
                                    height={400}
                                    alt='mujer con problema de depresión'
                                    className='rounded'
                                />
                            </div>
                        </div>

                    </div>
                    {/* cta ansiedad */}
                    <div className={styles.DepresionTexto}>
                        <div className='lg:w-auto sm:w-auto mt-8'>
                            <h4 className='sm:text-2xl text-xl font-medium text-green-500 font-DMSans'>Desarrollo de salud mental</h4>
                            <p className='font-DMSans sm:text-white'>Realizaremos una evaluación, plantearemos objetivos de tratamiento en la problemática de tu interés.</p>
                            <p className='font-DMSans'>Si buscas generar cambios a largo plazo este tratamiento es ideal para ti.</p>
                            
                        </div>
                    </div>
                    <CtaDoctoralia/>
                </motion.section>
            </Layout>
        </>
    )
}

import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'
import { TbPoint } from 'react-icons/tb';


export default function desarrolloNeuropsicologico() {
    return (
        <>
            <Layout
                title={'Especialidades - Desarrollo Neuropsicológico'}
                description={'Atención especializada en adolescentes y niños con problemas de desarrollo neuropsicológico, autosmo, hiperactividad.'}
            >
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className={`container ${styles.bgNeuropsicologicoUno}`}>
                    <div >
                        <div className={styles.contenedorEspecialidades}>
                            <div className={styles.DepresionTexto}>
                                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-green-500'>Desarrollo Neuropsicológico</h1>
                                <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2>
                                <br/>
                                <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3>
                                <p className='text-base font-DMSans text-justify'>Se caracteriza por la afectación general de los procesos cognitivos a grado tal, que impide al individuo alcanzar las habilidades necesarias para realizar las tareas que se esperan para su edad. Por ejemplo, un adecuado dominio del lenguaje o de las funciones ejecutivas.</p>
                            </div>
                            <div>
                                <Image
                                    src='/images/nino-autismo.jpeg'
                                    width={400}
                                    height={400}
                                    alt='niño con autismo'
                                    className='rounded'
                                    priority
                                    placeholder
                                />
                            </div>
                        </div>
                        {/* AUTISMO */}
                        <br/>
                        <div className={styles.bgNeuropsicologicoDos}>
                            <div className={styles.contenedorEspecialidades}>
                                <div>
                                    <Image
                                        src='/images/nino-eta.jpeg'
                                        width={400}
                                        height={400}
                                        alt='niño con autismo'
                                        className='rounded'
                                        placeholder
                                    />
                                </div>
                                <div className={styles.DepresionTexto}>
                                    {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                                    <br/>
                                    <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Trastorno del espectro del autismo (TEA)</h3>
                                    <p className='text-base font-DMSans text-justify'>El TEA se manifiesta en dificultades para establecer una comunicación social efectiva, patrones de comportamiento repetitivos e intereses muy restringidos.</p>
                                </div>
                            </div>
                        </div>
                        {/* AUTISMO FIN */}
                        {/* TDA INICIO */}
                        <br/>
                        <div className={styles.bgNeuropsicologicoTres}>
                            <div className={styles.contenedorEspecialidades}>
                                <div className={styles.DepresionTexto}>
                                    {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                                    <br/>
                                    <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Trastorno de atención con hiperactividad (TDAH)</h3>
                                    <p className='text-base font-DMSans text-justify'>Con una prevalencia estimada por algunos estudios del 3% al 7% en edades infantiles y de 4, 4% en adultos en edad laboral (Michielsen et al 2012), el trastorno de atención con hiperactividad se manifiesta en dificultades para el mantenimiento de la atención y/o comportamiento <span>hiperactivo e impulsivo.</span></p>
                                    <p className='text-base font-DMSans text-justify'>Otros trastornos del neurodesarrollo incluidos en el DSM-5:</p>
                                    <div>
                                        <div className={styles.neurologicoLi}>
                                            <TbPoint className='text-pink-500'/>
                                            <li className='list-none'>Trastornos específicos del aprendizaje</li>
                                        </div>
                                        <div className={styles.neurologicoLi}>
                                            <TbPoint className='text-pink-500'/>
                                            <li className='list-none'>Trastorno de la comunicación</li>
                                        </div>
                                        <div className={styles.neurologicoLi}>
                                            <TbPoint className='text-pink-500'/>
                                            <li className='list-none'> Retraso global del desarrollo</li>
                                        </div>
                                        <div className={styles.neurologicoLi}>
                                            <TbPoint className='text-pink-500'/>
                                            <li className='list-none'> Discapacidad intelectual no especificada</li>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div>
                                    <Image
                                        src='/images/nino-tdah.jpeg'
                                        width={400}
                                        height={400}
                                        alt='niño con autismo'
                                        className='rounded'
                                        placeholder
                                    />
                                </div>
                            </div>
                        </div>
                        {/* TDA FIN */}

                    </div>
                    {/* cta ansiedad */}
                    <div className={styles.DepresionTexto}>
                        <div className='lg:w-auto sm:w-auto mt-8'>
                            <h4 className='sm:text-2xl text-xl font-medium text-green-500 font-DMSans'>Tratamientos de los Trastornos del Neurodesarrollo</h4>
                            <p className='text-base font-DMSans text-justify'>Es importante tener en cuenta que en una misma persona puede manifestarse <strong> más de un trastorno del neurodesarrollo.</strong></p>
                            <p className='font-DMSans '>El tratamiento de los trastornos del neurodesarrollo dependerá en buena medida del tipo de trastorno y los síntomas predominantes en cada caso</p>
                            <p className='font-DMSans'>Esencialmente pueden dividirse en terapias farmacológicas y terapias no farmacológicas, siendo estas últimas las que cuentan con mayor número de opciones en la actualidad.</p>
                            <p className='font-DMSans'>Dentro de las terapias no farmacológicas se incluyen intervenciones conductuales, apoyo psicosocial y rehabilitación neuropsicológica, entre otras opciones que estimulan las habilidades que el niño o niña no ha desarrollado adecuadamente. Además de ofrecer los apoyos necesarios para vivir una existencia plena de significado.</p>
                            <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                                <button className='bg-pink-500 hover:bg-green-400 text-white font-bold py-1 px-2 rounded'>
                                    Agenda tu cita
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.section>

            </Layout>
        </>
    )
}

import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'
import CtaDoctoralia from '../../components/CtaDoctoralia';


export default function trastornoDeAnsiedad() {
  return (
    <>
            <Layout
                title={'Trastorno de Ansiedad'}
                description={'Supera la ansiedad y recupera tu bienestar emocional con mi ayuda especializada, te brindarán herramientas y estrategias eficaces para manejar la ansiedad, reducir los síntomas y encontrar la calma interior'}
                abstract={'ansiedad y depresion'}
                author={'Consultorio UNETE'}
                copyright={'terapiapsicologia'}
                keywords={'ansiedad, depresion, psicologia'}
                robots={'index, follow'}
            >
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className={`container `}>
                    <div >
                        <div className={styles.contenedorAnsiedad}>
                            <div className={styles.DepresionTexto}>
                                <h1 className='text-xl font-DMSans text-green-500'>Trastorno de ansiedad</h1>
                                <h2 className='font-DMSans font-bold'>Sintomas de <span>ansiedad</span>. </h2>
                                <p className='text-base font-DMSans text-justify'>Los síntomas comunes de la ansiedad pueden incluir inquietud, irritabilidad, dificultad para concentrarse, tensión muscular, dificultad para conciliar el sueño, fatiga y sensación de peligro inminente. Pueden manifestarse a nivel físico, emocional y cognitivo.</p>
                                <p className='text-base font-DMSans text-justify'>Existen varios tipos de trastornos de ansiedad, como el trastorno de ansiedad generalizada, el trastorno de pánico, el trastorno de ansiedad social y las fobias específicas. Cada uno de ellos tiene características y síntomas distintos, pero todos comparten una experiencia de ansiedad intensa y perjudicial.</p>
                                <h2 className='font-DMSans font-bold'>¿Con qué se quita la <span>ansiedad</span>? </h2>
                                <p className='text-base font-DMSans text-justify'>La <span>ansiedad</span> puede ser un desafío, pero existen diversas estrategias y enfoques que pueden ayudar a reducir y gestionar los <span>síntomas de ansiedad</span>.</p>
                                <h3 className='font-DMSans font-bold'>¿Realizar ejercicio puede ayudar a superar la <span>ansiedad</span>? </h3>
                                <p className='text-base font-DMSans text-justify'> La actividad física regular, como caminar, correr o practicar deportes, puede liberar endorfinas y reducir los niveles de estrés y ansiedad.</p>
                                <h3 className='font-DMSans font-bold'>¿Mantener una alimentación equilibrada ayuda a superar la <span>ansiedad</span>? </h3>
                                <p className='text-base font-DMSans text-justify'>Si bien es cierto que mantener una dieta saludable y equilibrada puede tener un impacto positivo en el estado de ánimo y reducir los síntomas de ansiedad. Evita el consumo excesivo de <span>cafeína</span> y alcohol, ya que pueden aumentar la ansiedad.</p>
                                <h3 className='font-DMSans font-bold'>¿Dormir bien quita la <span>ansiedad</span>? </h3>
                                <p className='text-base font-DMSans text-justify'>El sueño adecuado es esencial para una buena salud mental. Intenta mantener una rutina de sueño regular y crea un ambiente propicio para descansar adecuadamente.</p>
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
                    <div className=''>
                        <h2 className='text-green-500'>Te ayudare a superar la ansiedad</h2>
                        <p className='font-DMSans'>Si la ansiedad persiste o interfiere significativamente en tu vida diaria, es importante buscar ayuda, y yo estoy para ayudarte.</p>
                        <p className='font-DMSans'>Comó <span>psicóloga</span> evaluare tus sintomas, te proporcionare un diagnóstico y diseñare un plan y tratamiento adecuado para ayudarte y superar la <span>ansiedad</span>.</p>
                        <p className='font-DMSans'>Con mi ayuda te dire que hacer en caso de un <span>ataque de ansiedad</span> y descubriremos si <span>la ansiedad se cura o se controla</span>, agenda una cita conmigo en el botón de abajo.</p>
                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                        <button className='bg-pink-500 hover:bg-green-400 text-white font-bold py-1 px-3.5 rounded'>
                        Programar cita
                        </button>
                        </Link>
                    </div>
                    <div className='mt-4'>
                        <h6 className='text-green-500'>Conoce más de mis servicios</h6>
                        <div className="flex md:mt-4 mt-6 gap-3">
                        <Link href="/Especialidades/orientacion-familiar" legacyBehavior>
                            <a className="text-pink-500 inline-flex items-center font-DMSans">
                                Orientación familiar
                                
                            </a>
                            </Link>

                            <Link href="/Especialidades/terapia#terapia" legacyBehavior>
                                <a className="text-pink-500 inline-flex items-center font-DMSans">
                                    Terapia individual
                                    
                                </a>
                            </Link>
                    </div>
                        
                    </div>
                    <CtaDoctoralia/>
                </motion.section>
            </Layout>
        </>
  )
}
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import Layout from '../../components/Layout'
import DoctoraliaWidget from '../../components/Doctoralia/Doctoralia';

export default function neurodesarrolloInfantil() {
  return (
    <>
            <Layout
                title={'Neurodesarrollo infantil en Tuxtla Gutiérrez'}
                description={'En Unete estamos dedicados a fomentar el desarrollo óptimo de los niños, niñas y adolescentes.'}
                abstract={'Neurodesarrollo y educación preescolar, escolar'}
                author={'Consultorio UNETE'}
                copyright={'terapiapsicologia'}
                keywords={'educación, neurodesarrollo, dislexia, discalculia, TEA, TDAH'}
                robots={'index, follow'}
            >
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="container">
                    <div>
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Image
                            className="object-cover object-center h-full w-full"
                            src="/images/ninos-neurodesarrollo.jpg"
                            alt="desarrollo neurologico portada"
                            title="El neurodesarrollo y los niños"
                            width={900}
                            height={900}
                            priority
                            placeholder
                        />
                    </div>
                        <div className="container ">
                            <div>
                                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-pink-600'>Neurodesarrollo infantil.</h1>
                                <h2 className='font-DMSans text-pink-600'>Crecimiento Cognitivo Feliz. </h2>
                                <br/>
                                <p className='text-base font-DMSans text-justify'>En <span>Únete Desarrollo Integral</span>, estamos dedicados a fomentar el desarrollo óptimo de los niños. Creemos que cada niño merece la oportunidad de alcanzar su máximo potencial. Nuestra misión es brindar un apoyo comprensivo y personalizado para estimular el neurodesarrollo infantil. Descubre cómo podemos ayudar a tu hijo a crecer y florecer.</p>
                                <br/>
                                <h2 className='font-DMSans text-pink-600' id='trastornohabla'><span>¿Qué es el Neurodesarrollo Infantil?</span></h2>
                                <p className='text-base font-DMSans text-justify'>El neurodesarrollo infantil se refiere al proceso mediante el cual el sistema nervioso de un niño se desarrolla y madura. Esto incluye el desarrollo cognitivo, motor, emocional y social. Cada niño es único, y su neurodesarrollo sigue un camino individual. Sin embargo, existen etapas y hitos clave que podemos identificar y apoyar.</p>
                                
                                
                            </div>
                            <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                                <div class="w-full mx-auto">
                                    <h3>Nuestros Servicios:</h3>
                                    {/* <p>Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking.</p> */}
                                    <ul>
                                        <li><b>Evaluación del Desarrollo:</b> Realizamos evaluaciones exhaustivas para identificar áreas de fortaleza y áreas en las que se necesita apoyo.</li>
                                        <li><b>Terapia de Estimulación:</b> Ofrecemos terapias diseñadas para estimular el desarrollo cognitivo, motor y emocional de tu hijo.</li>
                                        <li><b>Apoyo a la Familia:</b> Creemos en trabajar con las familias para proporcionar herramientas y estrategias que promuevan el neurodesarrollo en el hogar.</li>
                                        <li><b>Terapia Individualizada:</b> Cada niño es diferente, por lo que creamos planes de tratamiento personalizados para satisfacer las necesidades únicas de tu hijo.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                                <div className="w-full mx-auto">
                                    <h2 className='text-pink-600'>Desbloquea el Potencial de Tu Hijo con Nuestra Terapia de Neurodesarrollo Infantil.</h2>
                                    <h3 className='text-pink-600'>¿Por Qué Elegirnos?</h3>
                                    {/* <p>¿Por Qué Elegirnos?</p> */}
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                                <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                                    </svg>
                                </div>
                                <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                                    <h2>Somos Expertos.</h2>
                                    <p>Realizamos evaluaciones exhaustivas para identificar áreas de fortaleza y áreas en las que se necesita apoyo.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                                <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                                    </svg>
                                </div>
                                <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                                    <h2>Enfoque Integral.</h2>
                                    <p>Abordamos el desarrollo desde una perspectiva integral, considerando aspectos cognitivos, emocionales y físicos.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                                <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                                    </svg>
                                </div>
                                <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                                    <h2>Apoyo a las familias.</h2>
                                    <p>Reconocemos la importancia de las familias en el proceso de neurodesarrollo y proporcionamos orientación y apoyo continuo.</p>
                                </div>
                            </div>
                        </div>
                    </section>




                    {/* call to action inicio */}
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                    <Image
                                    className="object-cover object-center rounded"
                                    src="/images/beneficio-terapia.jpg"
                                    alt="Terapia de pareja"
                                    title="La terapia es de gran ayuda"
                                    width={800}
                                    height={800}
                                    priority
                                    placeholder
                                        />
                                </div>
                                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Beneficios de acudir a
                                    <br className="hidden lg:inline-block"/>Terapia
                                    </h2>
                                    <p className="mb-8 text-2xl leading-relaxed">Ayudare a mejorar la comunicación y las habilidades sociales, el rendimiento académico y autoestima de quien más quieres.</p>
                                    <div className="flex justify-center">
                                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                                            <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Agendar cita</button>
                                        </Link>
                                    </div>
                                </div>
                    </div>
                            {/* call to action fin  */}
                            
                </motion.section>

                {/* INICIO WIDGET DE DOCTORALIA */}
                <DoctoraliaWidget/>
                {/* FIN WIDGET DE DOCTORALIA */}

                <section>
                    <div class=" flex flex-col items-center px-5 py-8 mx-auto">
                        <div class="flex flex-col w-full mb-8 prose text-left max-w-max lg:max-w-2xl">
                            <div class="w-full mx-auto">
                                <h2 className='text-pink-600'>Contáctanos:</h2>
                                <p>¡Estamos aquí para ayudar! Si tienes alguna pregunta o deseas programar una consulta, no dudes en ponerte en contacto con nosotros.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" items-center w-full px-5">
                        <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                            <div className="relative justify-center lg:px-4">
                                <div className="lg:grid lg:grid-cols-2">
                                    <div className="p-8">
                                        <h3 className="text-pink-600">Transformando Desafíos en Oportunidades.</h3>
                                        <p>Únete a nosotros en esta emocionante aventura para promover el neurodesarrollo infantil y brindar a los niños las herramientas que necesitan para un futuro brillante. ¡Contáctanos hoy mismo!</p>
                                        
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-pink-600">Terapia de Neurodesarrollo para Niños y Adolescentes.</h3>
                                        <p>Cada niño posee su propia singularidad, y su desarrollo cerebral avanza de manera personalizada.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA INICIO */}
                <section className="text-gray-600 body-font bg-green-400 py-3 mt-3">
                    <div className="container mt-5 mb-5">
                    <h3 className="text-center mt-5 mb-5 font-DMSans text-black">
                    Te proporcionare apoyo emocional y  guiare a tu hijo hacia el Éxito.
                    </h3>
                        <div className="grid place-items-center ">
                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                            <button className="justify-self-center text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">Agendar cita</button>
                        </Link>
                        </div>
                    </div>
                </section>
                {/* CTA FIN */}

                

                

                
                

                    

                            {/* frase final INICIO */}
                                <section className="text-gray-600 body-font py-3 pb-3 mt-3">
                                    <div className="container mt-5 mb-5">
                                        <h3 className="text-center text-3xl mt-5 mb-5 font-DMSans text-pink-600">
                                        "No hay problema demasiado pequeño o grande para buscar ayuda."
                                        </h3> 
                                    </div>
                                </section>
                                {/* frase final FIN */}

            </Layout>
        </>
  )
}

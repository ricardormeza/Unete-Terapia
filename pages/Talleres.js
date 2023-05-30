import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import Layout from '../components/Layout';

export default function Talleres() {
    return (
        <>
        <Layout
        title={'Talleres'}
        description={'En Unete tenemos diferentes talleres de orientación psicológica y fomentar el desarrollo emocional, dirigido a padres, adolescentes y niños.'}
        >
            <>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="container"
            >
                <div>
                    <div className="rounded-lg h-64 overflow-hidden">
                    <Image
                        className="object-cover object-center h-full w-full"
                        src="/images/talleres-impartido.jpg"
                        alt="talleres impartido por la Mtra. Yeimy"
                        width={900}
                        height={900}
                        priority
                        placeholder
                    />
                    </div>
                    <div className="container ">
                    <div>
                        <h1 className="title-font sm:text-2xl text-xl font-medium py-2 font-DMSans text-pink-600">
                        Talleres.
                        </h1>
                        {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                        <br />
                        <p className="text-base font-DMSans text-justify">
                        En la actualidad, existen diversos talleres de orientación psicológica que están dirigidos a padres, adolescentes y niños. Estos talleres pueden ser de gran ayuda para fomentar el desarrollo emocional, social y cognitivo de los participantes, así como para abordar situaciones específicas que puedan estar afectando su bienestar psicológico.
                        </p>
                        
                        <p className="text-base font-DMSans text-justify">
                        A continuación, se presentan algunos ejemplos de talleres de orientación psicológica que pueden ser beneficiosos para padres, adolescentes y niños:
                        </p>
                    </div>
                    </div>
                </div>

                </motion.section>

                <div className="body-font bg-red-100 py-5">
                    <div className="container">
                    <ul class="list-disc">
                        <li>
                        Taller de habilidades sociales: Este taller está diseñado para mejorar la capacidad de los participantes para relacionarse con los demás de manera efectiva. Se enfoca en el desarrollo de habilidades como la empatía, la comunicación asertiva y la resolución de conflictos.
                        </li>
                        <li>
                        Taller de inteligencia emocional: Este taller se enfoca en ayudar a los participantes a comprender y gestionar sus emociones. Se enfoca en el desarrollo de habilidades como la autoconciencia, la regulación emocional y la empatía.
                        </li>
                        <li>
                        Taller de manejo del estrés: Este taller está diseñado para ayudar a los participantes a identificar y manejar situaciones estresantes en su vida. Se enfoca en el desarrollo de habilidades como la relajación muscular, la respiración consciente y la visualización.
                        </li>
                        <li>
                        Taller de mindfulness: Este taller se enfoca en enseñar a los participantes a estar presentes en el momento y a ser conscientes de sus pensamientos y emociones sin juzgarlos. Se enfoca en el desarrollo de habilidades como la atención plena, la meditación y la relajación.
                        </li>
                        <li>
                        Taller de resolución de problemas: Este taller está diseñado para enseñar a los participantes a identificar y resolver problemas de manera efectiva. Se enfoca en el desarrollo de habilidades como la toma de decisiones, la creatividad y el pensamiento crítico.
                        </li>
                        <li>
                        Taller de comunicación familiar: Este taller está diseñado para ayudar a las familias a mejorar su comunicación y resolver conflictos de manera efectiva. Se enfoca en el desarrollo de habilidades como la escucha activa, la comunicación asertiva y la empatía.
                        </li>
                        <li>
                        Taller de autoestima: Este taller se enfoca en ayudar a los participantes a mejorar su autoestima y confianza en sí mismos. Se enfoca en el desarrollo de habilidades como el autoconocimiento, la autocompasión y el cuidado personal.
                        </li>
                        <li>
                        Taller de prevención de acoso escolar: Este taller está diseñado para enseñar a los participantes cómo identificar y prevenir situaciones de acoso escolar. Se enfoca en el desarrollo de habilidades como la empatía, la resolución de conflictos y la comunicación asertiva.
                        </li>
                        <li>
                        Taller de habilidades para la vida: Este taller se enfoca en enseñar a los participantes habilidades prácticas para la vida diaria, como la gestión del tiempo, la organización y el manejo del dinero.
                        </li>
                        <li>
                        Taller de orientación vocacional: Este taller está diseñado para ayudar a los adolescentes a identificar sus intereses y habilidades para elegir una carrera. Se enfoca en el desarrollo de habilidades como la autoexploración, la investigación de carreras y la planificación.
                        </li>
                        
                    </ul>
                    </div>
                </div>



                {/* call to action inicio */}
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        className="object-cover object-center rounded"
                        src="/images/beneficio-terapia.jpg"
                        alt="Terapia de pareja"
                        width={800}
                        height={800}
                        priority
                        placeholder
                    />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Beneficios de acudir a un Taller
                    </h2>
                        <p className="mb-8 text-2xl leading-relaxed">
                        Tomar un taller te ayudará a mejorar el desarrollo emocional, social y así tener una calidad de vida mejor, en Unete te ayudamos, agenda tu cita.
                        </p>
                    <div className="flex justify-center">
                        <Link href="https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez">
                        <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Agendar cita
                        </button>
                        </Link>
                    </div>
                    </div>
                </div>
                {/* call to action fin  */}
                

                {/* CUADRO VERDE INICIO */}
                <div className="body-font bg-green-100 py-5">
                    <div className="container">
                    <div className="py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <p
                                href="#"
                                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                            >
                                <Image
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                src="/images/familia.jpg"
                                alt="valor familia"
                                width={800}
                                height={800}
                                priority
                                placeholder
                                />
                            </p>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold text-gray-800">
                                <p
                                    href="#"
                                    className="transition duration-100 hover:text-pink-500 active:text-pink-600"
                                >
                                    COMPARTIR PENSAMIENTOS Y EMOCIONES
                                </p>
                                </h3>
                            </div>
                            </div>
                            {/* <!-- article - end --> */}

                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <p
                                href="#"
                                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                            >
                                <Image
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                src="/images/amor.jpg"
                                alt="valor amor"
                                width={800}
                                height={800}
                                priority
                                placeholder
                                />
                            </p>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold text-gray-800">
                                <p
                                    href="#"
                                    className="transition duration-100 hover:text-pink-500 active:text-pink-600"
                                >
                                    DESARROLLAR HABILIDADES SOCIALES
                                </p>
                                </h3>
                            </div>
                            </div>
                            {/* <!-- article - end --> */}

                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <p
                                href="#"
                                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                            >
                                <Image
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                src="/images/soporte.jpg"
                                alt="valor soporte"
                                width={800}
                                height={800}
                                priority
                                placeholder
                                />
                            </p>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold text-gray-800">
                                <p
                                    href="#"
                                    className="transition duration-100 hover:text-pink-500 active:text-pink-600"
                                >
                                    ESTABLECER METAS REALISTAS
                                </p>
                                </h3>
                            </div>
                            </div>
                            {/* <!-- article - end --> */}

                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <p
                                href="#"
                                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                            >
                                <Image
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                src="/images/emociones.jpg"
                                alt="valor emociones"
                                width={800}
                                height={800}
                                priority
                                placeholder
                                />
                            </p>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold text-gray-800">
                                <p
                                    href="#"
                                    className="transition duration-100 hover:text-pink-500 active:text-pink-600"
                                >
                                    FOMENTAR EL AUTOCUIDADO
                                </p>
                                </h3>
                            </div>
                            </div>
                            {/* <!-- article - end --> */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* CUADRO VERDE FIN */}

                {/* CTA INICIO */}
                <section className="text-gray-600 body-font bg-green-400 py-3 mt-3">
                <div className="container mt-5 mb-5">
                    <h3 className="text-center mt-5 mb-5 font-DMSans text-black">
                    Te ayudare a desarrollar habilidades para manejar el estrés, la ansiedad y la depresión, lo que puede mejorar tu capacidad para enfrentar los desafíos de la vida
                    </h3>
                    <div className="grid place-items-center ">
                    <Link href="https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez">
                        <button className="justify-self-center text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">
                        Agendar cita
                        </button>
                    </Link>
                    </div>
                </div>
                </section>
                {/* CTA FIN */}

                

                {/* frase final INICIO */}
                <section className="text-gray-600 body-font py-3 pb-3 mt-3">
                <div className="container mt-5 mb-5">
                    <h3 className="text-center text-3xl mt-5 mb-5 font-DMSans text-pink-600">
                    "Pedir ayuda es un signo de fortaleza, no de debilidad."
                    </h3>
                </div>
                </section>
                {/* frase final FIN */}
            
            </>
        </Layout>
        </>
    )
}

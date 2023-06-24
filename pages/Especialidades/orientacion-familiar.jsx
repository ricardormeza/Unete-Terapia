import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import Layout from '../../components/Layout';

export default function orientacionFamiliar() {
    return (
        <>
        <Layout
                title={'Orientación familiar en Tuxtla Gutiérrez'}
                description={'En Unete tenemos orientación familiar para ayudar a las familias a mejorar su comunicación, resolver conflictos y fortalecer los lazos familiares.'}
                abstract={'Orientación familiar y psicóloga en Chiapas'}
                author={'Consultorio UNETE'}
                copyright={'terapiapsicologia'}
                keywords={'orientacion, familia, familiar, asesoramiento familiar, crianza familiar,'}
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
                            src="/images/orientacion-familiar.jpg"
                            alt="desarrollo neurologico portada"
                            title="Orientación familiar"
                            width={900}
                            height={900}
                            priority
                            placeholder
                        />
                    </div>
                        <div className="container ">
                            <div>
                                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-pink-600' id='evaluacion'>Orientación familiar.</h1>
                                {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                                <br/>
                                <p className='text-base font-DMSans text-justify'>En UNETE nos especializamos en orientación familiar, entiendo que las relaciones familiares pueden ser complicadas y a veces conflictivas. La orientación familiar es una herramienta valiosa que puede ayudar a las familias a enfrentar y superar los desafíos que enfrentan.</p>
                                <p className='text-base font-DMSans text-justify'>La orientación familiar es un enfoque terapéutico que se enfoca en la dinámica familiar y busca identificar patrones de comportamiento, así como ayudar a las familias a resolver problemas y mejorar sus relaciones. Se basa en una variedad de teorías psicológicas, incluyendo la teoría de sistemas, la teoría del apego y la teoría del ciclo de vida familiar.</p>
                                <p className='text-base font-DMSans text-justify'>En la orientación familiar, nosotros trabajamos con la familia como unidad y se involucra a todos los miembros en el proceso de tratamiento. Este enfoque reconoce que las familias son sistemas complejos y que los problemas en una parte del sistema pueden afectar a otras partes del sistema. Por lo tanto, el tratamiento debe centrarse en el sistema familiar en su conjunto, en lugar de tratar a los miembros de la familia individualmente.</p>
                                <p className='text-base font-DMSans text-justify'>La orientación familiar puede ser útil en una variedad de situaciones, incluyendo:</p>
                            </div>
                        </div>
                    </div>
                    {/* <CtaDoctoralia/> */}
                </motion.section>
                <div className="body-font bg-red-100 py-5">
                    <div className="container">
                        <ul class="list-disc">
                            <li>Problemas de comunicación: Las familias a menudo luchan con problemas de comunicación que pueden afectar su capacidad para relacionarse y resolver conflictos. La orientación familiar puede ayudar a los miembros de la familia a aprender a comunicarse de manera efectiva y a escuchar activamente.</li>
                            <li>Problemas de conducta: Los niños y adolescentes pueden enfrentar problemas de conducta en el hogar y en la escuela. La orientación familiar puede ayudar a los padres a entender y abordar estos problemas de manera efectiva.</li>
                            <li>Cambios en la estructura familiar: Las familias a menudo enfrentan cambios importantes, como la llegada de un nuevo bebé, el divorcio o la muerte de un miembro de la familia. La orientación familiar puede ayudar a las familias a adaptarse a estos cambios y a desarrollar estrategias efectivas para manejarlos.</li>
                            <li>Problemas de salud mental: La orientación familiar también puede ser útil para las familias que enfrentan problemas de salud mental, como la depresión, la ansiedad o los trastornos del espectro autista. El tratamiento puede ayudar a los miembros de la familia a entender y apoyar mejor a la persona que está experimentando estos problemas.</li>
                        </ul>
                    </div>
                </div>
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="container">
                    <div>
                        <div className="container py-5">
                            <div>
                                <h2 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-pink-600' id='neuropsicologico'>Desarrolla habilidades afectivas para quienes más quieres.</h2>
                                
                                <br/>
                                {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                                <p className='title-font text-base font-DMSans text-justify'>En UNETE ofrecemos una variedad de servicios para ayudar a las familias a mejorar sus relaciones y abordar los problemas que enfrentan. Algunos de los servicios que ofrezco incluyen:</p>
                                <p className='text-base font-DMSans text-justify'>Evaluación de la dinámica familiar: Antes de comenzar cualquier tratamiento, realizo una evaluación completa de la dinámica familiar para entender cómo los miembros de la familia se relacionan entre sí y qué problemas enfrentan. Esta evaluación incluye entrevistas individuales con cada miembro de la familia y, en algunos casos, pruebas psicológicas.</p>
                                <p className='text-base font-DMSans text-justify'>Terapia de juego: La terapia de juego es una técnica que utilizo con niños y adolescentes para ayudarles a expresar sus emociones y pensamientos a través del juego. Utilizo juguetes y juegos específicos para ayudar a los niños a expresarse y procesar sus experiencias.</p>
                                <p className='text-base font-DMSans text-justify'>Educación y entrenamiento para padres: Ofrezco educación y entrenamiento para padres para ayudarles a desarrollar habilidades efectivas para la crianza de los hijos. Esto puede incluir estrategias para lidiar con problemas de comportamiento, comunicación efectiva y cómo manejar situaciones difíciles.</p>
                                <p className='text-base font-DMSans text-justify'>La orientación familiar es una herramienta valiosa para ayudar a las familias a superar los desafíos que enfrentan y mejorar sus relaciones. En UNETE nuestro objetivo es trabajar con las familias para ayudarles a desarrollar estrategias efectivas para mejorar su relación y abordar los problemas que enfrentan. Si su familia está enfrentando problemas, no dude en ponerse en contacto nosotros para programar una cita y comenzar el proceso de orientación familiar.</p>
                            </div>
                        </div>
                    </div>
                    {/* <CtaDoctoralia/> */}
                </motion.section>

                {/* CUADRO VERDE INICIO */}
                <div className="body-font bg-green-100 py-5">
                    <div className="container">
                    <div className="py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                            <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                                <p href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                    <Image
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src="/images/familia.jpg"
                                        alt="valor familia"
                                        title="La familia es lo más importante"
                                        width={800}
                                        height={800}
                                        priority
                                        placeholder
                                    />
                                </p>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        <p href="#" className="transition duration-100 hover:text-pink-500 active:text-pink-600">Orientación a Padres</p>
                                    </h3>
                                </div>
                            </div>
                            {/* <!-- article - end --> */}

                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                                <p href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                    <Image
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src="/images/amor.jpg"
                                        alt="valor amor"
                                        title="El amor en la familia es lo más importante"
                                        width={800}
                                        height={800}
                                        priority
                                        placeholder
                                    />
                                </p>
                                
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        <p href="#" className="transition duration-100 hover:text-pink-500 active:text-pink-600">Valoración</p>
                                    </h3>
                                </div>
                                
                            </div>
                            {/* <!-- article - end --> */}

                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                                <p href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                    <Image
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src="/images/soporte.jpg"
                                        alt="valor soporte"
                                        title="La familia es el soporte más importante en la vida"
                                        width={800}
                                        height={800}
                                        priority
                                        placeholder
                                    />
                                </p>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        <p href="#" className="transition duration-100 hover:text-pink-500 active:text-pink-600">Terapia de lenguaje</p>
                                    </h3>
                                </div>
                            </div>
                            {/* <!-- article - end --> */}

                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                                <p href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                    <Image
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src="/images/emociones.jpg"
                                        alt="valor emociones"
                                        title="La sensación de sentirse querido por la familia"
                                        width={800}
                                        height={800}
                                        priority
                                        placeholder
                                    />
                                </p>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        <p href="#" className="transition duration-100 hover:text-pink-500 active:text-pink-600">Habilidades sociales</p>
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
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="container">
                    <div>
                        <div className="container py-5">
                            

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
                                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Beneficios de la orientación familiar
                                    {/* <br className="hidden lg:inline-block"/> */}
                                    </h2>
                                    <p className="mb-8 text-2xl leading-relaxed">Mejora la comunicación, la comprensión y la comunicación de manera efectiva de aquellos a quien más quieres, en Unete te ayudamos, agenda tu cita en el link de abajo.</p>
                                    <div className="flex justify-center">
                                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                                            <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Agendar cita</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* call to action fin  */}
                        </div>
                    </div>
                </motion.section>

                            {/* frase final INICIO */}
                                <section className="text-gray-600 body-font py-3 pb-3 mt-3">
                                    <div className="container mt-5 mb-5">
                                        <h3 className="text-center text-3xl mt-5 mb-5 font-DMSans text-pink-600">
                                        "La orientación familiar puede ayudar a las familias a identificar patrones negativos de comunicación y comportamiento, y a desarrollar estrategias para cambiarlos. Esto puede mejorar la dinámica familiar en general y ayudar a los miembros de la familia a trabajar juntos de manera más efectiva para abordar los problemas que enfrentan."
                                        </h3> 
                                    </div>
                                </section>
                                {/* frase final FIN */}

            </Layout>
        
        </>
    )
}

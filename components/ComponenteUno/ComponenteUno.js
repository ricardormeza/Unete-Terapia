import React from 'react';
import Link from 'next/link'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

export default function ComponenteUno() {
    const [text, count] = useTypewriter({
        words: [
            "Especialista en Psicología",
            "Diagnóstico y tratamiento",
            "Terapia familiar",
            "Terapia de pareja",
            "Terapia individual",
            "Atención a niños, adolescentes y adultos",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <>
        <div className="text-center mt-5">
            <h1 className='text-center font-DMSans text-pink-600'>Mtra. <strong>Yeimi Rocio Avila Pontón</strong> </h1>
            <h2 className='text-green-500 font-DMSans'><span>{text}</span>.<Cursor cursorColor='#DB2777' /></h2>
            <div className='flex'>
            <h2 clasName="text-center w-4/5 font-DMSans">Incrementa tu calidad de vida con la mejor <span className='font-DMSans'>Psicóloga </span> en 
            <span className="font-DMSans"> Tuxtla Gutíerrez, Chiapas.</span> </h2>

            </div>
        </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h3 className="text-center font-DMSans text-pink-600">Nuestro Servicios</h3>
                    <p className='font-DMSans text-center'>En nuestros servicios psicológicos especializados brindamos diagnóstico y tratamiento en niños, adolescentes y adultos. </p>
                    <div className="flex flex-wrap -m-4">
                        {/* DESARROLLO NEUROLOGICO INICIO */}
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative z-0 hover:bg-pink-200">
                                <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">Desarrollo Neuropsicológico</h3>
                                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">Trastorno del neurodesarrollo.</h2>
                                <p className="leading-relaxed mb-3 font-DMSans">Es importante tener en cuenta que en una misma persona puede manifestarse más de un trastorno del neurodesarrollo.</p>
                                <Link 
                                href='/Especialidades/ansiedad'
                                legacyBehavior
                                >
                                    <a className="text-pink-500 inline-flex items-center font-DMSans">Saber más
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/* DESARROLLO NEUROLOGICO FIN */}
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative z-0 hover:bg-pink-200">
                                <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">Ansiedad</h3>
                                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">Tratamiento de Ansiedad </h2>
                                <p className="leading-relaxed mb-3 font-DMSans">En los criterios clínicos presentan preocupación acerca de varias actividades o acontecimiento y tienen dificultad para controlar las preocupaciones.</p>
                                <Link 
                                href='/Especialidades/ansiedad'
                                legacyBehavior
                                >
                                    <a className="text-pink-500 inline-flex items-center font-DMSans">Saber más
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/* DEPRESION */}
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
                                <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">Depresión</h3>
                                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">Tratamiento de Depresión </h2>
                                <p className="leading-relaxed mb-3 font-DMSans">Maltratando de diversas formas y, al mismo tiempo que lo explica, se ríe de forma incontrolada, labilidad afectiva.  Cambios en el estado emocional, generalmente independiente de estímulos causales externos.</p>
                                <a className="text-pink-500 inline-flex items-center font-DMSans">Saber más
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                
                            </div>
                        </div>
                        {/* ESTRES */}
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
                                <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">Estrés</h3>
                                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">Terapia y manejo de Estrés</h2>
                                <p className="leading-relaxed mb-3 font-DMSans">Sobrecarga de tensión que repercute en el organismo y provoca la aparición de enfermedades y anomalías patológicas que impiden el normal desarrollo y funcionamiento del cuerpo humano.</p>
                                <a className="text-pink-500 inline-flex items-center font-DMSans">Saber más
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                
                            </div>
                        </div>
                        {/* AUTOESTIMA */}
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
                                <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">Autoestima</h3>
                                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">Manejo de Autoestima</h2>
                                <p className="leading-relaxed mb-3 font-DMSans">Es el concepto que tenemos de nuestra valía y se basa en todos los pensamientos, sentimientos, sensaciones y experiencias que sobre nosotros mismos...</p>
                                <a className="text-pink-500 inline-flex items-center font-DMSans">Saber más
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* AUTOESTIMA FIN */}
                        {/* TANATOLOGIA INICIO */}
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
                                <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">Tanatología</h3>
                                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">Manejo de la perdida de un ser querido.</h2>
                                <p className="leading-relaxed mb-3 font-DMSans">Intervencion en el tratado de los duelos derivados de pérdidas significativas que no tengan o no que ver con la muerte física o enfermos terminales.</p>
                                <a className="text-pink-500 inline-flex items-center font-DMSans">Saber más
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* TANATOLOGIA FIN */}
                        {/* ESTRES POSTRAUMATICO */}
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
                                <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">Estrés postraumatico</h3>
                                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">Manejo de Estrés postraumatico</h2>
                                <p className="leading-relaxed mb-3 font-DMSans">Desencadenada por una situación aterradora, ya sea que la hayas experimentado o presenciado. Los síntomas pueden incluir reviviscencias, pesadillas...</p>
                                <a className="text-pink-500 inline-flex items-center font-DMSans">Saber más
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* ESTRES POSTRAUMATICO FIN */}
                        {/* TOC */}
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
                                <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">toc</h3>
                                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">Manejo de trastorno obsesivo compulsivo </h2>
                                <p className="leading-relaxed mb-3 font-DMSans">Se caracteriza por un patrón de pensamientos y miedos no deseados (obsesiones) que provocan comportamientos repetitivos...</p>
                                <a className="text-pink-500 inline-flex items-center font-DMSans">Saber más
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* TOC FIN */}
                    </div>
                </div>
            </section>
        </>
    )
}

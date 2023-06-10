import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Footer.module.css'

export default function Footer() {
    const current = new Date();
    const date = `${current.getFullYear()}`;
    return (
        <>
        <footer className="bg-[#BF1B75] text-white body-font">
            <div className="container px-5 pt-5 pb-24  mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-2 mt-10">
                    <div className={`${styles.lineaFooter}`}>
                        <Link href='/'>
                            <Image src="/circulo-logo.jpg" 
                                    alt='logo de unete'
                                    width={80}
                                    height={80}
                                    className='rounded-full object-center'
                                    />
                        </Link>

                    </div>
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> */}
                        <span className="ml-3 text-xl">
                            
                        </span>
                    </a>
                    <p className="mt-2 text-sm text-white">"Encuentra la felicidad en tu camino hacia la sanación emocional".</p>
                </div>
                <div className="flex-grow flex flex-wrap mt-5 md:pr-20-mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Conócenos</h2>
                        {/* <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-200">Acerca de</a>
                            </li>
                            
                        </nav> */}
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <Link href="/Especialidades/orientacion-familiar">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Especialidades</h2>
                        </Link>
                        {/* <nav className="list-none mb-10">
                        <li>
                                <Link href="/Especialidades/desarrollo-neuropsicologico" legacyBehavior>
                                    <a className="text-white hover:text-gray-200">Desarrollo Neuropsicológico</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Especialidades/ansiedad" legacyBehavior>
                                    <a className="text-white hover:text-gray-200">Ansiedad</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Especialidades/depresion" legacyBehavior>
                                    <a className="text-white hover:text-gray-200">Depresión</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Especialidades/autoestima" legacyBehavior>
                                    <a className="text-white hover:text-gray-200">Autoestima</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Especialidades/estres" legacyBehavior>
                                    <a className="text-white hover:text-gray-200">Estrés</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Especialidades/estres-postraumatico" legacyBehavior>
                                    <a className="text-white hover:text-gray-200">Estrés Postraumático</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Especialidades/tanatologia" legacyBehavior>
                                    <a className="text-white hover:text-gray-200">Tanatología</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Especialidades/trastorno-obsesivo-compulsivo" legacyBehavior>
                                    <a className="text-white hover:text-gray-200">TOC</a>
                                </Link>
                            </li>
                        </nav> */}
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <Link href="/Talleres">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Talleres</h2>
                        </Link>
                        {/* <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-200">Taller 1</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-200">Taller 2</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-200">Taller 3</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-200">Taller 4</a>
                            </li>
                        </nav> */}
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <Link href="/Contacto">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contacto</h2>
                        </Link>
                        {/* <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-200">Primer Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-200">Segundo Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-200">Tercer Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-green-800">Cuarto Link</a>
                            </li>
                        </nav> */}
                    </div>
                </div>
            </div>
            <div className="bg-pink-300">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-center">
                    
                    <p className="text-white font-bold text-sm text-center "> {date} UNETE
                    </p>
                    
                    {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500 hover:text-pink-800">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-pink-800">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-pink-800">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-pink-800">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span> */}
                </div>
            </div>
        </footer>
        </>
    )
}

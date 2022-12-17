import React from 'react'
import Link from 'next/link'

export default function CtaDoctoralia() {
  return (
    <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font text-center mb-2 md:w-2/5">Mtra. Yeimi Rocio Avila Pontón</h2>
                <div className="md:w-3/5 md:pl-6">
                    <p className="leading-relaxed text-base">La terapia mejora tu salud y bienestar, reducira el sufrimiento innecesario. <span>Agenda una cita</span> y platica conmigo. Vive plenamente y disfruta de la vida.</p>
                    <div className="flex md:mt-4 mt-6">
                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                        <button className='bg-pink-500 hover:bg-green-400 text-white font-bold py-1 px-3.5 rounded'>
                        Agenda tu citas
                        </button>
                    </Link>
                        {/* <button className="inline-flex text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded">Acenda tu cita</button> */}
                        {/* <a className="text-indigo-500 inline-flex items-center ml-4">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
  )
}

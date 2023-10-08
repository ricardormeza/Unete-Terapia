import React from 'react';
import Link from 'next/link'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import styles from '../../styles/ComponenteUno.module.css'
import DoctoraliaWidget from '../Doctoralia/Doctoralia';


export default function AgendaCita() {
  return (
    <>
        <section className="bg-pink-300 rounded-lg text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h2 className="title-font font-medium text-3xl text-gray-900" id='agendacitaahora'>¿Listo para dar el primer paso hacia tu bienestar? Estamos aquí para ti. </h2>
                <p className="leading-relaxed mt-4">Agenda tu cita ahora y comencemos juntos este viaje hacia una vida más saludable y equilibrada.</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <DoctoraliaWidget/>
                
                </div>
            </div>
        </section>
    </>
  )
}

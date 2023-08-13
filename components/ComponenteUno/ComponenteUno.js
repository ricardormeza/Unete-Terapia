import React from 'react';
import Link from 'next/link'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import styles from '../../styles/ComponenteUno.module.css'


export default function ComponenteUno() {
    const [text, count] = useTypewriter({
        words: [
            "Especialista en Psicología",
            "Diagnóstico y tratamiento",
            "Orientación familiar",
            "Terapia individual",
            "Orientación educativa",
            "Atención a niños, adolescentes y adultos",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <>
        <div className="text-center mt-5">
            <h1 className='text-center font-DMSans text-pink-600'>Mtra. <strong>Yeimy Rocio Avila Pontón</strong> </h1>
            <h2 className='text-green-500 font-DMSans'><span>{text}</span>.<Cursor cursorColor='#DB2777' /></h2>
            <div className='flex mt-4 mb-4'>
                <h2 className="text-center  font-DMSans">Encuentra la claridad, la paz mental y la felicidad que mereces con la mejor <span className='font-DMSans'>psicóloga </span> en 
                <span className="font-DMSans"> Tuxtla Gutíerrez, Chiapas;</span> y comienza tu camino hacia una vida plena y satisfactoria.</h2>
            </div>
            <div className={`${styles.divAgendarCita}`}>
            <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                <button className={`${styles.btnAgendarCita}`}>
                    Agendar cita
                </button>
            </Link>
            <Link href='#especialidades'>
                <button className={`${styles.btnEspecialidades}`}>
                    Especialidades
                </button>
            </Link>    
            </div>
        </div>
        </>
    )
}

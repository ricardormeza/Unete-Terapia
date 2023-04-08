import React from 'react';
import { motion } from "framer-motion";

const direccionL = true;
export default function ComponenteDos(direccionL) {
  return (
    <section className="text-gray-600 body-font">
      <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-pink-500 tracking-widest font-medium title-font mb-1">UN ESPACIO PARA RENACER</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Beneficios de acudir a <span> terapia</span></h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue leo tortor, posuere pretium turpis pharetra quis. Duis in congue elit. Aliquam erat volutpat. Quisque luctus libero dolor, quis condimentum nunc porta at. Nulla dictum metus justo, vitae tristique augue ultrices gravida. Quisque ut tellus pulvinar, commodo massa non, malesuada dui.</p>
        </div>
        <motion.div 
        initial={{
          x: direccionL ? -200 : 200,
          opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x:0 }}
        className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Terapia Individual</h2>
            <p className="leading-relaxed text-base mb-4">Phasellus mi lacus, sagittis in pulvinar quis, volutpat non lacus. Donec luctus pulvinar tincidunt.</p>
            <a className="text-pink-500 inline-flex items-center">Conocer más...
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Consulta Psicológica</h2>
            <p className="leading-relaxed text-base mb-4">Phasellus mi lacus, sagittis in pulvinar quis, volutpat non lacus. Donec luctus pulvinar tincidunt.</p>
            <a className="text-pink-500 inline-flex items-center">Conocer más...
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Soporte Emocional</h2>
            <p className="leading-relaxed text-base mb-4">Phasellus mi lacus, sagittis in pulvinar quis, volutpat non lacus. Donec luctus pulvinar tincidunt.</p>
            <a className="text-pink-500 inline-flex items-center">Conocer más...
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Talleres</h2>
            <p className="leading-relaxed text-base mb-4">Phasellus mi lacus, sagittis in pulvinar quis, volutpat non lacus. Donec luctus pulvinar tincidunt.</p>
            <a className="text-pink-500 inline-flex items-center">Conocer más...
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </motion.div>
        <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Agendar Cita</button>
      </motion.div>
    </section>
  )
}


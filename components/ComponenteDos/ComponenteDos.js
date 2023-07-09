import React from 'react';
import Link from 'next/link'
import { motion } from "framer-motion";
import Image from 'next/image';
import benefiPic from '../../public/images/beneficio-terapia.jpg';

const direccionL = true;
export default function ComponenteDos(direccionL) {
  return (
    <section className="text-gray-600 body-font">
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container px-5 py-24 mx-auto">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
              className="d-block w-100"
              src={benefiPic}
              alt="Terapia de pareja"
              width={800}
              height={800}
              
              placeholder="blur"
              title="chicas felices por ir a terapia"
              rel="preload"
              as="image"
              loading = 'lazy'
                />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Beneficios de acudir a
              <br className="hidden lg:inline-block"/>Terapia
            </h2>
            <p className="mb-8 text-2xl leading-relaxed">Te ayudare a procesar y comprender los problemas y emociones difíciles en un espacio seguro y sin juicios.</p>
            <div className="flex justify-center">
              <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Agendar cita</button>
              </Link>
            </div>
          </div>
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
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Aumenta la autoestima y la confianza</h2>
              <p className="leading-relaxed text-base mb-4">Recuerda tus logros pasados y utilízalos como motivación para alcanzar nuevos objetivos.</p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Mejora las relaciones</h2>
              <p className="leading-relaxed text-base mb-4">Busca un punto en común y trabaja en equipo para encontrar una solución.</p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Ayuda a manejar el estrés y la ansiedad</h2>
              <p className="leading-relaxed text-base mb-4">Encuentra una actividad que te guste y te relaje, como el ejercicio o la lectura.</p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Promueve el crecimiento personal</h2>
              <p className="leading-relaxed text-base mb-4">Sé honesto/a contigo mismo/a acerca de tus fortalezas y debilidades para poder trabajar en ellas.</p>
            </div>
          </motion.div>
        
      </motion.div>
    </section>
  )
}


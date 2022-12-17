import React from 'react'
import { motion } from "framer-motion"

export default function ExperienceCard2() {
  return (
    <article className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center 
        bg-[#ec4899] p-10 hover:opacity-100 opacity-40 cursor-pointer
        transition-opacity duration-200 overflow-hidden">
            
            <div className="px-0 md:px-8">
                <h4 className="text-4xl text-green-500 font-light">J.F.</h4>
                <p className="font-bold text-green-500 text-2xl mt-1">13-Dic-2022 | Cita agendada en Doctoralia</p>
                
                    <p className="uppercase py-5 text-gray-300">Muy amable y linda, te explica bastante bien y te sientes muy cómodo y en confianza hablando con ella.</p>
            </div>
            
        </article>
  )
}

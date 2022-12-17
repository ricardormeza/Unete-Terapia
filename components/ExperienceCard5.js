import React from 'react'

export default function ExperienceCard5() {
  return (
    <article className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center 
        bg-[#ec4899] p-10 hover:opacity-100 opacity-40 cursor-pointer
        transition-opacity duration-200 overflow-hidden">
            
            <div className="px-0 md:px-8">
                <h4 className="text-4xl text-green-500 font-light">Cynthia Rodriguez</h4>
                <p className="font-bold text-green-500 text-2xl mt-1">23-Nov-2022 | Cita agendada en Doctoralia</p>
                
                    <p className="uppercase py-5 text-gray-300">Me gusta su trabajo donde puedo retroalimentarme me gustaría fuera muy neutral siempre y escribo más solo para hacer las 100.</p>
            </div>
            
        </article>
  )
}

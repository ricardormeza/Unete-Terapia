import React from 'react';
import { motion } from "framer-motion";
import ExperienceCard1 from "./ExperienceCard1";
import ExperienceCard2 from './ExperienceCard2';
import ExperienceCard3 from './ExperienceCard3';
import ExperienceCard4 from './ExperienceCard4';
import ExperienceCard5 from './ExperienceCard5'

export default function Experience() {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative overflox¡w-hidden flex-col text-left
    md:flex-row max-w-full px-8 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-28 uppercase 
        text-pink-500 text-2xl'>Opiniones</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-6 snap-x
        snap-mandatory'>
            <ExperienceCard1/>
            <ExperienceCard2/>
            <ExperienceCard3/>
            <ExperienceCard4/>
            <ExperienceCard5/>
        </div>
    </motion.div>
  )
}

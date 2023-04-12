import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import SwiAcerca from "../components/acercade/SwiAcerca";
import CtaAcerca from "../components/acercade/CtaAcerca";

export default function acerca() {
    return (
        <>
        <Layout
        title={'Acerca de mi'}
        description={'Centro de especialidad en comportamiento'}
        >
            <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className={`container`}>
                <h1 className="text-xl font-DMSans text-center text-green-500">Mtra. Yeimi Rocio Avila Pontón</h1>
                <div className="w-full flex justify-center">
                    <div className="w-24 h-24 rounded-full flex items-center  justify-center ">
                        <Image alt="imagen de Mtra. Yeimi Rocio Avila Pontón" className="object-cover object-center rounded-full h-full w-full self-center" src="/images/yeimirocioavilapontonmin.jpg" 
                        width={100} height={100}/>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-xl font-DMSans text-green-500">Formación academica:</h2>
                    <p className='text-base font-DMSans text-justify'><span>Maestría en Educación- Orientación Familiar Y Del adolescente 2020</span>.</p>
                    <p className='text-base font-DMSans text-justify'><span>Lic. En Psicologia ULV Tuxtla Gutierrez Chiapas 2017</span>.</p>
                    <p className='text-base font-DMSans text-justify'><span>Lic. En Educación Especial U.P.N Bogotá Colombia. 2009</span>.</p>
                </div>
                    <div className="mt-5">
                        <p className='text-base font-DMSans text-justify'>Con más de 10 años de experiencia en el enfoque <span>terapéutico cognitivo-conductual</span>, y <span>neuro-psicológico</span>, basado en la modificación estructural a partir de la funcionalidad, permiten lograr el equilibrio armonioso del individuo en las diferentes dimensiones o áreas de desarrollo.</p>
                        <p className='text-base font-DMSans text-justify'>Ademas de esto, con una gran pasión de servir y con amplia competencia para brindar <span>orientación familiar, individual, juvenil e infantil</span>.</p>
                        <p className='text-base font-DMSans text-justify'>Con formación académica en diplomados para la intervención de oportuna para atención en <span>tanatología</span>, <span>psicopatología infantil y juvenil</span>, <span>depresión</span>, <span>ansiedad</span>, <span>estrés</span>, <span>neuropsicología del desarrollo y orientación de padres</span>.</p>
                        <p className='text-base font-DMSans text-justify'>A travez de <span>talleres o platicas grupales para empresas, u organizaciones</span> asi mismo como en un proceso terapeutico de manera individual.</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-xl font-DMSans text-green-500">Especialista en:</h2>
                        <p className='text-base font-DMSans text-justify'><span>Tanatología</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Neuropsicología Infantil</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Modificación de Conducta en Niños y Adolescentes</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Psicoterapia Cognitivo Conductual</span>.</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-xl font-DMSans text-green-500">Enfermedades tratadas</h2>
                        <p className='text-base font-DMSans text-justify'><span>Duelo</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Abuso de drogas y farmacodependencia</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Trastorno de conducta</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Trastorno obsesivo compulsivo (TOC)</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Maltrato psicológico y abandono infantil</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Discapacidad intelectual</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Trastornos neurocognitivos</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Desorden de ansiedad por separación</span>.</p>
                        <p className='text-base font-DMSans text-justify'><span>Transtorno limite de la peronalidad</span>.</p>
                    </div>
                    
                    <div className='w-full mt-32 absolute top-[40%] bg-[#ec4899]/10
                    left-0 h-[500px] -skew-y-12'>
                    </div>
                    <CtaAcerca/>
                    
                </motion.section>

        </Layout>
        </>
    )
}

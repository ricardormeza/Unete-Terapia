import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import SwiAcerca from "../components/acercade/SwiAcerca";
import CtaAcerca from "../components/acercade/CtaAcerca";
import VisionMision from "../components/Mision/VisionMision";
import ExperienciaAcerca from "../components/ExperienciaAcerca/ExperienciaAcerca";

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
                className={`container bg-red-100 hover:bg-red-200`}>

                <h2 className="text-xl font-DMSans text-center text-pink-600">Acerca de nosotros</h2>

                <VisionMision/>
                <ExperienciaAcerca/>




                    
                    {/* <div className='w-full mt-32 absolute top-[40%] bg-[#ec4899]/10
                    left-0 h-[500px] -skew-y-12'>
                    </div> */}
                    {/* <CtaAcerca/> */}
                    
                </motion.section>

        </Layout>
        </>
    )
}

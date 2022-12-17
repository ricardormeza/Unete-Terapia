import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'
import CtaDoctoralia from "../../components/CtaDoctoralia";

export default function trastornoObsesivoCompulsivo() {
  return (
    <>
      <Layout
        title={'Especialidades - Auto Estima'}
        description={'Tratamiento y diagnostico especializado para superar la depresión'}
      >
        <motion.section 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`container ${styles.bgDepresion}`}>
          <div >
            <div className={styles.contenedorDepresion}>
              <div className={styles.DepresionTexto}>
                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-green-500'>Trastorno Obsesivo Compulsivo</h1>
                <h2 className='font-DMSans font-bold'>¿Qué es el <span>TOC</span>? </h2>
                <p className='text-base font-DMSans text-justify'>Se caracteriza por un patrón de pensamientos y miedos no deseados (obsesiones) que provocan comportamientos repetitivos (compulsiones). Estas obsesiones y compulsiones interfieren en las actividades diarias y causan un gran sufrimiento emocional.</p>
                
              </div>
              <div>
                <Image
                  src='/images/trastorno-obsesivo-compulsivo.jpeg'
                  width={400}
                  height={400}
                  priority
                  alt='trastorno obsesivo compulsivo'
                  className='rounded'
                />
              </div>
            </div>

          </div>
          {/* cta ansiedad */}
          <div className={styles.DepresionTexto}>
            <div className='lg:w-auto sm:w-auto mt-8'>
              <h4 className='sm:text-2xl text-xl font-medium text-green-500 font-DMSans'>Ayudamos a tomar control.</h4>
              <p className='font-DMSans sm:text-black'>Las obsesiones más frecuentes son <span> obsesiones de limpieza</span>, <span>obsesión de duda patológica</span>, <span>obsesión de simetría</span>, <span>obsesión de higiene personal</span>.</p>
              <p className='font-DMSans'>Puedes tener una personalidad muy profesionista, ser muy pulcro, ser muy limpio y esto no quiere decir que presentes un TOC, mientras no cause un problema en neustra vida social, entones no presentamos un <span>trastorno obsesivo compulsivo</span>.</p>
              
            </div>
          </div>
          <CtaDoctoralia/>
        </motion.section>
      </Layout>
    </>
  )
}

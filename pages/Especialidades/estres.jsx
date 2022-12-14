import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'
import CtaDoctoralia from "../../components/CtaDoctoralia";

export default function estres() {
    return (
        <>
            <Layout
                title={'Manejo de Estrés'}
                description={'Manejo del estrés, Manejo de estrés laboral'}
            >
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className={`container ${styles.bgDepresion}`}>
                    <div >
                        <div className={styles.contenedorDepresion}>
                            <div className={styles.DepresionTexto}>
                                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-green-500'>Terapia individual: Estrés</h1>
                                <h2 className='font-DMSans font-bold'>Manejo del <span>Estrés</span> </h2>
                                <p className='text-base font-DMSans text-justify'>Sobrecarga de tensión que repercute en el organismo y provoca la aparición de enfermedades y anomalías patológicas que impiden el normal desarrollo y funcionamiento del cuerpo humano.</p>
                                <p className='text-base font-DMSans text-justify'>El estrés es una respuesta natural y necesaria para la supervivencia. Cuando esta respuesta natural se da en exceso se produce una sobrecarga de tensión que repercute en el organismo y provoca la aparición de enfermedades y anomalías patológicas que impiden el normal desarrollo y funcionamiento del cuerpo humano.</p>
                            </div>
                            <div>
                                <Image
                                    src='/images/estres.jpeg'
                                    width={400}
                                    height={400}
                                    alt='mujer con problema de estrés'
                                    className='rounded'
                                />
                            </div>
                        </div>

                    </div>
                    {/* cta ansiedad */}
                    <div className={styles.DepresionTexto}>
                        <div className='lg:w-auto sm:w-auto mt-8'>
                            <h4 className='sm:text-2xl text-xl font-medium text-green-500 font-DMSans'>Ayudamos al manejo del estrés</h4>
                            <p className='font-DMSans sm:text-white'>Realizaremos una evaluación, plantearemos objetivos de tratamiento en la problemática de tu interés.</p>
                            <p className='font-DMSans'>Si buscas generar cambios a largo plazo este tratamiento es ideal para ti.</p>
                            
                        </div>
                    </div>
                    <CtaDoctoralia/>
                </motion.section>

            </Layout>
        </>
    )
}

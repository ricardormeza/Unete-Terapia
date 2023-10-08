import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'
import CtaDoctoralia from '../../components/CtaDoctoralia';
import DoctoraliaWidget from '../../components/Doctoralia/Doctoralia';

export default function TallerReconectaconTuEnergiaFemenina() {
  return (
    <>
            <Layout
                title={'Taller - Reconectando con mi energia femenina'}
                description={'Taller sobre reconectar con mi energia femenina, un espacio enriquecedor diseñado para mujeres que desean explorar y abrazar su auténtica esencia femenina'}
                abstract={'mujeres y feminidad'}
                author={'Consultorio UNETE'}
                copyright={'terapiapsicologia'}
                keywords={'mujeres, feminidad, energia femenina'}
                robots={'index, follow'}
            >
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className={`container ${styles.bgAnsiedadd}`}>

                <section>
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                    <div className="flex w-full mx-auto text-left">
                    <div className="relative inline-flex items-center mx-auto align-middle">
                        <div className="text-center">
                        <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-pink-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                            Reconectando con mi energia femenina.
                        </h1>
                        <h2 className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-pink-500">Cultivando la Fortaleza y la Sensibilidad.</h2>
                        <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                            <div className="mt-3 rounded-lg sm:mt-0">
                            <Link href="https://chat.whatsapp.com/KYZWy5ybVkfGAt9aNtxk0W"  legacyBehavior className="">
                                <a target="_blank">
                                    <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-pink-500 lg:px-10 rounded-xl hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600">Inscribirme</button>
                                </a>
                            </Link>
                            </div>
                            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdEE4D6Mafq6Pgqsdb7zEJrCR2XLFkl2UDapbOwokmauqKOtg/viewform" legacyBehavior className="">
                                <a target="_blank">
                                <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-pink-500 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Más informes</button>
                                </a>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <section id="intro">
                    <div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
                    <Image
                        src="/images/mujer.png"
                        width={200}
                        height={200}
                        alt="imagen de taller reconectando con mi energia femenina"
                        className="object-cover h-58 w-96 rounded-xl"
                        />
                        
                    </div>
                    </section>
                </div>
                </section>

                    <section>
                    <div className=" items-center w-full px-5">
                        <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                            <div className="relative justify-center lg:px-4">
                                <div className="lg:grid lg:grid-cols-2">
                                    <div className="p-8">
                                        <h3 className="text-pink-400">Un Viaje hacia la Energía Femenina.</h3>
                                        <p>Crear con  fuerza inimaginable, libera el potencial y fuente de vida en nuestro interior.</p>
                                        
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-pink-400">Maternidad: El Corazón que Transforma una Casa en un Hoga.</h3>
                                        <p>Ser desde lo maternal, que cuida, sana y convierte una casa en un hogar.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" items-center w-full px-5">
                        <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                            <div className="relative justify-center lg:px-4">
                                <div className="lg:grid lg:grid-cols-2">
                                    <div className="p-8">
                                        <h3 className="text-pink-400">Tejiendo Lazos Duraderos con Amor y Compromiso.</h3>
                                        <p>Ser creadora de lazos fuertes y vinculos sanos de por vida con los seres que amamos.</p>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-pink-400">Explorando la Autenticidad: Conexión Profunda con el Interior.</h3>
                                        <p>Verdadera conexión con las emociones, la sensibilidad, la intuición de sí mismas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" items-center w-full px-5">
                        <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                            <div className="relative justify-center lg:px-4">
                                <div className="lg:grid lg:grid-cols-2">
                                    <div className="p-8">
                                        <h3 className="text-pink-400">Dulzura y Fortaleza: La Belleza de la Sensibilidad.</h3>
                                        <p> equilibrio delicado entre la empatía y la valentía, una cualidad que nos permite conectarnos profundamente con nuestras emociones.</p>
                                        
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-pink-400">Sembrando Armonía y Alegría.</h3>
                                        <p>Generadora de armonía, alegría, esperanza, confianza y aceptación.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" items-center w-full px-5">
                        <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                            <div className="relative justify-center lg:px-4">
                                <div className="lg:grid lg:grid-cols-2">
                                    <div className="p-8">
                                        <h3 className="text-pink-400">Tejiendo Lazos Duraderos con Amor y Compromiso.</h3>
                                        <p>Ser creadora de lazos fuertes y vinculos sanos de por vida con los seres que amamos.</p>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-pink-400">Explorando la Autenticidad: Conexión Profunda con el Interior.</h3>
                                        <p>Verdadera conexión con las emociones, la sensibilidad, la intuición de sí mismas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* UBICACION */}
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="p-8 grid place-items-start md:place-items-center">
                    <h3 className="text-pink-400">Dirección del evento.</h3>
                    <p>Se parte de esta gran transformación.</p>
                </div>
                        <div className="w-full md:w-auto bg-gray-300 rounded-lg overflow-hidden sm:mr-0 p-8 flex items-end justify-start relative">
                        
                        <iframe
                            width={950}
                            height={950}
                            // className="absolute inset-0"
                            frameBorder="0"
                            title="map"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.361329223862!2d-93.15282962605329!3d16.75868942061455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd911d4d67899%3A0xd0a7e59acaf539ec!2sGardenias%20115%2C%20Jardines%20de%20Tuxtla%2C%2029020%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses!2smx!4v1696738378622!5m2!1ses!2smx"
                            
                            style={{
                                filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
                            }}
                            ></iframe>
                        
                        </div>
                        
                    </div>
                    </section>

                    
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Agenda tu cita ahora y comencemos juntos este viaje hacia una vida más saludable y equilibrada.</h1>
                            <Link href="https://wa.link/x0p32b"  legacyBehavior target="_blank" >
                                <button className="flex-shrink-0 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-400 rounded text-lg mt-10 sm:mt-0">Escribeme</button>
                            </Link>
                            </div>
                        </div>
                    </section>




                    <DoctoraliaWidget/>
                    <br />
                </motion.section>
            </Layout>
        </>
  )
}

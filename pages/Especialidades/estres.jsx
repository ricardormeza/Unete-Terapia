import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'

export default function estres() {
    return (
        <>
            <Layout
                title={'Especialidades - Estrés'}
                description={'Manejor del estrés'}
            >
                <section className={`container ${styles.bgDepresion}`}>
                    <div >
                        <div className={styles.contenedorDepresion}>
                            <div className={styles.DepresionTexto}>
                                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans'>Terapia individual: Estrés</h1>
                                <h2 className='font-DMSans'>Manejo del <span>Estrés</span> </h2>
                                <p className='text-base font-DMSans text-justify'>Sobrecarga de tensión que repercute en el organismo y provoca la aparición de enfermedades y anomalías patológicas que impiden el normal desarrollo y funcionamiento del cuerpo humano.</p>
                                <p className='text-base font-DMSans text-justify'>El estrés es una respuesta natural y necesaria para la supervivencia. Cuando esta respuesta natural se da en exceso se produce una sobrecarga de tensión que repercute en el organismo y provoca la aparición de enfermedades y anomalías patológicas que impiden el normal desarrollo y funcionamiento del cuerpo humano.</p>
                            </div>
                            <div>
                                <Image
                                    src='/images/chica-depresion-2.jpeg'
                                    width={400}
                                    height={400}
                                    alt='mujer con problema de depresión'
                                    className='rounded'
                                />
                            </div>
                        </div>

                    </div>
                    {/* cta ansiedad */}
                    <div className={styles.DepresionTexto}>
                        <div className='lg:w-auto sm:w-auto mt-8'>
                            <h4 className='sm:text-2xl text-xl font-medium text-green-500 font-DMSans'>Ayudamos a superar la Depresión</h4>
                            <p className='font-DMSans sm:text-white'>Realizaremos una evaluación, plantearemos objetivos de tratamiento en la problemática de tu interés.</p>
                            <p className='font-DMSans'>Si buscas generar cambios a largo plazo este tratamiento es ideal para ti.</p>
                            <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                                <button className='bg-pink-500 hover:bg-green-400 text-white font-bold py-1 px-2 rounded'>
                                    Agenda tu cita
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}

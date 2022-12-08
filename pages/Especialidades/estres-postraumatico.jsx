import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'

export default function estresPostraumatico() {
  return (
    <>
      <Layout
        title={'Especialidades - Auto Estima'}
        description={'Tratamiento y diagnostico especializado para superar la depresión'}
      >
        <section className={`container ${styles.bgDepresion}`}>
          <div >
            <div className={styles.contenedorDepresion}>
              <div className={styles.DepresionTexto}>
                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans'>Terapia individual: Estrés Postraumático</h1>
                <h2 className='font-DMSans'>Manejo del <span>Estrés Postraumático</span> </h2>
                <p className='text-base font-DMSans text-justify'>Desencadenada por una situación aterradora, ya sea que la hayas experimentado o presenciado. Los síntomas pueden incluir reviviscencias, pesadillas y angustia grave, así como pensamientos incontrolables sobre la situación. Muchas personas que pasan por situaciones traumáticas quizás tengan dificultad temporaria para adaptarse y afrontarlas, pero con el tiempo y el autocuidado generalmente mejoran.  Obtener un tratamiento efectivo después de que se manifiesten los síntomas de trastorno de estrés postraumático puede ser esencial para reducir los síntomas y mejorar el funcionamiento.</p>
                
              </div>
              <div>
                <Image
                  src='/images/autoestima.jpeg'
                  width={400}
                  height={400}
                  alt='mujer con autoestima'
                  className='rounded'
                />
              </div>
            </div>

          </div>
          {/* cta ansiedad */}
          <div className={styles.DepresionTexto}>
            <div className='lg:w-auto sm:w-auto mt-8'>
              <h4 className='sm:text-2xl text-xl font-medium text-green-500 font-DMSans'>Ayudamos a superar la Depresión</h4>
              <p className='font-DMSans sm:text-black'>Realizaremos una evaluación, plantearemos objetivos de tratamiento en la problemática de tu interés.</p>
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

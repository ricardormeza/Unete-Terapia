import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'

export default function tanatologia() {
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
                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-green-500'>Terapia: Tanatología</h1>
                <h2 className='font-DMSans font-bold'>Manejo de la <span>Tanatología</span> </h2>
                <p className='text-base font-DMSans text-justify'>Intervencion en el tratado de los duelos derivados de pérdidas significativas que no tengan o no que ver con la muerte física o enfermos terminales.</p>
                
              </div>
              <div>
                <Image
                  src='/images/tanatologia.jpeg'
                  width={400}
                  height={400}
                  alt='soporte en la tanatología'
                  className='rounded'
                />
              </div>
            </div>

          </div>
          {/* cta ansiedad */}
          <div className={styles.DepresionTexto}>
            <div className='lg:w-auto sm:w-auto mt-8'>
              <h4 className='sm:text-2xl text-xl font-medium text-green-500 font-DMSans'>Ayudamos a procesar la etapia final de la vida.</h4>
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

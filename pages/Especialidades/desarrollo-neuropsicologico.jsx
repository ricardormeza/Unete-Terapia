import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import Layout from '../../components/Layout'
import styles from '../../styles/Especialidades.module.css'
import { TbPoint } from 'react-icons/tb';
import CtaDoctoralia from "../../components/CtaDoctoralia";


export default function desarrolloNeuropsicologico() {
    return (
        <>
            <Layout
                title={'Especialidades - Desarrollo Neuropsicológico'}
                description={'Atención especializada en adolescentes y niños con problemas de desarrollo neuropsicológico, autosmo, hiperactividad.'}
            >
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="container">
                    <div>
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Image
                            className="object-cover object-center h-full w-full"
                            src="/images/desarrollo-neurologico-portada.jpg"
                            alt="desarrollo neurologico portada"
                            width={900}
                            height={900}
                            priority
                            placeholder
                        />
                    </div>
                        <div className="container ">
                            <div>
                                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-pink-600'>Evaluación pedagógica para niños y adolescentes.</h1>
                                {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                                <br/>
                                {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                                <p className='text-base font-DMSans text-justify'>La educación es uno de los aspectos más importantes en el desarrollo de los niños y adolescentes. Es el proceso mediante el cual se les enseña habilidades, conocimientos y valores que les permitirán enfrentar y resolver situaciones de la vida cotidiana. La evaluación pedagógica es un componente clave en este proceso, ya que permite medir el progreso de los estudiantes y ajustar la enseñanza para garantizar su éxito.</p>
                                <br/>
                                <h2 className='font-DMSans'>¿Qué es la evaluación pedagógica?</h2>
                                <p className='text-base font-DMSans text-justify'>La evaluación pedagógica es un proceso que implica la medición del aprendizaje de los estudiantes. Se lleva a cabo a través de diferentes herramientas, como pruebas, exámenes, trabajos en clase, tareas y proyectos. Su objetivo es determinar la efectividad de la enseñanza y medir el progreso de los estudiantes.</p>
                                <p className='text-base font-DMSans text-justify'>La evaluación pedagógica se lleva a cabo en diferentes momentos del proceso educativo. Puede ser inicial, formativa o sumativa. La evaluación inicial se realiza al comienzo del curso para evaluar los conocimientos previos de los estudiantes. La evaluación formativa se lleva a cabo a lo largo del curso para monitorear el progreso de los estudiantes y hacer ajustes en la enseñanza. La evaluación sumativa se realiza al final del curso para evaluar el aprendizaje de los estudiantes.
                                    La importancia de la evaluación pedagógica en niños y adolescentes.</p>
                                <p className='text-base font-DMSans text-justify'>La evaluación pedagógica es una herramienta esencial para garantizar el éxito de los estudiantes. Algunas de las razones por las que es importante incluyen:</p>
                            </div>
                        </div>
                    </div>
                    {/* <CtaDoctoralia/> */}
                </motion.section>
                <div className="body-font bg-red-100 py-5">
                    <div className="container">
                        <ul class="list-disc">
                            <li>Permite monitorear el progreso de los estudiantes: La evaluación pedagógica permite a los maestros evaluar el progreso de los estudiantes a lo largo del curso. Esto les permite identificar las áreas en las que los estudiantes necesitan más ayuda y hacer ajustes en la enseñanza.</li>
                            <li>Ayuda a identificar las fortalezas y debilidades de los estudiantes: La evaluación pedagógica también ayuda a los maestros a identificar las fortalezas y debilidades de los estudiantes. Esto les permite desarrollar planes de enseñanza específicos para ayudar a los estudiantes a superar sus desafíos y aprovechar al máximo sus habilidades.</li>
                            <li>Proporciona retroalimentación a los estudiantes: La evaluación pedagógica también proporciona retroalimentación a los estudiantes sobre su desempeño. Esto les permite identificar áreas en las que necesitan mejorar y hacer ajustes para garantizar su éxito.</li>
                            <li>Ayuda a los maestros a ajustar la enseñanza: La evaluación pedagógica también ayuda a los maestros a ajustar la enseñanza para garantizar que los estudiantes estén aprendiendo de manera efectiva. Esto puede incluir cambios en el método de enseñanza o la incorporación de materiales de enseñanza adicionales para mejorar el aprendizaje de los estudiantes.</li>
                        </ul>
                    </div>
                </div>
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="container">
                    <div>
                        <div className="container py-5">
                            <div>
                                <h2 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-pink-600'>Desarrollo Neuropsicológico.</h2>
                                {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                                <br/>
                                {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                                <p className='title-font text-base font-DMSans text-justify'>El desarrollo neurológico se refiere a los cambios y progresos que ocurren en el cerebro y en el sistema nervioso a lo largo del tiempo, desde la concepción hasta la edad adulta. Estos cambios son esenciales para el aprendizaje, la memoria, el comportamiento y la regulación emocional. Durante los primeros años de vida, el cerebro experimenta un rápido crecimiento y desarrollo, y los procesos de mielinización y sinaptogénesis son esenciales para la creación de redes neuronales efectivas. El desarrollo neurológico también está influenciado por factores ambientales y genéticos, como la nutrición, la estimulación temprana y el estrés. El conocimiento de los procesos involucrados en el desarrollo neurológico es fundamental para comprender y tratar trastornos neurológicos y psicológicos en niños y adolescentes.</p>
                                <br/>
                                <h2 className='sm:text-2xl text-xl font-DMSans'>Discapacidad intelectual.</h2>
                                <p className='text-base font-DMSans text-justify'>La discapacidad intelectual es una condición que se presenta cuando un niño o adolescente tiene un retraso en el desarrollo cognitivo, lo que afecta su capacidad para comprender y procesar información. Esta condición puede afectar su vida diaria y su capacidad para interactuar con el mundo que los rodea. Por esta razón, es importante brindar apoyo psicológico y emocional a los niños y adolescentes con discapacidad intelectual.</p>
                                <p className='text-base font-DMSans text-justify'>En UNETE ayudamos los niños y adolescentes con discapacidad intelectual es proporcionándoles un ambiente seguro y acogedor. Esto puede incluir un espacio tranquilo donde puedan relajarse y sentirse cómodos. También es importante brindarles atención y apoyo emocional constante. Los niños y adolescentes con discapacidad intelectual pueden sentirse aislados y solos, por lo que necesitan sentir que hay alguien que los escucha y los comprende.</p>
                                <p className='text-base font-DMSans text-justify'>La Mtra. Yeimi Roció Avila Ponton ayuda a los niños y adolescentes a desarrollar habilidades sociales y emocionales, y les enseña cómo manejar sus emociones y comunicarse efectivamente. Los terapeutas pueden usar diferentes técnicas, como el juego, la música o la terapia artística, para ayudar a los niños y adolescentes con discapacidad intelectual a expresarse y desarrollar su confianza en sí mismos.</p>
                            </div>
                        </div>
                    </div>
                    {/* <CtaDoctoralia/> */}
                </motion.section>

                {/* CUADRO VERDE INICIO */}
                <div className="body-font bg-green-100 py-5">
                    <div className="container">
                    <div className="py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                            <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                                <p href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                    <Image
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src="/images/familia.jpg"
                                        alt="valor familia"
                                        width={800}
                                        height={800}
                                        priority
                                        placeholder
                                    />
                                </p>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        <p href="#" className="transition duration-100 hover:text-pink-500 active:text-pink-600">Familia</p>
                                    </h3>
                                </div>
                            </div>
                            {/* <!-- article - end --> */}

                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                                <p href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                    <Image
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src="/images/amor.jpg"
                                        alt="valor amor"
                                        width={800}
                                        height={800}
                                        priority
                                        placeholder
                                    />
                                </p>
                                
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        <p href="#" className="transition duration-100 hover:text-pink-500 active:text-pink-600">Amor</p>
                                    </h3>
                                </div>
                                
                            </div>
                            {/* <!-- article - end --> */}

                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                                <p href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                    <Image
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src="/images/soporte.jpg"
                                        alt="valor soporte"
                                        width={800}
                                        height={800}
                                        priority
                                        placeholder
                                    />
                                </p>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        <p href="#" className="transition duration-100 hover:text-pink-500 active:text-pink-600">Soporte</p>
                                    </h3>
                                </div>
                            </div>
                            {/* <!-- article - end --> */}

                            {/* <!-- article - start --> */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                                <p href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                    <Image
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src="/images/emociones.jpg"
                                        alt="valor emociones"
                                        width={800}
                                        height={800}
                                        priority
                                        placeholder
                                    />
                                </p>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        <p href="#" className="transition duration-100 hover:text-pink-500 active:text-pink-600">Emociones</p>
                                    </h3>
                                </div>
                            </div>
                            {/* <!-- article - end --> */}
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                {/* CUADRO VERDE FIN */}
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="container">
                    <div>
                        <div className="container py-5">
                            <div>
                                <p className='text-base font-DMSans text-justify'>También es importante involucrar a la familia y a los cuidadores en el proceso de apoyo y tratamiento. La familia y los cuidadores pueden brindar apoyo emocional y ayudar a los niños y adolescentes con discapacidad intelectual a desarrollar habilidades sociales y emocionales; Podemos trabajar mano a mano para desarrollar planes de tratamiento personalizados para los niños y adolescentes con discapacidad intelectual.</p>
                            </div>

                            {/* call to action inicio */}
                            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <Image
                                    className="object-cover object-center rounded"
                                    src="/images/beneficio-terapia.jpg"
                                    alt="Terapia de pareja"
                                    width={800}
                                    height={800}
                                    priority
                                    placeholder
                                        />
                                </div>
                                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Beneficios de acudir a
                                    <br className="hidden lg:inline-block"/>Terapia
                                    </h2>
                                    <p className="mb-8 text-2xl leading-relaxed">Te ayudare a mejorar el aprendizaje, la autoestima, habilidades sociales y fomentare la independencia de quien más quieres en tu vida.</p>
                                    <div className="flex justify-center">
                                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                                            <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Agendar cita</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* call to action fin  */}
                        </div>
                    </div>
                </motion.section>

            </Layout>
        </>
    )
}

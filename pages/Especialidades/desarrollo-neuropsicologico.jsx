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
                        <div className="container ">
                            <div>
                                <h2 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-pink-600'>Desarrollo Neuropsicológico.</h2>
                                {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                                <br/>
                                {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                                <p className='text-base font-DMSans text-justify'>El desarrollo neurológico se refiere a los cambios y progresos que ocurren en el cerebro y en el sistema nervioso a lo largo del tiempo, desde la concepción hasta la edad adulta. Estos cambios son esenciales para el aprendizaje, la memoria, el comportamiento y la regulación emocional. Durante los primeros años de vida, el cerebro experimenta un rápido crecimiento y desarrollo, y los procesos de mielinización y sinaptogénesis son esenciales para la creación de redes neuronales efectivas. El desarrollo neurológico también está influenciado por factores ambientales y genéticos, como la nutrición, la estimulación temprana y el estrés. El conocimiento de los procesos involucrados en el desarrollo neurológico es fundamental para comprender y tratar trastornos neurológicos y psicológicos en niños y adolescentes.</p>
                                <br/>
                                <h2 className='font-DMSans'>Discapacidad intelectual.</h2>
                                <p className='text-base font-DMSans text-justify'>La discapacidad intelectual es una condición que se presenta cuando un niño o adolescente tiene un retraso en el desarrollo cognitivo, lo que afecta su capacidad para comprender y procesar información. Esta condición puede afectar su vida diaria y su capacidad para interactuar con el mundo que los rodea. Por esta razón, es importante brindar apoyo psicológico y emocional a los niños y adolescentes con discapacidad intelectual.</p>
                                <p className='text-base font-DMSans text-justify'>En UNETE ayudamos los niños y adolescentes con discapacidad intelectual es proporcionándoles un ambiente seguro y acogedor. Esto puede incluir un espacio tranquilo donde puedan relajarse y sentirse cómodos. También es importante brindarles atención y apoyo emocional constante. Los niños y adolescentes con discapacidad intelectual pueden sentirse aislados y solos, por lo que necesitan sentir que hay alguien que los escucha y los comprende.</p>
                                <p className='text-base font-DMSans text-justify'>La Mtra. Yeimi Roció Avila Ponton ayuda a los niños y adolescentes a desarrollar habilidades sociales y emocionales, y les enseña cómo manejar sus emociones y comunicarse efectivamente. Los terapeutas pueden usar diferentes técnicas, como el juego, la música o la terapia artística, para ayudar a los niños y adolescentes con discapacidad intelectual a expresarse y desarrollar su confianza en sí mismos.</p>
                            </div>
                        </div>
                    </div>
                    {/* <CtaDoctoralia/> */}
                </motion.section>

            </Layout>
        </>
    )
}

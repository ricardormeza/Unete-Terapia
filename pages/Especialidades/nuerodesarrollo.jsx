import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import Layout from '../../components/Layout'

export default function nuerodesarrollo() {
  return (
    <>
            <Layout
                title={'Neurodesarrollo infantil en Tuxtla Gutiérrez, Chiapas'}
                description={'En Unete atendemos la educación preescolar y el neurodesarrollo infantil con psicología educativa y enseñamza inclusiva.'}
                abstract={'Neurodesarrollo y educación preescolar'}
                author={'Consultorio UNETE'}
                copyright={'terapiapsicologia'}
                keywords={'educa t, neurodesarrollo'}
                robots={'index, follow'}
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
                            src="/images/familia.jpg"
                            alt="desarrollo neurologico portada"
                            title="La familia y el neurodesarrollo"
                            width={900}
                            height={900}
                            priority
                            placeholder
                        />
                    </div>
                        <div className="container ">
                            <div>
                                <h1 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-pink-600'>Trastornos específicos del neurodesarrollo que afectan la conducta y el aprendizaje.</h1>
                                {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                                <br/>
                                <p className='text-base font-DMSans text-justify'>Los trastornos específicos del neurodesarrollo son una serie de condiciones neurológicas que afectan el desarrollo del cerebro y del sistema nervioso en la infancia y adolescencia. Estos trastornos se caracterizan por problemas en la capacidad para procesar información y llevar a cabo tareas complejas, lo que puede afectar a la vida cotidiana y al rendimiento académico.</p>
                                <br/>
                                <h2 className='font-DMSans text-pink-600' id='trastornohabla' >Trastornos del habla.</h2>
                                <p className='text-base font-DMSans text-justify'>El trastorno del habla y del lenguaje es una condición que afecta a la capacidad de una persona para comunicarse verbalmente. Puede manifestarse como dificultad para hablar o pronunciar palabras de manera clara, o como dificultad para comprender o expresarse en lenguaje hablado o escrito.</p>
                                <p className='text-base font-DMSans text-justify'>Este trastorno puede ser de origen genético o ser causado por problemas físicos, como lesiones cerebrales o problemas auditivos.</p>
                                <p className='text-base font-DMSans text-justify'>El trastorno del habla puede incluir dificultades en la producción de sonidos del habla, como tartamudez, disfluencia, omisión de sonidos o sonidos distorsionados. Estos problemas pueden dificultar la comprensión de la persona, lo que puede generar frustración y ansiedad. En casos más graves, el trastorno del habla puede requerir terapia del habla para mejorar la articulación y la fluidez del habla.</p>
                                <p className='text-base font-DMSans text-justify'>El trastorno del lenguaje, por otro lado, se refiere a dificultades en la comprensión y el uso del lenguaje hablado y escrito. Esto puede incluir dificultades para seguir instrucciones, para expresar ideas de manera clara y coherente, para entender las emociones y sentimientos de los demás o para comprender las reglas sociales.</p>
                                <p className='text-base font-DMSans text-justify'>Los niños y adolescentes con trastornos del habla y del lenguaje pueden experimentar dificultades en el rendimiento académico y en las relaciones sociales. Pueden sentirse aislados o excluidos debido a su dificultad para comunicarse con los demás. Además, pueden tener dificultades para seguir instrucciones y para comprender la información que se les presenta en el aula, lo que puede afectar su desempeño académico y su autoestima.</p>
                                <p className='text-base font-DMSans text-justify'>Es importante que los trastornos del habla y del lenguaje sean identificados y tratados lo antes posible para evitar posibles consecuencias negativas en el desarrollo del niño o adolescente.</p>
                            </div>
                        </div>
                    </div>
                    {/* call to action inicio */}
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                    <Image
                                    className="object-cover object-center rounded"
                                    src="/images/beneficio-terapia.jpg"
                                    alt="Terapia de pareja"
                                    title="La terapia es de gran ayuda"
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
                                    <p className="mb-8 text-2xl leading-relaxed">Ayudare a mejorar la comunicación y las habilidades sociales, el rendimiento académico y autoestima de quien más quieres.</p>
                                    <div className="flex justify-center">
                                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                                            <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Agendar cita</button>
                                        </Link>
                                    </div>
                                </div>
                    </div>
                            {/* call to action fin  */}
                            <div className="container ">
                            <div>
                                <p className='text-base font-DMSans text-justify'>El trastorno del habla y del lenguaje puede tener un impacto significativo en la vida de un niño o adolescente. Es importante que los padres y cuidadores estén atentos a las posibles señales de este trastorno y busquen ayuda profesional si tienen alguna preocupación. Con la intervención adecuada, se pueden mejorar significativamente las habilidades de comunicación y la calidad de vida del niño o adolescente afectado.</p>
                                <br/>
                            </div>
                        </div>
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
                                        title="La familia es lo más importante"
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
                                        title="El amor en familia es lo mejor"
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
                                        title="La familia es el mejor soporte."
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
                                        title="La emoción de la familia no tiene precio"
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
                                <h2 className='title-font sm:text-2xl text-xl font-medium font-DMSans text-pink-600' id='dislexia' >Dislexia.</h2>
                                {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                                <br/>
                                {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                                <p className='title-font text-base font-DMSans text-justify'>La dislexia es un trastorno del aprendizaje que se caracteriza por dificultades en la lectura y la escritura. Las personas con dislexia pueden tener dificultades para reconocer y comprender letras y palabras, lo que puede afectar su capacidad para leer y escribir con fluidez. Aunque la dislexia no está relacionada con la inteligencia, puede tener un impacto significativo en el rendimiento académico y la autoestima de quienes la padecen.</p>
                                {/* <br/> */}
                                {/* <h2 className='sm:text-2xl text-xl font-DMSans'>Discapacidad intelectual.</h2> */}
                                <p className='text-base font-DMSans text-justify'>Puedo ayudarte ó ayudar a las personas que más quieres a entender mejor su condición y a desarrollar estrategias para enfrentar los desafíos asociados con ella. Puedo trabajar con el individuo para mejorar su autoestima, proporcionar apoyo emocional y ayudarles a manejar la frustración y el estrés asociados con la dislexia.</p>
                                <p className='text-base font-DMSans text-justify'>La terapia cognitivo-conductual (TCC) puede ser especialmente efectiva para personas con dislexia. Esta terapia se enfoca en ayudar al individuo a identificar y cambiar los patrones de pensamiento negativos y poco realistas que pueden estar contribuyendo a su ansiedad y baja autoestima. También puede ayudar a desarrollar habilidades para manejar el estrés y la frustración, lo que puede mejorar su rendimiento académico.</p>
                                <p className='text-base font-DMSans text-justify'>Puedo proporcionar apoyo para los padres y cuidadores de personas con dislexia. Los padres pueden sentirse frustrados y confundidos acerca de cómo ayudar a su hijo con la dislexia, y pueden beneficiarse de una orientación profesional para comprender mejor la condición y aprender estrategias efectivas para apoyar al niño en casa y en la escuela.</p>
                            </div>
                        </div>
                    </div>
                    
                </motion.section>

                {/* CTA INICIO */}
                <section className="text-gray-600 body-font bg-green-400 py-3 mt-3">
                    <div className="container mt-5 mb-5">
                    <h3 className="text-center mt-5 mb-5 font-DMSans text-black">
                    Te proporcionare apoyo emocional y desarrollaremos habilidades para manejar el estrés  y la frustración asociada con la dislexia.
                    </h3>
                        <div className="grid place-items-center ">
                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                            <button className="justify-self-center text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">Agendar cita</button>
                        </Link>
                        </div>
                    </div>
                </section>
                {/* CTA FIN */}

                {/* DISCALCULIA INICIO */}
                <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="container">
                    <div>
                        <div className="container py-5">
                            <div>
                                <h2 className='sm:text-2xl text-xl font-DMSans text-pink-600' id='discalculia' >Discalculia.</h2>
                                <p className='text-base font-DMSans text-justify'>La discalculia es un trastorno específico del aprendizaje que se caracteriza por dificultades en la comprensión y el uso de los números y las matemáticas. Las personas con discalculia pueden tener dificultades para realizar cálculos matemáticos básicos, comprender conceptos matemáticos y aplicarlos en la vida cotidiana. Aunque la discalculia no está relacionada con la inteligencia, puede tener un impacto significativo en el rendimiento académico y la autoestima de quienes la padecen.</p>
                                <p className='text-base font-DMSans text-justify'>La ayuda que puedo brindarte puede ser muy útil para personas con discalculia, ya que puedo ayudarles a entender mejor su condición y a desarrollar estrategias para enfrentar los desafíos asociados con ella. Trabajaremos para mejorar su autoestima, proporcionar apoyo emocional y ayudarles a manejar la frustración y el estrés asociados con la discalculia.</p>
                                <p className='text-base font-DMSans text-justify'>La terapia cognitivo-conductual (TCC) puede ser especialmente efectiva para personas con discalculia. Esta terapia se enfoca en ayudar al individuo a identificar y cambiar los patrones de pensamiento negativos y poco realistas que pueden estar contribuyendo a su ansiedad y baja autoestima. También puede ayudar a desarrollar habilidades para manejar el estrés y la frustración, lo que puede mejorar su rendimiento académico.</p>
                                
                            </div>
                        </div>
                    </div>
                    {/* <CtaDoctoralia/> */}
                </motion.section>
                {/* DISCALCULIA FIN */}

                <div className="body-font bg-red-100 py-5">
                    <div className="container">
                        <div>
                            <h2 className='sm:text-2xl text-xl font-DMSans text-green-600'>Trastorno del espectro autista.</h2>
                            <p className='text-base font-DMSans text-justify'>El trastorno del espectro autista (TEA) es un trastorno del desarrollo neurológico que afecta la comunicación, el comportamiento y las habilidades sociales. Aunque el TEA es una condición permanente, hay muchos tratamientos y terapias disponibles que pueden ayudar a las personas con TEA a desarrollar habilidades sociales, comunicativas y conductuales. Uno de los tratamientos más importantes es el apoyo psicológico.</p>
                            <p className='text-base font-DMSans text-justify'>El apoyo psicológico puede ser beneficioso para las personas con TEA de todas las edades. Los niños y adolescentes pueden beneficiarse de terapias de juego y de terapia de comportamiento, mientras que los adultos con TEA pueden beneficiarse de la terapia cognitivo-conductual y la terapia de grupo. En la terapia, puedo ayudarte con el TEA a entender sus sentimientos y emociones, así como a desarrollar habilidades sociales y de comunicación.</p>
                            <p className='text-base font-DMSans text-justify'>La terapia cognitivo-conductual se centra en enseñar al individuo con TEA nuevas habilidades y patrones de pensamiento. Los terapeutas pueden trabajar con el individuo para mejorar su capacidad de comunicarse y relacionarse con los demás, y para desarrollar estrategias para manejar el estrés y la ansiedad. La terapia de grupo también puede ser útil para las personas con TEA, ya que les brinda la oportunidad de interactuar con otros que experimentan situaciones similares.</p>
                            <p className='text-base font-DMSans text-justify'>Los padres y cuidadores de personas con TEA también pueden beneficiarse del apoyo que puedo brindarles. Pueden sentirse abrumados y estresados por el cuidado de alguien con TEA, y pueden beneficiarse de la orientación y el apoyo emocional del que te voy a brindar y así ayudar a los padres a entender mejor la condición de su hijo y proporcionarles herramientas y estrategias para apoyar al niño en el hogar y en la escuela.</p>
                        </div>
                    </div>
                </div>

                
                {/* call to action inicio */}
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <Image
                                    className="object-cover object-center rounded"
                                    src="/images/amor.jpg"
                                    alt="Terapia familiar valor amor"
                                    title="Terapia familiar amor"
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
                                    <p className="mb-8 text-2xl leading-relaxed">Te ayudare a mejorar el estrés, la ansiedad que genera el TEA y brindarte el apoyo emocional para que puedas ayudar a quien más quieres.</p>
                                    <div className="flex justify-center">
                                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                                            <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Agendar cita</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* call to action fin  */}

                    {/* DISCALCULIA INICIO */}
                    <motion.section 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="container">
                        <div>
                            <div className="container py-5">
                                <div>
                                    <h2 className='sm:text-2xl text-xl font-DMSans text-pink-600' id='deficitatencion' >Trastorno del déficit de atención.</h2>
                                    <p className='text-base font-DMSans text-justify'>El trastorno por déficit de atención con hiperactividad (TDAH) es un trastorno neurobiológico que afecta la capacidad de una persona para prestar atención, controlar su comportamiento y regular sus emociones. A menudo se diagnostica en la infancia, pero puede persistir en la adolescencia y en la edad adulta. La ayuda psicológica puede ser fundamental para que las personas con TDAH aprendan a manejar sus síntomas y a llevar una vida plena y satisfactoria.</p>
                                    <p className='text-base font-DMSans text-justify'>Existen varios tipos de terapias que pueden ser útiles para las personas con TDAH, como la terapia cognitivo-conductual, la terapia de juego y la terapia familiar. La terapia cognitivo-conductual es particularmente efectiva para ayudar a las personas con TDAH a desarrollar habilidades de organización, planificación y toma de decisiones, así como a manejar la ansiedad y el estrés. También puede ser útil para mejorar las habilidades sociales y de comunicación, lo que puede ayudar a las personas con TDAH a desarrollar relaciones más saludables y satisfactorias.</p>
                                    <p className='text-base font-DMSans text-justify'>La terapia de juego es una forma de terapia que se centra en el juego como una forma de expresión y comunicación. Puede ser muy efectiva para los niños con TDAH, ya que les brinda la oportunidad de explorar y aprender habilidades sociales y emocionales de una manera lúdica y segura. La terapia familiar también puede ser beneficiosa para las personas con TDAH, ya que puede ayudar a los miembros de la familia a comprender mejor la condición y a trabajar juntos para manejar los síntomas.</p>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </motion.section>
                    {/* DISCALCULIA FIN */}

                    {/* CTA INICIO */}
                <section className="text-gray-600 body-font bg-green-400 py-3 mt-3">
                    <div className="container mt-5 mb-5">
                        <h3 className="text-center mt-5 mb-5 font-DMSans text-black">
                        Te brindare las herramientas valiosas para apoyar a las personas con TDAH y así mejorar su calidad de vida.
                        </h3>
                        <div className="grid place-items-center ">
                        <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                            <button className="justify-self-center text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">Agendar cita</button>
                        </Link>
                        </div>
                    </div>
                </section>
                {/* CTA FIN */}

                            {/* frase final INICIO */}
                                <section className="text-gray-600 body-font py-3 pb-3 mt-3">
                                    <div className="container mt-5 mb-5">
                                        <h3 className="text-center text-3xl mt-5 mb-5 font-DMSans text-pink-600">
                                        "No hay problema demasiado pequeño o grande para buscar ayuda."
                                        </h3> 
                                    </div>
                                </section>
                                {/* frase final FIN */}

            </Layout>
        </>
  )
}

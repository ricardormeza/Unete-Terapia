import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";

export default function terapia() {
  return (
    <>
      <Layout
        title={"Terapia Individual para el bienestar emocional"}
        description={"En Unete te brindamos el apoyo y trabajamos con la terapia individual, adecuada para ti y así ayudarte a mejorar tu salud mental, trabajaremos en un ambiente seguro y confidencial para abordar problemas personales, mejorar el bienestar emocional además de darte terapia online."}
        abstract={'Terapia individual en linea'}
        author={'Consultorio UNETE'}
        copyright={'terapiapsicologia'}
        keywords={'psicología, en linea, salud, mental, terapia, individual '}
        robots={'index, follow'}
      >
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="container"
        >
          <div>
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                className="object-cover object-center h-full w-full"
                src="/images/terapia.jpg"
                alt="terapia portada"
                title="Terapia individual en linea"
                width={900}
                height={900}
                priority
                placeholder
              />
            </div>
            <div className="container ">
              <div>
                <h1 className="title-font sm:text-2xl text-xl font-medium py-2 font-DMSans text-pink-600" id="terapia">
                  Terapia Individual.
                </h1>
                {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                <br />
                <p className="text-base font-DMSans text-justify">
                  La intervención terapéutica es una herramienta fundamental
                  para ayudar a las familias a superar dificultades y mejorar la
                  comunicación y la convivencia en el hogar. Es importante
                  recordar que la terapia no solo está dirigida a las personas
                  que tienen problemas específicos, sino que también puede ser
                  útil para fortalecer las relaciones y prevenir problemas
                  futuros. Aquí hablaremos sobre algunas formas de abordar la <span>terapia 
                  idividual</span> y así mismo contamos con el servicio de <span>terapia en linea</span>, para mejorar el <span>bienestar</span>  y la <span>salud mental</span>.
                </p>
                <br />
                <h2 className="font-DMSans text-green-600">
                  Depresión
                </h2>
                <p className="text-base font-DMSans text-justify">
                La depresión es un sentimiento de tristeza y/o una disminución del interés o del placer en las actividades que se convierte en un trastorno cuando es lo suficientemente intensa como para interferir con el funcionamiento normal de la persona.
                </p>
                <p className="text-base font-DMSans text-justify">
                Los síntomas nucleares de la depresión son la tristeza patológica, la pérdida de interés y de la capacidad de disfrutar y una disminución de la vitalidad que limita el nivel de actividad y produce un cansancio exagerado, que aparece incluso después de realizar pequeños esfuerzos.
                </p>
                <p className="text-base font-DMSans text-justify">Además, pueden aparecer otros síntomas, como los sentimientos de culpa o de incapacidad, la irritabilidad, el pesimismo ante el futuro, las ideas de muerte o de suicidio, la pérdida de confianza en uno mismo o en los demás, la disminución de la concentración y la memoria, la intranquilidad, los trastornos del sueño y la disminución del apetito y de la libido, entre otros.</p>
                <p className="text-base font-DMSans text-justify">Los síntomas más habituales son:</p>
              </div>
            </div>
          </div>

        </motion.section>

        <div className="body-font bg-red-100 py-5">
            <div className="container">
              <ul class="list-disc">
                <li>
                  La tristeza patológica, también conocida como trastorno depresivo mayor, es una forma de depresión clínica que se caracteriza por sentimientos persistentes y abrumadores de tristeza, desesperanza y desesperación. La tristeza patológica puede ser debilitante y afectar la calidad de vida de una persona, incluyendo su capacidad para realizar actividades diarias y su interacción con los demás. Los síntomas de la tristeza patológica pueden incluir cambios en el apetito, la falta de energía, problemas para dormir, sentimientos de culpa y baja autoestima.
                </li>
                <li>
                  La pérdida de interés, también conocida como anhedonia, es un síntoma común de muchos trastornos psicológicos, incluyendo la depresión y la ansiedad. Se caracteriza por la falta de interés o placer en actividades que antes se disfrutaban. Las personas que experimentan anhedonia pueden sentirse apáticas, desmotivadas y sin energía, y pueden tener dificultades para concentrarse o tomar decisiones.
                </li>
                <li>
                  La disminución de la vitalidad, también conocida como fatiga crónica, es una sensación de cansancio extremo y falta de energía que no se alivia con el descanso o el sueño, la fatiga crónica puede estar relacionada con factores como el estrés crónico, la ansiedad, la depresión y los problemas de sueño. Las personas que experimentan fatiga crónica pueden tener dificultades para realizar actividades cotidianas y pueden sentir que sus síntomas interfieren con su calidad de vida.
                </li>
              </ul>
            </div>
          </div>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="container"
          >
            <div>
              <div className="container py-5">
                <div>
                <p className="title-font text-base font-DMSans text-justify">En UNETE trabajaremos contigo para identificar los patrones de pensamiento negativos y las conductas poco saludables que contribuyen a la depresión. También te enseñaremos habilidades para afrontar el estrés, mejorar la autoestima y resolver problemas. La terapia cognitivo-conductual, una forma de terapia que se centra en el cambio de patrones de pensamiento y comportamiento, es particularmente eficaz para el tratamiento de la depresión, en UNETE contamos con el servicio de <span>terapia en linea</span>.</p>
                <p className="title-font text-base font-DMSans text-justify">La depresión puede ser un trastorno grave y debilitante, pero con la ayuda de UNETE, muchas personas pueden superarla y volver a disfrutar de una vida plena y satisfactoria.</p>
                <br />
                  <h2 className="title-font sm:text-2xl text-xl font-medium font-DMSans text-green-600">
                  Ansiedad Generalizada.
                  </h2>
                  {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                  <br />
                  {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                  <p className="title-font text-base font-DMSans text-justify">
                  La ansiedad generalizada es un trastorno de ansiedad que se caracteriza por una preocupación excesiva y persistente acerca de una variedad de temas, como el trabajo, las relaciones, la salud o las finanzas. Esta preocupación a menudo se acompaña de síntomas físicos, como tensión muscular, fatiga y problemas para dormir. La ansiedad generalizada puede interferir significativamente con la vida cotidiana, pero con la ayuda de <span>UNETE</span> te ayudaremos a superarlos.
                  </p>
                  <p className="title-font text-base font-DMSans text-justify">Te ayudaremos a identificar los pensamientos y patrones de comportamiento que pueden estar contribuyendo a sus síntomas. Trabajaremos juntos y así haremos cambio de patrones de pensamiento y comportamiento negativos, y puede ser particularmente eficaz para el tratamiento de la ansiedad generalizada. Haremos técnicas de relajación, como la respiración profunda y la meditación, para ayudar a la persona a reducir la tensión muscular y la ansiedad, con nuestra <span>terapia psicólogica en linea</span> te ayudaremos a mejorar.</p>
                  {/* <br/> */}
                </div>
              </div>
            </div>
          </motion.section>


        {/* TERAPIA PARA NIÑOS */}
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="container"
          >
            <div>
              <div className="container py-5">
                <div>
                  <h2 className="title-font sm:text-2xl text-xl font-medium font-DMSans text-green-600">
                  Trastorno obsesivo-compulsivo:
                  </h2>
                  {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                  <br />
                  {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                  <p className="title-font text-base font-DMSans text-justify">
                  TOC: El trastorno obsesivo-compulsivo (TOC) es una afección mental que consiste en presentar pensamientos (obsesiones) y rituales (compulsiones) una y otra vez. Estos interfieren con su vida, pero no puede controlarlos ni detenerlos.
                  </p>
                  <p className="title-font text-base font-DMSans text-justify">Factores como la genética, la biología cerebral y la química, junto a su entorno, pueden desempeñar un papel en la afección como los siguientes:</p>
                  {/* <br/> */}
                </div>
              </div>
            </div>
          </motion.section>

          <div className="body-font bg-red-100 py-5">
            <div className="container">
              <ul class="list-disc">
                <li>
                No puede controlar sus pensamientos o comportamientos, incluso cuando sabe que son excesivos.
                </li>
                <li>
                Dedica al menos 1 hora al día a estos pensamientos o comportamientos.
                </li>
                <li>
                No disfruta al presentar estas conductas, pero hacerlas puede aliviarle brevemente de la ansiedad que causan sus pensamientos.
                </li>
                <li>
                Tiene problemas importantes en su vida diaria debido a estos pensamientos o comportamientos.
                </li>
              </ul>
            </div>
          </div>

        {/* TERAPIA PARA NIÑOS FIN */}

        {/* TERAPIA TEPT */}
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="container"
          >
            <div>
              <div className="container py-5">
                <div>
                  <h2 className="title-font sm:text-2xl text-xl font-medium font-DMSans text-green-600">
                  Trastorno por estrés postraumático
                  </h2>
                  {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                  <br />
                  {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                  <p className="title-font text-base font-DMSans text-justify">
                  Los trastornos relacionados con traumas y factores de estrés implican la exposición a un evento traumático o estresante. Dos de los trastornos relacionados con el traumatismo son el trastorno por estrés agudo y el trastorno por estrés postraumático (TEPT). El trastorno por estrés agudo y el trastorno por estrés postraumático son similares excepto que el primero, por lo general, comienza inmediatamente después del trauma y tiene una duración de 3 días a 1 mes, mientras que el segundo tiene una duración de menos 1 mes, ya sea como una continuación del trastorno por estrés agudo o como un evento separado que comienza hasta 6 meses después del trauma.
                  </p>
                  <p className="title-font text-base font-DMSans text-justify">Anteriormente, los trastornos relacionados con traumas y factores de estrés eran considerados trastornos de ansiedad. Sin embargo, ahora se considera distinto porque muchos pacientes no sufren ansiedad pero sí tienen síntomas de anhedonia o disforia, ira, agresividad o disociación.</p>
                  {/* <br/> */}
                </div>
              </div>
            </div>
          </motion.section>

          <div className="body-font bg-red-100 py-5">
            <div className="container">
              <ul class="list-disc">
                <li>
                No puede controlar sus pensamientos o comportamientos, incluso cuando sabe que son excesivos.
                </li>
                <li>
                Dedica al menos 1 hora al día a estos pensamientos o comportamientos.
                </li>
                <li>
                No disfruta al presentar estas conductas, pero hacerlas puede aliviarle brevemente de la ansiedad que causan sus pensamientos.
                </li>
                <li>
                Tiene problemas importantes en su vida diaria debido a estos pensamientos o comportamientos.
                </li>
              </ul>
            </div>
          </div>

        {/* TERAPIA PARA TEPT FIN */}

        {/* TERAPIA tanatologia */}
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="container"
          >
            <div>
              <div className="container py-5">
                <div>
                  <h2 className="title-font sm:text-2xl text-xl font-medium font-DMSans text-green-600" id="tanatologia">
                  Tanatología
                  </h2>
                  {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                  <br />
                  {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                  <p className="title-font text-base font-DMSans text-justify">
                  La tanatología es una rama de la psicología que se centra en el estudio de la muerte, el morir y el duelo. Cuando una persona experimenta una pérdida significativa, como la muerte de un ser querido, puede sentir una amplia gama de emociones que van desde la tristeza y el dolor hasta la ira y la confusión. La tanatología se enfoca en ayudar a las personas a manejar estas emociones y a lidiar con el proceso de duelo.
                  </p>
                  <p className="title-font text-base font-DMSans text-justify">En UNETE seremos una valiosa ayuda en el proceso de duelo. Te brindaremos un espacio seguro y confidencial para que puedas expresar tus sentimientos y preocupaciones. Además, te ayudaremos a encontrar formas saludables de lidiar con la pérdida.</p>
                  <p className="title-font text-base font-DMSans text-justify">Es importante destacar que el proceso de duelo es único para cada persona, y no hay una sola manera "correcta" de experimentarlo. Sin embargo, con nuestra ayuda podrás aprender a sobrellevar la tanatología y encontrar un camino hacia la sanación y la esperanza.</p>
                  {/* <br/> */}
                </div>
              </div>
            </div>
          </motion.section>

          <div className='container'>
              <h6 className='text-green-500'>Conoce más de mis servicios</h6>
              <div className="flex md:mt-4 mt-6 gap-3">
              <Link href="/Especialidades/trastorno-de-ansiedad" legacyBehavior>
                  <a className="text-pink-500 inline-flex items-center font-DMSans">
                      Superar la ansiedad.
                      
                  </a>
                  </Link>

                  <Link href="/Especialidades/orientacion-familiar" legacyBehavior>
                      <a className="text-pink-500 inline-flex items-center font-DMSans">
                      Orientación familiar.
                          
                      </a>
                  </Link>
                </div>
          </div>

        {/* TERAPIA PARA TEPT FIN */}


          {/* call to action inicio */}
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                className="object-cover object-center rounded"
                src="/images/beneficio-terapia.jpg"
                alt="Terapia de pareja"
                title="terapia de pareja"
                width={800}
                height={800}
                priority
                placeholder
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-center items-center text-center">
              <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Beneficios de acudir a Terapia
              </h2>
              <p className="mb-8 text-2xl leading-relaxed">
              Ayudaremos a que puedas identificar los pensamientos negativos, sobrellevar la perdida de un ser querido y así tener una vida mejor, ven con <span>la mejor psicóloga</span> en <span>Tuxtla Gutiérrez</span>.
              </p>
              <div className="">
                <Link href="https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez">
                  <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Agendar cita
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* call to action fin  */}
          

          {/* CUADRO VERDE INICIO */}
          <div className="body-font bg-green-100 py-5">
            <div className="container">
              <div className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                  <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                    {/* <!-- article - start --> */}
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                      <p
                        href="#"
                        className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                          src="/images/familia.jpg"
                          alt="valor familia"
                          title="La familia"
                          width={800}
                          height={800}
                          priority
                          placeholder
                        />
                      </p>

                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-gray-800">
                          <p
                            href="#"
                            className="transition duration-100 hover:text-pink-500 active:text-pink-600"
                          >
                            Familia
                          </p>
                        </h3>
                      </div>
                    </div>
                    {/* <!-- article - end --> */}

                    {/* <!-- article - start --> */}
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                      <p
                        href="#"
                        className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                          src="/images/amor.jpg"
                          alt="valor amor"
                          title="El amor"
                          width={800}
                          height={800}
                          priority
                          placeholder
                        />
                      </p>

                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-gray-800">
                          <p
                            href="#"
                            className="transition duration-100 hover:text-pink-500 active:text-pink-600"
                          >
                            Amor
                          </p>
                        </h3>
                      </div>
                    </div>
                    {/* <!-- article - end --> */}

                    {/* <!-- article - start --> */}
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                      <p
                        href="#"
                        className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                          src="/images/soporte.jpg"
                          alt="valor soporte"
                          title="El soporte familiar"
                          width={800}
                          height={800}
                          priority
                          placeholder
                        />
                      </p>

                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-gray-800">
                          <p
                            href="#"
                            className="transition duration-100 hover:text-pink-500 active:text-pink-600"
                          >
                            Soporte
                          </p>
                        </h3>
                      </div>
                    </div>
                    {/* <!-- article - end --> */}

                    {/* <!-- article - start --> */}
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                      <p
                        href="#"
                        className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                          src="/images/emociones.jpg"
                          alt="valor emociones"
                          title="Emoción familiar"
                          width={800}
                          height={800}
                          priority
                          placeholder
                        />
                      </p>

                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-gray-800">
                          <p
                            href="#"
                            className="transition duration-100 hover:text-pink-500 active:text-pink-600"
                          >
                            Emociones
                          </p>
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

        {/* CTA INICIO */}
        <section className="text-gray-600 body-font bg-green-400 py-3 mt-3">
          <div className="container mt-5 mb-5">
            <h3 className="text-center mt-5 mb-5 font-DMSans text-black">
            La depresión puede ser superada con nuestra ayuda, trabajaremos un plan de tratamiento personalizado y adecuado para ti.
            </h3>
            <div className="grid place-items-center ">
              <Link href="https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez">
                <button className="justify-self-center text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">
                  Agendar cita
                </button>
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
  );
}

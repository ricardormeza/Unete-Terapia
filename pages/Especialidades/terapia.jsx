import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";

export default function terapia() {
  return (
    <>
      <Layout
        title={"Terapia"}
        description={"Supera las dificultades, desarrolla y fortalece"}
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
                width={900}
                height={900}
                priority
                placeholder
              />
            </div>
            <div className="container ">
              <div>
                <h1 className="title-font sm:text-2xl text-xl font-medium py-2 font-DMSans text-pink-600" id="terapia">
                  Terapia.
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
                  futuros. En este artículo, discutiremos diferentes tipos de
                  intervenciones terapéuticas para padres, adolescentes y niños.
                </p>
                <br />
                <h2 className="font-DMSans text-green-600">
                  Intervención terapéutica para padres:
                </h2>
                <p className="text-base font-DMSans text-justify">
                  La intervención terapéutica para padres se centra en mejorar
                  las habilidades de crianza y la comunicación entre padres e
                  hijos. Los padres pueden recibir asesoramiento para manejar
                  situaciones difíciles, como problemas de comportamiento,
                  dificultades escolares y problemas de comunicación con sus
                  hijos. Algunas de las estrategias comunes utilizadas en la
                  intervención terapéutica para padres incluyen:
                </p>
              </div>
            </div>
          </div>

        </motion.section>

        <div className="body-font bg-red-100 py-5">
            <div className="container">
              <ul class="list-disc">
                <li>
                  Enseñanza de habilidades de crianza positiva: los padres
                  pueden aprender habilidades para promover el comportamiento
                  positivo en sus hijos, incluyendo el uso de recompensas, el
                  establecimiento de límites claros y la gestión de la
                  disciplina.
                </li>
                <li>
                  Entrenamiento en comunicación efectiva: los padres pueden
                  aprender a comunicarse de manera más efectiva con sus hijos, a
                  escucharlos activamente y a expresar sus propios sentimientos
                  de manera clara y constructiva.
                </li>
                <li>
                  Desarrollo de relaciones saludables: los padres pueden
                  trabajar en la construcción de relaciones saludables y
                  positivas con sus hijos, lo que puede mejorar la comunicación
                  y el entendimiento entre ellos.
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
                  <h2 className="title-font sm:text-2xl text-xl font-medium font-DMSans text-green-600">
                    Intervención terapéutica para adolescentes:.
                  </h2>
                  {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                  <br />
                  {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                  <p className="title-font text-base font-DMSans text-justify">
                    La intervención terapéutica para adolescentes se centra en
                    ayudar a los jóvenes a manejar las presiones y desafíos de
                    la adolescencia y a desarrollar habilidades para una vida
                    saludable y satisfactoria. Algunas de las estrategias
                    utilizadas en la intervención terapéutica para adolescentes
                    incluyen:
                  </p>
                  {/* <br/> */}
                </div>
              </div>
            </div>
          </motion.section>

          <div className="body-font bg-red-100 py-5">
            <div className="container">
              <ul class="list-disc">
                <li>
                  Terapia cognitivo-conductual: los adolescentes pueden aprender
                  a identificar y cambiar los pensamientos negativos que pueden
                  estar contribuyendo a su estrés o ansiedad.
                </li>
                <li>
                  Entrenamiento en habilidades sociales: los adolescentes pueden
                  aprender habilidades sociales para interactuar de manera
                  efectiva con sus compañeros y desarrollar relaciones
                  saludables.
                </li>
                <li>
                  Manejo de emociones: los adolescentes pueden aprender
                  estrategias para manejar las emociones negativas y construir
                  resiliencia.
                </li>
              </ul>
            </div>
          </div>

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
                  Intervención terapéutica para niños:
                  </h2>
                  {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                  <br />
                  {/* <h3 className='font-DMSans sm:text-xl text-lg text-pink-400'>Discapacidad intelectual</h3> */}
                  <p className="title-font text-base font-DMSans text-justify">
                  La intervención terapéutica para niños se centra en ayudar a los niños a comprender y manejar sus emociones, y a desarrollar habilidades sociales y de resolución de problemas. Algunas de las estrategias utilizadas en la intervención terapéutica para niños incluyen:
                  </p>
                  {/* <br/> */}
                </div>
              </div>
            </div>
          </motion.section>

          <div className="body-font bg-red-100 py-5">
            <div className="container">
              <ul class="list-disc">
                <li>
                Terapia de juego: los niños pueden expresarse y procesar sus emociones a través del juego.
                </li>
                <li>
                Entrenamiento en habilidades sociales: los niños pueden aprender habilidades sociales para interactuar de manera efectiva con sus compañeros y desarrollar relaciones saludables.
                </li>
                <li>
                Manejo de la ansiedad: los niños pueden aprender estrategias para manejar la ansiedad, incluyendo la relajación y la meditación.
                </li>
              </ul>
            </div>
          </div>

        {/* TERAPIA PARA NIÑOS FIN */}


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
              <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Beneficios de acudir a Terapia
              </h2>
              <p className="mb-8 text-2xl leading-relaxed">
              Ayudare a mejorar la comunicación y las habilidades sociales, el rendimiento académico y autoestima de quien más quieres.
              </p>
              <div className="flex justify-center">
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
              Te proporcionare apoyo emocional y desarrollaremos habilidades
              para manejar el estrés y la frustración asociada con la dislexia.
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

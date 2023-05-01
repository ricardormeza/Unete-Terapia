import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";

export default function educacionInclusiva() {
  return (
    <>
      <Layout
        title={"Educación Inclusiva"}
        description={
          "La educación inclusiva en UNETE nos enfocamos en la diversidad de los estudiantes y en garantizar que todos, independientemente de sus habilidades o discapacidades, tengan acceso a la misma calidad de educación y una calidad de vida digna."
        }
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
                <h1
                  className="title-font sm:text-2xl text-xl font-medium py-2 font-DMSans text-pink-600"
                  id="terapia"
                >
                  Educación inclusiva.
                </h1>
                {/* <h2 className='font-DMSans'>Atención especializada en <span>adolescentes y niños</span> con <span>problemas de desarrollo neuropsicológico</span> </h2> */}
                <br />
                <p className="text-base font-DMSans text-justify">
                La educación inclusiva es un tema de gran importancia en la actualidad, y es fundamental para que todas las personas tengan acceso a una educación de calidad. La educación inclusiva busca garantizar que todas las personas, independientemente de su género, raza, orientación sexual, habilidades y discapacidades, tengan acceso a una educación que les permita desarrollar todo su potencial.
                </p>
                <br />
                {/* <h2 className="font-DMSans text-green-600">Depresión</h2> */}
                <p className="text-base font-DMSans text-justify">
                La inclusión educativa es un enfoque que busca garantizar que todas las personas tengan acceso a la educación, independientemente de sus habilidades y discapacidades. Esto significa que se deben tomar medidas para garantizar que las personas con discapacidades tengan las mismas oportunidades que las personas sin discapacidades. Por este motivo, en UNETE nos enfocamos en que puedas desempeñar todas las habilidades y superar cualquier obstáculo.
                </p>
                <p className="text-base font-DMSans text-justify">
                Además en UNETE,  brindaremos asesoramiento y apoyo a los padres y cuidadores de niños con discapacidades. Los padres y cuidadores pueden sentirse abrumados y estresados al tratar de ayudar a un niño con discapacidad a tener éxito en la educación.
                </p>
                <p className="text-base font-DMSans text-justify">
                En UNETE brindaremos formación a los educadores y otros profesionales que trabajan con personas con discapacidades. Estos servicios de formación pueden ayudar a los educadores y otros profesionales a entender mejor las necesidades de las personas con discapacidades y a desarrollar estrategias para apoyar su educación. La formación también puede ayudar a los educadores y otros profesionales a comprender mejor los desafíos que enfrentan las personas con discapacidades y a desarrollar habilidades para ayudarles a superar estos desafíos.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="body-font bg-red-100 py-5">
          <div className="container">
            <ul class="list-disc">
              <li>
              Diversidad: La educación inclusiva valora la diversidad y la riqueza de las diferencias individuales, como la cultura, el idioma, la religión, la orientación sexual y la discapacidad.
              </li>
              <li>
              Accesibilidad: La educación inclusiva busca asegurar que todos los estudiantes tengan acceso a la misma calidad de educación, independientemente de sus habilidades o discapacidades.
              </li>
              <li>
              Participación activa: La educación inclusiva valora la participación activa de todos los estudiantes en el proceso de aprendizaje, fomentando el diálogo, el debate y la colaboración.
              </li>
              <li>Igualdad: La educación inclusiva promueve la igualdad de oportunidades y derechos para todos los estudiantes, eliminando cualquier forma de discriminación o exclusión.</li>
              <li>Respeto: La educación inclusiva se basa en el respeto y la aceptación de la diversidad, fomentando la empatía, la tolerancia y la comprensión.</li>
              <li>Colaboración: La educación inclusiva fomenta la colaboración entre los estudiantes, los maestros y los padres para asegurar un ambiente de aprendizaje acogedor y de apoyo.</li>
              <li>Flexibilidad: La educación inclusiva reconoce que cada estudiante tiene habilidades y necesidades únicas, por lo que se busca adaptar el proceso educativo para asegurar que todos los estudiantes puedan participar activamente en el aprendizaje.</li>
              <li>Empoderamiento: La educación inclusiva busca empoderar a los estudiantes para que sean agentes activos de su propio aprendizaje, desarrollando habilidades como la toma de decisiones, la resolución de problemas y la creatividad.</li>
            </ul>
          </div>
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
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-center items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Beneficios de acudir a Terapia
            </h2>
            <p className="mb-8 text-2xl leading-relaxed">
            Te ayudaremos a desarrollar habilidades de quien más quieres y que les permitan participar en la educación de una manera más efectiva.
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
                        src="/images/educacion-inclusiva-2.jpg"
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
                          Accesibilidad
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
                        src="/images/educacion-inclusiva-3.jpg"
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
                          Participación activa
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
                        src="/images/educacion-inclusiva-4.jpg"
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
                          Igualdad
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
              La depresión puede ser superada con nuestra ayuda, trabajaremos un
              plan de tratamiento personalizado y adecuado para ti.
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

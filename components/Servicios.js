import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Servicios() {
  return (
    <>
      <section className="text-gray-600 body-font bg-red-100 mt-5">
        <div className="container px-5 py-14 mx-auto">
          <h3 className="text-center font-DMSans text-black">
            Nuestro Servicios
          </h3>
          <p className="font-DMSans text-justify">
            Nuestros <span>servicios psicológicos</span> se enfocan en ayudarte
            a encontrar soluciones a tus problemas y alcanzar tus metas
            personales. Ofrecemos terapia individual, y abordar una variedad de problemas
            emocionales y de salud mental, como la depresión, la ansiedad.
          </p>
          <p className="font-DMSans text-justify">
            Nuestro enfoque es personalizado y adaptado a tus necesidades
            específicas, y trabajamos contigo para ayudarte a desarrollar
            habilidades para mejorar tu bienestar emocional y mejorar tu calidad
            de vida. 
          </p>
          <p className="font-DMSans text-justify">
          Nuestro objetivo es brindarte un espacio seguro y acogedor
            donde puedas hablar abiertamente sobre tus problemas y encontrar un
            camino hacia la curación y la recuperación.
          </p>
          <div className="flex flex-wrap -m-4">
            {/* DESARROLLO NEUROLOGICO INICIO */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative z-0 hover:bg-pink-200">
                <Image
                    className="d-block w-100"
                    src="/images/orientacion-familiar.jpg"
                    alt="Evaluacion pedagogica"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                {/* <h3 className="mt-3 tracking-widest sm:text-2xl text-xl font-medium text-gray-900  mb-1 font-DMSans uppercase">
                  Evaluación pedagógica
                </h3> */}
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">
                Orientación familiar
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">La orientación familiar es una herramienta valiosa que puede ayudar a las familias a enfrentar y superar los desafíos que enfrentan...</p>
                <Link href="/Especialidades/orientacion-familiar" legacyBehavior>
                  <a className="text-pink-500 inline-flex items-center font-DMSans">
                    Saber más
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            {/* DESARROLLO NEUROLOGICO FIN */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative z-0 hover:bg-pink-200">
              <Image
                    className="d-block w-100"
                    src="/images/neurodesarrollo.jpeg"
                    alt="neurodesarrollo"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                {/* <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">
                  Neurodesarrollo
                </h3> */}
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">
                  Desarrollo Neurológico{" "}
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">
                El desarrollo neurológico se refiere a los cambios y progresos que ocurren en el cerebro y en el sistema nervioso a lo largo del tiempo...
                </p>
                <Link href="/Especialidades/desarrollo-neuropsicologico#neuropsicologico" legacyBehavior>
                  <a className="text-pink-500 inline-flex items-center font-DMSans">
                    Saber más
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            {/* DEPRESION */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
              <Image
                    className="d-block w-100"
                    src="/images/habla.jpeg"
                    alt="Trastorno del habla"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                {/* <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">
                  Neurodesarrollo
                </h3> */}
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">
                  Terapia individual{" "}
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">
                La intervención terapéutica es una herramienta fundamental para ayudar a las familias a superar dificultades y mejorar la comunicación y la convivencia en el hogar...
                </p>
                <Link href="/Especialidades/terapia#terapia" legacyBehavior>
                  <a className="text-pink-500 inline-flex items-center font-DMSans">
                    Saber más
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            {/* ESTRES */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
              <Image
                    className="d-block w-100"
                    src="/images/talleres-formacion.jpg"
                    alt="Talleres de formacion"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                {/* <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">
                  Estrés
                </h3> */}
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">
                  Talleres de formación
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">
                En la actualidad, existen diversos talleres de orientación psicológica que están dirigidos a padres, adolescentes y niños. Estos talleres pueden ser de gran ayuda...
                </p>
                <Link href="/Talleres" legacyBehavior>
                  <a className="text-pink-500 inline-flex items-center font-DMSans">
                    Saber más
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            {/* AUTOESTIMA */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
              <Image
                    className="d-block w-100"
                    src="/images/educacion-inclusiva-1.jpg"
                    alt="Educacion inclusiva"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                {/* <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">
                  Autoestima
                </h3> */}
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">
                Educación inclusiva
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">
                La educación inclusiva es un tema de gran importancia en la actualidad, y es fundamental para que todas las personas tengan acceso a una educación de calidad. La educación inclusiva busca...
                </p>
                <Link href="/Especialidades/educacion-inclusiva" legacyBehavior>
                  <a className="text-pink-500 inline-flex items-center font-DMSans">
                    Saber más
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            {/* AUTOESTIMA FIN */}
            
            
          </div>
        </div>
      </section>
    </>
  );
}

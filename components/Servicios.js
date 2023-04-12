import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Servicios() {
  return (
    <>
      <section className="text-gray-600 body-font bg-red-100 mt-3">
        <div className="container px-5 py-24 mx-auto">
          <h3 className="text-center font-DMSans text-black">
            Nuestro Servicios
          </h3>
          <p className="font-DMSans text-center">
            Nuestros <span>servicios psicológicos</span> se enfocan en ayudarte
            a encontrar soluciones a tus problemas y alcanzar tus metas
            personales. Ofrecemos terapia individual, y abordar una variedad de problemas
            emocionales y de salud mental, como la depresión, la ansiedad, el
            estrés, el trauma y las adicciones.{" "}
          </p>
          <p className="font-DMSans text-center">
            Nuestro enfoque es personalizado y adaptado a tus necesidades
            específicas, y trabajamos contigo para ayudarte a desarrollar
            habilidades para mejorar tu bienestar emocional y mejorar tu calidad
            de vida. Nuestro objetivo es brindarte un espacio seguro y acogedor
            donde puedas hablar abiertamente sobre tus problemas y encontrar un
            camino hacia la curación y la recuperación.
          </p>
          <div className="flex flex-wrap -m-4">
            {/* DESARROLLO NEUROLOGICO INICIO */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative z-0 hover:bg-pink-200">
                <Image
                    className="d-block w-100"
                    src="/images/evaluacion.jpeg"
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
                Evaluación pedagógica
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">La educación es uno de los aspectos más importantes en el desarrollo de los niños y adolescentes. Es el proceso mediante el cual se les enseña habilidades...</p>
                <Link href="/Especialidades/desarrollo-neuropsicologico#evaluacion" legacyBehavior>
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
                  Trastornos del habla{" "}
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">
                El trastorno del habla y del lenguaje es una condición que afecta a la capacidad de una persona para comunicarse verbalmente. Puede manifestarse...
                </p>
                <Link href="/Especialidades/nuerodesarrollo#trastornohabla" legacyBehavior>
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
                    src="/images/discalculia.jpeg"
                    alt="Trastorno del habla"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                {/* <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">
                  Estrés
                </h3> */}
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">
                  Discalculia
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">
                La discalculia es un trastorno específico del aprendizaje que se caracteriza por dificultades en la comprensión y el uso de los números y las matemáticas. Las personas con discalculia pueden...
                </p>
                <Link href="/Especialidades/neurodesarrollo#discalculia" legacyBehavior>
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
                    src="/images/autismo.jpg"
                    alt="Trastorno del habla"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                {/* <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 font-DMSans uppercase">
                  Autoestima
                </h3> */}
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">
                  Espectro autista
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">
                El trastorno del espectro autista (TEA) es un trastorno del desarrollo neurológico que afecta la comunicación, el comportamiento y las habilidades sociales. Aunque...
                </p>
                <Link href="/Especialidades/desarrollo-neuropsicologico#autismo" legacyBehavior>
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
            {/* TANATOLOGIA INICIO */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
                <Image
                    className="d-block w-100"
                    src="/images/dislexia.jpg"
                    alt="Trastorno del habla"
                    width={800}
                    height={800}
                    priority
                    placeholder
                    />
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">
                  Dislexia.
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">
                La dislexia es un trastorno del aprendizaje que se caracteriza por dificultades en la lectura y la escritura. Las personas con dislexia pueden tener dificultades para reconocer y comprender...
                </p>
                <Link href="/Especialidades/neurodesarrollo#dislexia" legacyBehavior>
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
            {/* TANATOLOGIA FIN */}
            {/* ESTRES POSTRAUMATICO */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
                <Image
                    className="d-block w-100"
                    src="/images/deficit-atencion.jpg"
                    alt="Trastorno del habla"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">
                  Deficit de atención.
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">
                El trastorno por déficit de atención con hiperactividad (TDAH) es un trastorno neurobiológico que afecta la capacidad de una persona para prestar atención, controlar su comportamiento...
                </p>
                <Link href="/Especialidades/neurodesarrollo#deficitatencion" legacyBehavior>
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
            {/* ESTRES POSTRAUMATICO FIN */}
            {/* TOC */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-pink-200">
                <Image
                    className="d-block w-100"
                    src="/images/terapia.jpg"
                    alt="Trastorno del habla"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-DMSans">
                  Terapia{" "}
                </h2>
                <p className="leading-relaxed mb-3 font-DMSans">
                La intervención terapéutica es una herramienta fundamental para ayudar a las familias a superar dificultades y mejorar la comunicación y la convivencia...
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
            {/* TOC FIN */}
          </div>
        </div>
      </section>
    </>
  );
}

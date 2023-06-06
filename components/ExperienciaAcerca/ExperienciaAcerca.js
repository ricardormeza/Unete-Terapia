import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ExperienciaAcerca() {
  return (
    <>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="text-xl font-DMSans text-center text-green-500">Mtra. Yeimy Rocio Avila Pontón</h1>
                    <h2 className="text-xl font-DMSans text-center text-green-500">Formación academica:</h2>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500"><span>Maestría en Educación- Orientación Familiar Y del Adolescente 2020</span>.</p>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500"><span>Lic. En Psicologia</span> ULV <span>Tuxtla Gutierrez,Chiapas</span> 2017.</p>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500"><span>Lic. En Educación Especial</span> U.P.N <span>Bogotá, Colombia</span>. 2009.</p>
                    <div className="w-full flex justify-center">
                        <div className="w-24 h-24 rounded-full flex items-center  justify-center ">
                            <Image alt="imagen de Mtra. Yeimi Rocio Avila Pontón" className="object-cover object-center rounded-full h-full w-full self-center" src="/images/yeimirocioavilapontonmin.jpg" 
                            width={100} height={100}/>
                        </div>
                    </div>

                <div className="mt-5 mb-1">
                    <p className='text-base font-DMSans text-justify'>Con más de 10 años de experiencia en el enfoque <span>terapéutico cognitivo-conductual</span>, y <span>neuro-psicológico</span>, basado en la modificación estructural a partir de la funcionalidad, permiten lograr el equilibrio armonioso del individuo en las diferentes dimensiones o áreas de desarrollo.</p>
                    <p className='text-base font-DMSans text-justify'>Ademas de esto, con una gran pasión de servir y con amplia competencia para brindar <span>orientación familiar, individual, juvenil e infantil</span>.</p>
                    <p className='text-base font-DMSans text-justify'>Con formación académica en diplomados para la intervención de oportuna para atención en <span>tanatología</span>, <span>psicopatología infantil y juvenil</span>, <span>depresión</span>, <span>ansiedad</span>, <span>estrés</span>, <span>neuropsicología del desarrollo y orientación de padres</span>.</p>
                    <p className='text-base font-DMSans text-justify'>A travez de <span>talleres o platicas grupales para empresas, u organizaciones</span> asi mismo como en un proceso terapeutico de manera individual.</p>
                </div>

                    {/* <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1> */}
                    
                </div>
                <div class="flex flex-wrap -m-4">
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                    
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Orientación Familiar</h2>
                    <Link href="/Especialidades/orientacion-familiar">
                        <p class="leading-relaxed text-base">En UNETE nos especializamos en orientación familiar, entiendo que las relaciones familiares pueden...</p>
                    </Link>
                    </div>
                </div>
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                    
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Neurodesarrollo</h2>
                    <Link href="/Especialidades/nuerodesarrollo">
                        <p class="leading-relaxed text-base">Los trastornos específicos del neurodesarrollo son una serie de condiciones neurológicas que afectan el desarrollo del cerebro y del sistema nervioso en la infancia...</p>
                    </Link>
                    </div>
                </div>
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                    
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Terapia Individual</h2>
                    <Link href="/Especialidades/terapia">
                    <p class="leading-relaxed text-base">La intervención terapéutica es una herramienta fundamental para ayudar a las familias a superar dificultades y mejorar la comunicación y la convivencia...</p>
                    </Link>
                    </div>
                </div>
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                    
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Orientación Educativa</h2>
                    <Link href="/Especialidades/orientacion-educativa">
                        <p class="leading-relaxed text-base">La educación inclusiva es un tema de gran importancia en la actualidad, y es fundamental para que todas las personas tengan acceso a una educación...</p>
                    </Link>
                    </div>
                </div>
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                    
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Talleres de Formación</h2>
                    <Link href="/Talleres">
                        <p class="leading-relaxed text-base">En la actualidad, existen diversos talleres de orientación psicológica que están dirigidos a padres, adolescentes y niños. Estos talleres pueden ser de gran ayuda...</p>
                    </Link>
                    </div>
                </div>
                {/* <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                    
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                </div> */}
                </div>
                {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
            </div>
            </section>
    </>
  )
}

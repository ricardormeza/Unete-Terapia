import Image from 'next/image'
import Link from 'next/link'

export default function ComponenteTres() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Image alt="tranquilidad y paz mental" className="object-cover object-center h-full w-full" src="/images/consulta-mtra-Yeimy.jpeg"
                        width={800} height={800} 
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <Image alt="imagen de la Mtra. Yeimy Rocio Avila Ponton" className="object-cover object-center rounded-full h-full w-full" src="/images/yeimirocioavilapontonmin.jpg" 
                            width={100} height={100}/>
                                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg> */}
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Mtra. <span>Yeimi Rocio Avila Pontón</span></h2>
                                <div className="w-12 h-1 bg-pink-600 rounded mt-2 mb-4"></div>
                                <p className="text-base">Pasión por servir y brindar orientación.</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">Con más de 10 años de experiencia en el enfoque terapéutico cognitivo-conductual, y Neuro-psicológico, Basado en la modificación estructural a partir de la funcionalidad, permiten lograr el equilibrio armonioso del individuo en las diferentes dimensiones o áreas de desarrollo.</p>
                            <Link href='/acerca' className="text-pink-500 inline-flex items-center">Saber más
                                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

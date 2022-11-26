import React from 'react'

export default function ComponenteDos() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">UN ESPACIO PARA RENACER</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Terapia Para Ser Mejor</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue leo tortor, posuere pretium turpis pharetra quis. Duis in congue elit. Aliquam erat volutpat. Quisque luctus libero dolor, quis condimentum nunc porta at. Nulla dictum metus justo, vitae tristique augue ultrices gravida. Quisque ut tellus pulvinar, commodo massa non, malesuada dui.</p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Terapia 1</h2>
            <p className="leading-relaxed text-base mb-4">Phasellus mi lacus, sagittis in pulvinar quis, volutpat non lacus. Donec luctus pulvinar tincidunt.</p>
            <a className="text-indigo-500 inline-flex items-center">Conocer más...
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Terapia 2</h2>
            <p className="leading-relaxed text-base mb-4">Phasellus mi lacus, sagittis in pulvinar quis, volutpat non lacus. Donec luctus pulvinar tincidunt.</p>
            <a className="text-indigo-500 inline-flex items-center">Conocer más...
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Terapia 3</h2>
            <p className="leading-relaxed text-base mb-4">Phasellus mi lacus, sagittis in pulvinar quis, volutpat non lacus. Donec luctus pulvinar tincidunt.</p>
            <a className="text-indigo-500 inline-flex items-center">Conocer más...
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Terapia 4</h2>
            <p className="leading-relaxed text-base mb-4">Phasellus mi lacus, sagittis in pulvinar quis, volutpat non lacus. Donec luctus pulvinar tincidunt.</p>
            <a className="text-indigo-500 inline-flex items-center">Conocer más...
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Agendar Cita</button>
      </div>
    </section>
  )
}


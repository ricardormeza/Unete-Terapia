import React from 'react'
import Link from "next/link";

export default function CtaDos() {
  return (
    <>
    <section className="text-gray-600 body-font bg-green-400 py-3 pb-3 mt-3">
      <div className="container mt-5 mb-5">
        <h3 className="text-center mt-5 mb-5 font-DMSans text-black">
            La terapia psicológica puede ser muy beneficiosa para las personas que buscan mejorar su bienestar emocional y mental.
        </h3>
          <div className="grid place-items-center ">
            <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
              <button className="justify-self-center text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">Agendar cita</button>
            </Link>
          </div>
      </div>
    </section>
    </>
  )
}

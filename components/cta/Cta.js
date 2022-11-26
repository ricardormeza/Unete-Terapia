import React from 'react'
import Link from 'next/link'
import styles from '../../styles/CallTo.module.css'
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai'

export default function Cta() {
  return (
    <section className={styles.ctaSection}>
        <div></div>
        <div className={styles.ctaGrdiSection}>
            <Link href='tel:+521741737'>
                <div className={styles.ctaGridItem}>
                    <AiOutlinePhone/>
                    {/* 9611741737 */}
                </div>
            </Link>
            <Link href='https://wa.link/k01s7t'>
                <div className={styles.ctaGridItem}>
                    <BsWhatsapp/>
                </div>
            </Link>
            <Link href='https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez'>
                <button className='bg-pink-500 hover:bg-green-400 text-white font-bold py-1 px-2 rounded'>
                    Agenda tu cita
                </button>
            </Link>
        </div>
    </section>
  )
}

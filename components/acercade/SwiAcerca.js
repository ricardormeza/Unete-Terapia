import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import '/styles/globals.css'
import styles from '/styles/AcercaDe.module.css'
import "./swipy.module.css";
import Image from "next/image";

import { Navigation, Pagination, History } from "swiper";

export default function SwiAcerca() {
   

    
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        history={{
          key: "slide",
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide data-history="Taller sobre intervención psicopedagógica">
            <div className="grid place-items-center content-center">
                <Image src='/images/dra-yeimi-rocio-taller-5.jpeg'
                alt='talle de psic. yeimi'
                width={500}
                height={500}
                className="relative z-0"/>
                <span className="text-center">Taller sobre intervención psicopedagógica</span>
            </div>
        </SwiperSlide>
        <SwiperSlide data-history="Taller sobre intervención psicopedagógica">
        <div className="grid place-items-center content-center">
                <Image src='/images/dra-yeimi-rocio-taller-4.jpeg'
                alt='talle de psic. yeimi'
                width={500}
                height={500}
                className="relative z-0"/>
                <span className="text-center">Taller sobre intervención psicopedagógica</span>
            </div>
        </SwiperSlide>
        <SwiperSlide data-history="Taller sobre Tanatología">
        <div className="grid place-items-center content-center">
                <Image src='/images/dra-yeimi-rocio-taller-3.jpeg'
                alt='talle de psic. yeimi'
                width={500}
                height={500}
                className="relative z-0"/>
                <span className="text-center">Taller sobre Tanatología</span>
            </div>
        </SwiperSlide>
        <SwiperSlide data-history="Taller sobre Tanatología">
        <div className="grid place-items-center content-center">
                <Image src='/images/dra-yeimi-rocio-taller-2.jpeg'
                alt='talle de psic. yeimi'
                width={500}
                height={500}
                className="relative z-0"/>
                <span className="text-center">Taller sobre Tanatología</span>
            </div>
        </SwiperSlide>
        <SwiperSlide data-history="Taller sobre resiliencia">
        <div className="grid place-items-center content-center">
                <Image src='/images/dra-yeimi-rocio-taller.jpeg'
                alt='talle de psic. yeimi'
                width={500}
                height={500}
                className="relative z-0"/>
                <span className="text-center">Taller sobre resiliencia</span>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

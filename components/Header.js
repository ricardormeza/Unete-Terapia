import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Transition } from "@headlessui/react";
// import { Link } from "react-scroll";
import styles from '../styles/Header.module.css'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className=" shadow-sm fixed w-full z-10 ">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
									<Image src="/images/unete.jpeg" 
											alt='logo de unete'
											width={50}
											height={50}
											className={styles.logoHeader}
									/>
									{/* UNETE<span className="text-blue-500">line</span> */}
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
                    					href='/'
										activeClass="Inicio"
										to="/"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Inicio
									</Link>
									<Link
										href='/Especialidades'
										activeClass="Especialidades"
										to="/Especialidades"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-pink-400 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Especialidades
									</Link>
									<Link
										href='/Servicios'
										activeClass="Servicios"
										to="Servicios"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-pink-400 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Servicios
									</Link>

									<Link
										href='/Talleres'
										activeClass="Talleres"
										to="Talleres"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-pink-400 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Talleres
									</Link>

									<Link
										href='/Contacto'
										activeClass="Contacto"
										to="Contacto"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer bg-pink-400 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-500"
									>
										ContactoS
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-pink-400 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/"
									activeClass="Inicio"
									to="Inicio"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-pink-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Inicio
								</Link>
								<Link
									href="/Especialidades"
									activeClass="Especialidades"
									to="Especialidades"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-pink-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Especialidades
								</Link>

								<Link
									href="/Servicios"
									activeClass="Servicios"
									to="Servicios"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-pink-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Servicios
								</Link>
								<Link
									href="/Talleres"
									activeClass="Talleres"
									to="Talleres"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-pink-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Talleres
								</Link>

								<Link
									href="/Contacto"
									activeClass="Contacto"
									to="Contacto"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-pink-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contacto
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
    </>
  )
}

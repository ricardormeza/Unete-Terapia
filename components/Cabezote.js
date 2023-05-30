import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { HiUserGroup,
    HiCursorArrowRays,
    HiOutlineLightBulb,
    HiOutlineQrCode,
    HiOutlinePlay,
    HiPhone,
    HiOutlineGlobeAlt,
    HiOutlineBars3,
    HiOutlineXCircle,
    HiOutlineChevronDoubleDown
 } from "react-icons/hi2";
import {BsChevronCompactDown, BsBrightnessHigh, BsFlower3} from 'react-icons/bs'
import styles from '../styles/Header.module.css';


const solutions = [
    {
        name: 'Acerca de',
        description: 'Conoce más acerca de La Mtra. Yeimy Rocio Avila Ponton',
        href: '/acerca',
        icon: BsBrightnessHigh,
    },
    // {
    //     name: '¿Cómo funciona?',
    //     description: 'Realizamos terapía física a domicilio',
    //     href: '/como-funciona',
    //     icon: HiCursorArrowRays,
    // }
]

const especialidades = [
    {
        name: 'Orientación Familiar',
        description: '',
        href: '/Especialidades/orientacion-familiar',
        icon: BsFlower3,
    },
    {
        name: 'Neurodesarrollo',
        description: '',
        href: '/Especialidades/nuerodesarrollo',
        icon: BsFlower3,
    },
    {
        name: 'Terapia Individual',
        description: '',
        href: '/Especialidades/terapia',
        icon: BsFlower3,
    },
    {
        name: 'Orientación Educativa',
        description: '',
        href: '/Especialidades/orientacion-educativa',
        icon: BsFlower3,
    },
]
const servicios = [
    {
        name: 'Talleres de Formación',
        description: 'Talleres de orientación para padres, adolescentes y niños.',
        href: '/Talleres',
        icon: BsBrightnessHigh,
    },
    
]


const callsToAction = [


    { name: 'Watch Demo', href: '#', icon: HiOutlinePlay },
    { name: 'Contact Sales', href: '#', icon: HiPhone },
]
const resources = [
    {
        name: 'Aviso de privacidad',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '/aviso-privacidad',
        icon: HiOutlineGlobeAlt,
    },
]
const recentPosts = [


    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Cabezote = () => {
    return (
        <Popover className={`relative   ${styles.HeaderBG}`}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130"><path fill="#7da641" fillOpacity="1" d="M0,128L80,112C160,96,320,64,480,69.3C640,75,800,117,960,128C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" rs_id="872"></path></svg> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center  border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="md:flex  items-center justify-start  md:flex-1 lg:w-0 sm:hidden">
                        <Link href="/" legacyBehavior className="md:hidden ">
                            <a href="#" className="whitespace-nowrap text-base font-medium  text-gray-500 hover:text-gray-900 rounded">
                                <Image className={`rounded-full ${styles.sombra}`} width={120} height={120} src="/circulo-logo.jpg" alt='logo clínica UNETE' />
                            </a>
                        </Link>
                    </div>
                    <div className="flex justify-start md:hidden">
                        {/* <a href="#">
                            <span className="sr-only">Workflow</span>
                            <Image
                                layout='responsive' width={600} height={450}
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </a> */}
                        {/* <Link href="/">
                            <a href="#" className="whitespace-nowrap text-base font-medium  text-gray-500 hover:text-gray-900">
                                <Image width={180} height={100} src="/img/UpTherapy-logo.webp" alt='logo clínica Up Therapy MX' />
                            </a>
                        </Link> */}
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-pink-500 hover:text-pink-500 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                            <span className="sr-only">Open menu</span>
                            <HiOutlineBars3 className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
                                        )}
                                    >
                                        <span>Conócenos</span>
                                        <BsChevronCompactDown
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-green-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {solutions.map((item) => (
                                                        <Link 
                                                        key={item.name}
                                                        href={item.href}
                                                        legacyBehavior
                                                        >
                                                            
                                                        <a
                                                            // key={item.name}
                                                            // href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 no-underline"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-green-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        {/* ESPECIALIDADES INICIO */}
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
                                        )}
                                    >
                                        <span>Servicios</span>
                                        <BsChevronCompactDown
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-green-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {especialidades.map((item) => (
                                                        <Link 
                                                        key={item.name}
                                                        href={item.href}
                                                        legacyBehavior
                                                        >
                                                        <a
                                                            // key={item.name}
                                                            // href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 no-underline"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-pink-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        {/* ESPECIALIDADES FIN */}

                        {/* SERVICIOS E INOVACIONES INICIO */}
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
                                        )}
                                    >
                                        <span>Talleres</span>
                                        <BsChevronCompactDown
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-green-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {servicios.map((item) => (
                                                        <Link 
                                                        key={item.name}
                                                        href={item.href}
                                                        legacyBehavior
                                                        >
                                                        <a
                                                            // key={item.name}
                                                            // href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 no-underline"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-pink-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                        </Link>
                                                    ))}
                                                </div>
                                                {/* <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                    {callsToAction.map((item) => (
                                                        <div key={item.name} className="flow-root">
                                                            <a
                                                                href={item.href}
                                                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                                            >
                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                                                <span className="ml-3">{item.name}</span>
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div> */}
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        <Link href="/Contacto" legacyBehavior>
                        <a  className="text-base font-medium mt-0 text-gray-500 hover:text-gray-900">
                            Contacto
                        </a>
                        </Link>
                        {/* SERVICIOS FIN */}
                        
                        
                    </Popover.Group>
                    
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-40">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    {/* <Image
                    layout='responsive' width={600} height={450}
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  /> */}
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                                        <span className="sr-only">Close menu</span>
                                        <HiOutlineXCircle className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            {/* RESPONSIVE MENU TELEFONO */}
                            <div className="mt-6">
                                <nav className="grid gap-y-8 Z-40">
                                    {solutions.map((item) => (
                                        <Link 
                                        key={item.name}
                                        href={item.href}
                                        legacyBehavior
                                        >
                                        <a
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-pink-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                        </Link>
                                    ))}
                                    {especialidades.map((item) => (
                                        <Link 
                                        key={item.name}
                                        href={item.href}
                                        legacyBehavior
                                        >
                                        <a
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-pink-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                        </Link>
                                    ))}
                                    {servicios.map((item) => (
                                        <Link 
                                        key={item.name}
                                        href={item.href}
                                        legacyBehavior
                                        >
                                        <a
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-pink-600 decoration-pink-300" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <Link href="/Contacto" legacyBehavior>
                                    <a  className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Contacto
                                    </a>
                                </Link>

                                {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Docs
                                </a> */}
                                {resources.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Cabezote
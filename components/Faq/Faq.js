import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Faq() {
    return (
        <Accordion className='mt-5 mb-5'>
            <Accordion.Item eventKey="0">
                <h3 className='text-center'>Preguntas frecuentes</h3>
                <Accordion.Header className='text-pink-500'>¿Cómo sé si necesito ir a terapia?</Accordion.Header>
                <Accordion.Body className='text-green-500'>
                Es normal tener dudas sobre si es necesario buscar ayuda profesional. Si sientes que estás luchando con emociones difíciles, problemas de relación, ansiedad, depresión, estrés, entre otros, es posible que la terapia pueda ser útil para ti. También puede ser útil si estás buscando un espacio seguro para hablar sobre tus sentimientos y pensamientos.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className='text-pink-500'>¿Qué puedo esperar en mi primera sesión de terapia?</Accordion.Header>
                <Accordion.Body className='text-green-500'>
                En la primera sesión, el terapeuta te hará algunas preguntas para conocerte mejor y comprender tus preocupaciones. También te explicará el proceso de terapia y cómo pueden trabajar juntos para abordar tus preocupaciones.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header className='text-pink-500'>¿Qué tipo de terapia es mejor para mí?</Accordion.Header>
                <Accordion.Body className='text-green-500'>
                Hay muchas modalidades de terapia diferentes, como la terapia cognitivo-conductual, la terapia psicodinámica, la terapia de aceptación y compromiso, entre otras. Tu terapeuta puede ayudarte a determinar qué tipo de terapia podría ser más efectivo para ti, según tus necesidades y objetivos.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header className='text-pink-500'>¿Cuánto tiempo tendré que asistir a terapia?</Accordion.Header>
                <Accordion.Body className='text-green-500'>
                La duración de la terapia varía dependiendo de cada persona y sus necesidades. Algunas personas solo necesitan unas pocas sesiones para sentirse mejor, mientras que otras pueden beneficiarse de un tratamiento a largo plazo. Tu terapeuta puede trabajar contigo para establecer un plan de tratamiento que funcione para ti.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header className='text-pink-500'>¿Cómo puedo saber si mi terapia está funcionando?</Accordion.Header>
                <Accordion.Body className='text-green-500'>
                Es importante monitorear tu progreso durante el tratamiento. Puedes preguntarle a tu terapeuta cómo puedes medir tu progreso y qué cambios esperar en tu vida diaria. También puedes evaluar si sientes que estás alcanzando tus objetivos y si estás experimentando una mejoría en tus síntomas y bienestar general.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

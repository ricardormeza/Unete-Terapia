import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import styles from '../../styles/Caruse.module.css'

function UncontrolledExample() {
    return (
        <Carousel className={`sm:relative sm:z-0 ${styles.lineaCarrusel}`}>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/familia-felicidad.jpeg"
                    alt="Terapia de pareja"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                <Carousel.Caption>
                    <h3 className='bg-zinc-100 text-black'>Desarrollo Neurológico</h3>
                    <p className='bg-zinc-100 text-black'>Mejoremos la comunicación, las habilidades sociales, el rendimiento académico y autoestima de quien más quieres.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/hombre-con-ansiedad.jpeg"
                    alt="Terapia individual"
                    width={900}
                    height={700}
                    priority
                />

                <Carousel.Caption>
                    <h3 className='text-green-500'>Terapia Individual</h3>
                    <p className='text-green-500 font-bold'>Desarrollar una mayor autoconciencia, lo que te permitirá tomar decisiones más conscientes y saludables en tu vida.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/abuelos-playa.jpeg"
                    alt="imagen de tranatologia"
                    width={900}
                    height={900}
                    priority
                />
                <Carousel.Caption>
                    <h3 className='text-green-500 font-bold'>Talleres de Formación</h3>
                    <p className='text-green-500 font-bold'>
                    Mejoraremos la comunicación, el manejo del estrés, la resolución de conflictos, el desarrollo de habilidades sociales.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/orientacion-familiar-portada.jpg"
                    alt="Mujer con ansiedad"
                    width={900}
                    height={900}
                    priority
                />
                <Carousel.Caption>
                    <h3 className='text-green-500 font-bold'>Orientación familiar</h3>
                    <p className='text-green-500 font-bold'>
                    Trabajaremos en desarrollar habilidades de comunicación efectiva, resolver conflictos, y mejorar la calidad de las relaciones familiares.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/educacion-inclusiva-1.jpg"
                    alt="orientacion familiar"
                    width={900}
                    height={900}
                    priority
                />
                <Carousel.Caption>
                    <h3 className='text-green-500 font-bold'>Educación Inclusiva</h3>
                    <p className='text-green-500 font-bold'>
                    La educación inclusiva es importante porque proporciona una educación de calidad a todos los estudiantes.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
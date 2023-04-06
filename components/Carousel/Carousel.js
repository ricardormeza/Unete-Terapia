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
                    alt="First slide"
                    width={800}
                    height={800}
                    priority
                    placeholder
                />
                <Carousel.Caption>
                    <h3>Terapia de Pareja</h3>
                    <p>Mejoren la comunicación, fortalezcan y resuelvan conflictos de manera más efectiva.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/hombre-con-ansiedad.jpeg"
                    alt="Second slide"
                    width={900}
                    height={700}
                    priority
                />

                <Carousel.Caption>
                    <h3>Terapia Individual</h3>
                    <p>Desarrollar una mayor autoconciencia, lo que te permitirá tomar decisiones más conscientes y saludables en tu vida.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/abuelos-playa.jpeg"
                    alt="Third slide"
                    width={900}
                    height={900}
                    priority
                />
                <Carousel.Caption>
                    <h3>Tanatología</h3>
                    <p>
                    Puede ayudarte a encontrar un significado en la muerte y a encontrar consuelo en momentos difíciles.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/mujer-con-ansiedad.jpeg"
                    alt="Mujer con ansiedad"
                    width={900}
                    height={900}
                    priority
                />
                <Carousel.Caption>
                    <h3>Depresión</h3>
                    <p>
                    La terapia puede ayudarte a identificar los factores que contribuyen a tu depresión y a encontrar formas de abordarlos.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
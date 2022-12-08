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
                />
                <Carousel.Caption>
                    <h3>Terapia de Pareja</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/hombre-con-ansiedad.jpeg"
                    alt="Second slide"
                    width={900}
                    height={900}
                />

                <Carousel.Caption>
                    <h3>Terapia Individual</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/abuelos-playa.jpeg"
                    alt="Third slide"
                    width={900}
                    height={900}
                />
                <Carousel.Caption>
                    <h3>Tanatología</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
                />
                <Carousel.Caption>
                    <h3>Depresión</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
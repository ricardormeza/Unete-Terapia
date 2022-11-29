import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import styles from '../../styles/Caruse.module.css'

function UncontrolledExample() {
    return (
        <Carousel className={`sm:relative sm:z-0 ${styles.lineaCarrusel}`}>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/test1.jpg"
                    alt="First slide"
                    width={800}
                    height={800}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/test2.jpg"
                    alt="Second slide"
                    width={800}
                    height={800}
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/test3.jpg"
                    alt="Third slide"
                    width={800}
                    height={800}
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
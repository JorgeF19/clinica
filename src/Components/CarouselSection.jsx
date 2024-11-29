
import { Carousel } from 'react-bootstrap';
import image1 from "../assets/clinica1.jpeg"
import image2 from "../assets/clinica2.jpg"
import image3 from "../assets/clinica3.jpg"
import image4 from "../assets/clinica4.jpeg"
import image5 from "../assets/clinica5.jpg"

const CarouselSection = () => {
    return (
        <div className="carousel-section">
            <Carousel>
                <Carousel.Item>
                <div className="carousel-image-container">
                    <img
                        className="d-block w-100"
                        src={image1}
                    />
                </div>
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-image-container">
                    <img
                        className="d-block w-100"
                        src={image2}
                    />
                </div>
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-image-container">
                    <img
                        className="d-block w-100"
                        src={image3}
                    />
                </div>
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-image-container">
                    <img
                        className="d-block w-100"
                        src={image4}
                    />
                </div>
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-image-container">
                    <img
                        className="d-block w-100"
                        src={image5}
                    />
                </div>
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselSection;
import { Fragment } from "react"
import { Container, Row, Col, Card } from "react-bootstrap";
import CarouselSection from "./CarouselSection"

const Home = () => {
    return (
        <Fragment>
            <main>
                <div className="hero-div navbar-gradient">
                    <h1 className="hero">Bienvenido a nuestra clinica</h1>
                </div>
                <Container className="content-container">
                    <Row>
                        <Col md={6}>
                            <Card className="info-section">
                                <Card.Body>
                                    <Card.Title>Sobre el Centro de salud:</Card.Title>
                                    <Card.Text>
                                    Tu salud es nuestra prioridad. En nuestra clínica, combinamos experiencia, tecnología avanzada y un trato humano para ofrecerte el mejor cuidado posible. Aquí encontrarás un espacio dedicado a tu bienestar, donde cada detalle está pensado para que te sientas en las mejores manos.
                                    </Card.Text>
                                    <Card.Title>Instalaciones:</Card.Title>
                                    <ul>
                                        <li>Consultorios médicos</li>
                                        <li>Sala de tratamiento</li>
                                        <li>Laboratorio clinico</li>
                                        <li>Farmacia</li>
                                        <li>Sala de terapia fisica</li>
                                        <li>Sala de emergencia</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <CarouselSection />
                        </Col>
                    </Row>
                </Container>
            </main>
        </Fragment>
    )
}

export default Home
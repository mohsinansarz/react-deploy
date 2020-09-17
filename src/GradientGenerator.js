import React, { Component } from 'react';
import Header from './Header';
import { Container, Col, Row } from 'react-bootstrap';


class GradientGenerator extends Component {


    render() {
        return (
            <div className="contact">
                <header>
                    <Header />
                </header>
                <main>
                    <Container fluid className="Contact p-0 heights bg-black cCube">
                        <div className="container heights">
                            <Row className="align-items-center justify-content-between heights m-0">
                                <Col lg="12" className="text-center p-0">
                                    <h1>Coming Soon</h1>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </main >
            </div>
        )
    }
}
export default GradientGenerator;
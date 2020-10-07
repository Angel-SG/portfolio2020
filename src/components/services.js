import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import developmentImg from '../images/icons/programming.svg';
import cmsImg from '../images/icons/database.svg';
import optimizationImg from '../images/icons/optimization.svg';
import browserImg from '../images/icons/browser.svg';
import responsiveImg from '../images/icons/internet.svg'

const Services = () => {
    return(
        <div className="services-wrap">
            <h1>What do I do</h1>

            <Container>
                <Row>
                    <Col md={6}>
                        <div className="service-wrap">
                            <img src={developmentImg} alt="Front-end Development" width="100"/>
                            <h2>Front-end Development</h2>
                        </div>
                    </Col>
                        
                    <Col md={6}>
                        <div className="service-wrap">
                            <img src={cmsImg} alt="Web Development" width="100"/>
                            <h2>Gatsby static sites with Headless CMS</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={responsiveImg} alt="Responsive Design" width="100"/>
                        <div className="service-wrap">
                            <h2>Responsive Design</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={optimizationImg} alt="Site optimization" width="100"/>
                        <div className="service-wrap">
                            <h2>Site Optimization and Accessibility</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={browserImg} alt="Front-end Development" width="100"/>
                        <div className="service-wrap">
                            <h2>Cross-browser compatibility</h2>
                        </div>
                    </Col>
                </Row>
               
            </Container>
        </div>
    )
}

export default Services;
import React from "react";
import Typing from 'react-typing-animation';
import { Container, Row, Col } from 'react-grid-system';

const Banner = ({ title }) => (

  <div className="hero-wrap">
    <div className="animated-bg"></div>
    <div className="gradient-overlay"></div>
    <Container className="intro-text-container">
      <Typing speed={60} delay={200} hideCursor={true}>
        <span><h1>{title}</h1></span>
      </Typing>
    </Container>
  </div>

)

export default Banner;
import React from "react"

import { Container, Row, Col } from 'react-grid-system';

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="About" />
      <div className="hero-wrap">
        <div className="animated-bg"></div>
        <div className="gradient-overlay"></div>
        <Container className="intro-text-container">
          <span><h1>Ups! </h1></span>
        </Container>
      </div>
      <Container className="about-wrap">
        <Row>
          <Col md={12} lg={4}>
             <h3>Something went wrong!...</h3>
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default NotFoundPage

import React from "react"

import { Container, Row, Col } from 'react-grid-system'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="About" />
      <div className="hero-wrap">
        <div className="animated-bg"></div>
        <div className="gradient-overlay"></div>
        <Container className="intro-text-container">
          <span><h1>Cheers!</h1></span>
        </Container>
      </div>
      <Container className="about-wrap">
        <Row>
          <Col sm={12} md={12} lg={6}>
             <h2>Thanks for getting in touch. I will answer your query very soon!</h2>
             <Link to="/" className="view-projects" style={{ display:'inline-block', marginRight: '0', marginTop: '80px' }}>Back to Home</Link>
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default Success

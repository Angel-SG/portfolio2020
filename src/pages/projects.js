import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-grid-system'
import ProjectsList from '../components/projectsList'

const projectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="hero-wrap">
      <div className="animated-bg"></div>
      <div className="gradient-overlay"></div>
      <Container className="intro-text-container">
        <span><h1>Projects</h1></span>
      </Container>
    </div>
    <Container className="home-main-wrap">
      <Row>
        <Col md={12} sm={12}>
          <h3>Below you can find examples of some of the projects that I've contributed as a Front-end Developer:</h3>
          <ProjectsList/>
        </Col>
      </Row>
    </Container>
    <Container className="contact-strip-wrap">
      <Row>
        <Col md={12} sm={12}>
          <h3>Would you like to discuss the requirements for your next project? Just get in touch to find out how I can help. 
</h3>
          <Link to="/contact" className="view-projects">Get in touch</Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default projectsPage
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
          <h3>In here some examples of projects that I've contributed as a Front-end Developer. In the last few years I have worked within digital agencies and in-house teams alike.</h3>
          <ProjectsList/>
        </Col>
      </Row>
    </Container>
    <Container className="contact-strip-wrap">
      <Row>
        <Col md={12} sm={12}>
          <h3>I hope you liked my work! Would you like to discuss the requirements of your next project? perhaps,   a site project you need some help with? just get in touch!</h3>
          <Link to="/contact" className="view-projects">Get in touch!</Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default projectsPage
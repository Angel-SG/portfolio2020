import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import Banner from "../components/banner";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Container, Row, Col } from 'react-grid-system';
import ProjectsList from '../components/projectsList';

const ProjectsPage = () => {

  const [addClass, setAddClass] = useState(''); 

  useEffect(() => {
    setAddClass('loaded')
  }, []);
  

  return (
    <Layout>
      <SEO title="Projects" />

      <Banner title="Projects"/>
      
      <Container className={`home-main-wrap content-container ${addClass}`}>
        <Row>
          <Col md={12} sm={12}>
            <ProjectsList/>
          </Col>
        </Row>
      </Container>
      <Container className="contact-strip-wrap">
        <Row>
          <Col md={12} sm={12}>
            <p>Would you like to discuss the requirements for your next project? Just get in touch to find out how I can help. 
            </p>
            <Link to="/contact" className="view-projects">Get in touch</Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
 
}

export default ProjectsPage
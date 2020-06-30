import React, {useEffect, useState, useRef} from "react";
import { Link } from "gatsby";
import Banner from "../components/banner";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Container, Row, Col } from 'react-grid-system';
import ProjectsList from '../components/projectsList';

const ProjectsPage = () => {

  const [addClass, setAddClass] = useState(''); 
  const mainDiv = useRef();

  useEffect(() => {
    setAddClass('loaded')
  }, []);

  return (
    <Layout>
      <SEO title="Projects" />

      <Banner title="Projects"/>
      
      <Container className={`home-main-wrap content-container ${addClass}`} ref={mainDiv}>
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
 
}

export default ProjectsPage
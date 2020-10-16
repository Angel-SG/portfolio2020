import React, {useEffect} from "react";
import { Link } from "gatsby";
import Banner from "../components/banner";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Container, Row, Col } from 'react-grid-system';
import ProjectsList from '../components/projectsList';

const ProjectsPage = (props) => {

  useEffect(() => {
    window.pageExitTime = 1000
  }, []);

  // console.log(props);
  

  return (
    <Layout>
      <SEO title="Projects" />

      <Banner title="Projects"/>
      
      <Container className={`home-main-wrap content-container ${props.status}`}>
        <Row>
          <Col md={12} sm={12}>
            {/* <p>Below you can find examples of some of the projects that I've contributed as a Front-end Developer:</p> */}
            <ProjectsList props={props}/>
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
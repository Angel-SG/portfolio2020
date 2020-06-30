import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import Banner from "../components/banner";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from 'react-grid-system';

import '../styles/app.scss'

const IndexPage = () => {

  const mainDiv = useRef();

  const [addClass, setAddClass] = useState(''); 

  useEffect(() => {
    setAddClass('loaded')
  }, []);

  
  return (
    <div>
      <Layout>
        <SEO title="Angel Sanchez | Front-end Developer"/>

        <Banner title="Hello!"/>

        <Container className={`home-main-wrap content-container ${addClass}`} ref={mainDiv}>
          <Row align="stretch" style={{ height: '100%' }}>
            <Col md={12} sm={12}>
              <h2>I'm Angel, a passionate Front-end Developer who can interpret customer requirements, provide solutions and get things done. </h2>
              <h3>Are you looking for someone to help with your projects? You landed on the perfect site! <span role="img" aria-label="emoji">&#128522;</span></h3>

              <div>
                <Link to="/projects" className="view-projects">View my Work</Link>
                <Link to="/about" className="view-projects">More about me</Link>
              </div>

            </Col>
          </Row>
        </Container>

      </Layout>
    </div>  
  )

}

export default IndexPage
 
import React, { useEffect } from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import Services from "../components/services";
import SEO from "../components/seo";
import { Container, Row, Col } from 'react-grid-system';

import '../styles/app.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../node_modules/nprogress/nprogress.css";

import Reviews from "../components/reviews";


const IndexPage = (props) => {

  useEffect(() => {
    
    window.pageExitTime = 1000
    
  }, []);

  // console.log(props);

  return (
    
    <div className="services-wrap">
      <Layout>
        <SEO title="Angel Sanchez | Front-end Developer"/>
    
            <Banner title="Hello!"/>
            <Container className={`home-main-wrap content-container ${props.status}`}>
              
              <Row align="stretch" style={{ height: '100%' }}>
                <Col md={12} sm={12}>
                  <h2>I'm Angel, a passionate Front-end Developer who can interpret customer requirements, provide solutions, and get things done. </h2>
                  
                  <h3>With over four years of experience within the industry, I participated in a wide range of web projects where I had the opportunity to learn, share, improve, and most importantly, deliver an excellent user experience that helped companies and teams to achieve their goals.</h3>
                </Col>
              </Row>
            </Container>

            <Container className={`content-container ${props.status}`}>
              <Services />
            </Container>

            <Container className={`content-container ${props.status}`}>
              <Reviews />
            </Container>
        
      </Layout>
    </div>  
  )

}

export default IndexPage;
 
import React, {useEffect, useState, useRef} from "react";
import { Link } from "gatsby"
import Banner from "../components/banner";

import Layout from "../components/layout"
import SEO from "../components/seo"
import profileImage from "../images/me.jpg"

import { Container, Row, Col } from 'react-grid-system';
// import Typing from 'react-typing-animation';

const AboutPage = () => {

  const [addClass, setAddClass] = useState(''); 
  const mainDiv = useRef();

  useEffect(() => {
    setAddClass('loaded')
  }, []);


  return (
    <Layout>
      <SEO title="About"/>

        <Banner title="About" />

        <Container className={`about-wrap content-container ${addClass}`} ref={mainDiv}>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <div className="profile-wrap">
                <img className="profile-image" src={profileImage} alt="profile" />
                <div className="social-container">
                  <Row justify="center">
                    <Col md={10}>
                      <p><i className="fas fa-user-circle"></i>Front-end Developer</p>
                      <p><i className="fas fa-map-marker-alt"></i>Brighton, England.</p>
                      {/* <p><i className="fas fa-share"></i>Social</p> */}
                      <ul>
                        <li><a href="https://github.com/Angel-SG" target="_blank" rel="noopener noreferrer" title="github"><i className="fab fa-github-alt"></i></a></li>
                        {/* <li><a href="www.google.com" target="_blank" title="codepen"><i className="fab fa-codepen"></i></a></li> */}
                        <li><a href="https://www.linkedin.com/in/angel-sg/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
                      </ul>
                      <Link to="/contact" className="view-projects" style={{ display:'block', marginRight: '0' }}>Get in touch!</Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={8}>
              <div className="about-main-copy">
                {/* <div className="copy-section">
                  <h2>About Me</h2>
                  <p>I'm a self-taught Front-end developer who cares about design, user journey and site optimization. I'm specialized in building responsive, engaging pages that are not only pixel perfect but also are accordingly aligned with WC3 best practices.  In the last few years, I had the opportunity to work with both digital agencies and in-house teams alike.</p>
                  <p>When I'm not coding or working in some exciting project you can find me in the pub enjoying some beers with my mates, watching tv serials or walking along the sea with my lovely little family.</p>
                </div> */}
                <div className="copy-section">
                  <h2>Skills & Expertise</h2>
                  <h3>Front-end Development</h3>
                  <p>I'm specialised in bringing designs and mock-ups to fully functioning web pages by using technologies like HTML, CSS and javaScript. I also have experience coding with React.js and building fast and reliable UI's. When it comes to CMS's I have worked with Drupal and Contentful. </p>
                  <h3>Responsive Design</h3>
                  <p>Responsive web designs which will be multi-device compatible to give users high-quality browsing experience and user journey.</p>
                  <h3>Site optimization</h3>
                  <p>With the help of tools like Google Lighthouse and GTMetrics, I can have an insight into how websites perform on the web. Then by tacking this information into consideration, I apply the required changes to achieve the best possible performance.</p>
                  <h3>Marketing</h3>
                  <p>I have participated in several marketing campaigns by coding both HTML email templates and landing pages. I'm familiar with email services and frameworks like Foundation for emails, Mailchimp, Pure360 and testing tools like EOA or Litmus. </p>
                  <h3>Cross-browser compatibility </h3>
                  <p>All developed web pages are completely tested to ensure compatibility with different web browsers including Firefox, Google Chrome, Safari and different versions of Internet Explorer.</p>
                  
                </div>
            </div>
            </Col>
          </Row>
        </Container>
    </Layout>
  )
}
  

export default AboutPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import profileImage from "../images/me.jpg"

import { Container, Row, Col } from 'react-grid-system';
// import Typing from 'react-typing-animation';

const aboutPage = () => (
  <Layout>
    <SEO title="About" description="Welcome to my personal portfolio"/>
      <div className="hero-wrap">
        <div className="animated-bg"></div>
        <div className="gradient-overlay"></div>
        <Container className="intro-text-container">
          <span><h1>About</h1></span>
        </Container>
      </div>
      <Container className="about-wrap">
        <Row>
          <Col sm={12} md={4}>
            <div className="profile-wrap">
              <img className="profile-image" src={profileImage} alt="profile" />
              <div className="social-container">
                <Row justify="center">
                  <Col md={10}>
                    <p><i className="fas fa-user-circle"></i>Front-end Developer</p>
                    <p><i className="fas fa-map-marker-alt"></i>Brighton, England.</p>
                    {/* <p><i className="fas fa-share"></i>Social</p> */}
                    <ul>
                      <li><a href="www.google.com" title="github"><i className="fab fa-github-alt"></i></a></li>
                      <li><a href="www.google.com" title="codepen"><i className="fab fa-codepen"></i></a></li>
                      <li><a href="www.google.com" title="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                    <Link to="/contact" className="view-projects" style={{ display:'block', marginRight: '0' }}>Get in touch!</Link>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <div className="about-main-copy">
              <div className="copy-section">
                <h2>About Me</h2>
                <p>I'm a self-taught Front-end developer who cares about design, user journey and site optimization. I'm specialized in building responsive, engaging pages and component-based design systems that are not only pixel perfect but also, it's accordingly aligned with WC3 best practices.  In the last few years, I've been working for digital agencies and in-house development teams alike.</p>
                <p>When I'm not coding or working in some exciting project you can find me in the pub enjoying some beers with my mates, watching tv serials or walking along the sea with my lovely little family.</p>
              </div>
              <div className="copy-section">
                <h2>Skills & Expertise</h2>
                <h3>Front-end Development</h3>
                <p>I'm specialized in bringing designs and mock-ups to fully functioning web pages by using HTML, CSS and javaScript. I also have experience working in CMS like Drupal or contentful. For small brochure sites, my favourite go-to tools are Gatsby.js and contentful CMS. </p>
                <h3>Responsive Design</h3>
                <p>Responsive web designs which will be multi-device compatible to give customers high-quality browsing experience and user journey.</p>
                <h3>Site optimization</h3>
                <p>I use google lighthouse and GTMetrics to analyze how websites perform on the web. By taking into consideration those insights I then apply the required fixes to achieve the best possible results. </p>
                <h3>Marketing</h3>
                <p>I have participated in several marketing campaigns by coding both HTML email templates and landing pages. I'm familiar with email services and frameworks like Foundation for emails, Mailchimp, Pure360 and testing tools like EOA or Litmus. </p>
                <h3>Cross-browser compatibility </h3>
                <p>All coded web pages are completely tested to assure compatibility with different web browsers including Firefox, Google Chrome, Safari and different versions of Internet Explorer.</p>
                
              </div>
           </div>
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default aboutPage

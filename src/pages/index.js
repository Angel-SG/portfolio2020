import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import Typing from 'react-typing-animation';
// import '../styles/app.scss'

class IndexPage extends React.Component {
  
  renderButton = () => {
    return (
      <div>
        <Link to="/projects" className="view-projects">View my Work</Link>
        <Link to="/about" className="view-projects">More about me</Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Layout>
        <SEO title="Home" />
        <div className="hero-wrap">
          <div className="animated-bg"></div>
          <div className="gradient-overlay"></div>
          <Container className="intro-text-container">
            <span><h1>Hello!</h1></span>
          </Container>
          </div>
          <Container className="home-main-wrap">
            <Row>
              <Col md={12} sm={12}>
                <Typing speed={30} delay={0} onFinishedTyping={() => {this.renderButton()}}>
                  <span>
                    <h2>I'm Angel, a passionate Front-end Developer who can interpret customer requirements, provide solutions and get things done. </h2>
                  </span>
                  <span>
                  <h3>Are you looking for someone to help with your projects? You landed in the perfect site! <span role="img" aria-label="emoji">&#128522;</span></h3>
                  <Typing.Delay ms={1000} />
                  {this.renderButton()}
                  </span>
                </Typing>
              </Col>
            </Row>
          </Container>
      </Layout>

      </div>
    
    )
      
    
  }
} 


export default IndexPage
 
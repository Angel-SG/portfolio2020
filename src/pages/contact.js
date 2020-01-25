import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from 'react-grid-system';

const contactPage = () => (
  <Layout>
    <SEO title="Contact" />
      <div className="hero-wrap">
        <div className="animated-bg"></div>
        <div className="gradient-overlay"></div>
        <Container className="intro-text-container">
          <span><h1>Contact</h1></span>
        </Container>
      </div>
      <div className="form-wrap">
        <Container>
          <h3>If you have made it this far, I'm sure you have something interesting to tell me! Complete the form below and will get in touch in no time.</h3>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="name">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" />
            </div>
            <div className="actions">
             
                <input type="submit" value="Send Message"  className="view-projects"/>
            
            
            </div>
          </form>
        </Container> 
      </div>
  
  </Layout>
)

export default contactPage
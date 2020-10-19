import React, {useEffect, useState, useRef} from "react";
import Banner from "../components/banner";

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from 'react-grid-system';

const ContactPage = () => {

  const [addClass, setAddClass] = useState(''); 
  const mainDiv = useRef();

  useEffect(() => {
    setAddClass('loaded')
  }, []);

  return (
    <Layout>
      <SEO title="Contact" />

        <Banner title="Contact" />

        <div>
          <Container className={`form-wrap content-container ${addClass}`} ref={mainDiv}>
            <h3>If you have made it this far, I'm sure you have something interesting to tell me! Complete the form below and I'll get back to you in no time.</h3>
            <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />

              <div className="name">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"  required/>
              </div>
              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" />
              </div>
              <div className="actions">
                <input type="submit" value="Submit"  className="view-projects" required/>
              </div>
            </form>
          </Container> 
        </div>
    </Layout>
  )
}

export default ContactPage
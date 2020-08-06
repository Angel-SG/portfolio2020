import React, {useEffect, useState, useRef} from "react";
import Banner from "../components/banner";

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from 'react-grid-system';
import { Link } from "gatsby"

const BlogPost = ({ location }) => {

  const [addClass, setAddClass] = useState(''); 
  
  const mainDiv = useRef();


  useEffect(() => {
    setAddClass('loaded')
  
  }, []);

  console.log(location);

  return (
    <Layout>
      <SEO title="Blog Post" />

        <Banner title={location.state.heading} />

        <div>
          <Container className={`form-wrap content-container ${addClass}`}>
            

            <h2>{location.state.heading}</h2>
            <p>{location.state.bodyCopy}</p>
 
           
                 
          </Container> 
        </div>
    </Layout>
  )
}

export default BlogPost;
import React, {useEffect, useState, useRef} from "react";
import Banner from "../components/banner";

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from 'react-grid-system';
import { Link } from "gatsby"

const BlogPage = ({ data }) => {

  const [addClass, setAddClass] = useState(''); 
  const mainDiv = useRef();

  console.log(data.allContentfulBlogPost.nodes);


  useEffect(() => {
    setAddClass('loaded')
    
  }, []);

  return (
    <Layout>
      <SEO title="Blog" />

        <Banner title="Blog" />

        <div>
          <Container className={`form-wrap content-container ${addClass}`} ref={mainDiv} >
             
              {data.allContentfulBlogPost.nodes.map(item =>(
                  <Link to={`/blog-post/${item.slug}`} state={{ slug: item.slug, heading: item.heading, bodyCopy: item.bodyCopy.bodyCopy }}>

                    <p key={`index-heading-` + 1}>{item.heading}</p>
                    <p key={`index-copy-` + 1}>{item.bodyCopy.bodyCopy}</p>

                  </Link>
              ))} 
          </Container> 
        </div>
    </Layout>
  )
}


export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        bodyCopy {
          bodyCopy
        }
        heading
        slug
      }
    }
  }
`

export default BlogPage






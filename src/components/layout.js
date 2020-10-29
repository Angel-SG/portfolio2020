
import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import MobileMenu from '../components/mobileMenu'
import Header from "./header"



class Layout extends React.Component {

  render() {

    const { children, data } = this.props;
  
    return (
      <>
  
        <MobileMenu menuLinks={data.nodes[0].siteMetadata.menuLinks} />
        <Header siteTitle={data.nodes[0].siteMetadata.title} menuLinks={data.nodes[0].siteMetadata.menuLinks}/>
          
        <div className="layout-wrap">
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with <i className="fas fa-heart"></i> by <span>AngelSG</span>
          </footer>
        </div>
       
      </>
    )

  }
}


export default props => (
  <StaticQuery
    query={graphql`
      query {
        allSite {
          nodes {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
        allDataJson {
          nodes {
            projects {
              id
              image {
                src {
                  absolutePath
                }
              }
              title
              tasks
              skills
              modalURL
            }
          }
        }
      }
    `}
    render={({ allSite, allDataJson }) => <Layout data={allSite} projects={allDataJson} {...props} />}
  />
)




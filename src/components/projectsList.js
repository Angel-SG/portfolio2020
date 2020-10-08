import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import { Row, Col } from 'react-grid-system'



const ProjectsList = ({ props, projects }) => {
   
    return(
      <div>
        <Row>
          {projects.map(item =>(
      
            <Col md={6} key={item.id}>
              <div className="project-card">
                <Link to={`/projects/${item.slug}`} className="project-img-wrap">
                  <img src={item.image.src.publicURL} alt="projectss" />
                </Link>
                <div className="project-text-wrap">
                  <span className="project-title"><p>{item.title}</p></span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
       
      </div>
    )
}


export default props => (
  <StaticQuery
    query={graphql`
      query {
        dataJson {
          projects {
            id
            title
            skills
            tasks
            modalURL
            description
            slug
            image {
              src {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={({ dataJson }) => <ProjectsList projects={dataJson.projects} {...props} />}
  />
)



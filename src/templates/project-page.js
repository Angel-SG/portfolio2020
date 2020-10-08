import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import Layout from "../components/layout"



const ProjectPage = ({ props }) => {

    console.log(props);

    return (
      <Layout>
        <Container className="project-page-container">

          <Row>
            <Col className="">
              <div className="project-wrap">
                <Link to="/projects" className="back-button">Back to Projects</Link>
                <h1>{props.pageContext.title}</h1>
          
                <h2>{props.pageContext.description}</h2>

                <div className="skills-container">
                  <ul>
                    <h3>Technologies</h3>
                    {props.pageContext.skills.map((item, i) => {
                      return <li key={`${i}-technologies`}>{item}</li>
                    })}

                  </ul>
                  <ul>
                    <h3>Successfully completed tasks</h3>
                    {props.pageContext.tasks.map((item, i) => {
                      return <li key={`${i}-skills`}>{item}</li>
                    })}
                  </ul>
                </div>

                <div className="project-img-wrap">
                

                  <img src={props.pageContext.image} alt={props.pageContext.title} />

                  <a className="view-projects" href={props.pageContext.modalURL}>Visit Site!</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    ) 
}


export default props => (
    <StaticQuery
      query={graphql`
        query {
            sitePage {
                context {
                  description
                  id
                  image
                  modalURL
                  skills
                  slug
                  tasks
                  title
                }
              }
        }
      `}
      render={({ sitePage }) => <ProjectPage props={props} />}
    />
)



import React from 'react';
import { StaticQuery, graphql } from 'gatsby'


const ProjectPage = ({ props }) => {

    console.log(props);

    return (
      <>
        <h1>{props.pageContext.slug}</h1>
        <h2>{props.pageContext.description}</h2>
        
        <ul>
          <h3>Skills</h3>
          {props.pageContext.skills.map( item => {
            return <li>{item}</li>
          })}

        </ul>
        <ul>
          <h3>Requirements</h3>
          {props.pageContext.tasks.map( item => {
            return <li>{item}</li>
          })}
        </ul>

        <a href={props.pageContext.modalURL} style={{'display': 'block'}}><button>Visit Site!</button></a>

        <img src={props.pageContext.image} />
       
      </>
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



import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { StaticQuery, graphql, Link } from 'gatsby'


const Reviews = ({ reviews, props }) => {

    
    
    console.log(reviews[1].reviews);

    return(
        <div>
            <h1>What my clients say</h1>
            {/* {reviews[1].reviews.map(item => {
                return <div>{item.description}</div>
            })} */}
        </div>
    )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson {
            nodes {
              reviews {
                description
                id
                name
                title
              }
            }
          }
      }
    `}
    render={({ allDataJson }) => <Reviews reviews={allDataJson.nodes} {...props} />}
  />
)
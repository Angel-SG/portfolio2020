/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query MyQuery {
            dataJson {
                projects {
                  description
                  id
                  image {
                    src {
                      publicURL
                    }
                  }
                  modalURL
                  skills
                  tasks
                  title
                  slug
                }
              }
        }
    `)

    // console.log(result.data.dataJson.projects);

    const projectsArray = result.data.dataJson.projects;

    // console.log(projectsArray);

    // projectsArray.forEach(({item}) =>{
    //     console.log(item);
    // })

   

    const path = require('path')

    projectsArray.map( project => {
        createPage({
          path: `/projects/${project.slug}`,
          component: path.resolve(`./src/templates/project-page.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: project.slug,
            id: project.id,
            description: project.description,
            image: project.image.src.publicURL,
            modalURL: project.modalURL,
            skills: project.skills,
            tasks: project.tasks,
            title: project.title
          },
        })
      })
}




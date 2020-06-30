import React, { useState } from "react"
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import Modal from 'react-responsive-modal'



const ProjectsList = ({ props, projects }) => {
 
  const [modal, setModal] = useState({
    open: false,
    modalImage: '',
    modalTitle: '',
    modalSkills: [],
    modalTasks: [],
    modalURL: '',
    modalDescription: '',
    ...props
  });

  const onOpenModal = (image, title, skills, tasks, url, description) => {
    setModal({ open: true, modalImage: image, modalTitle: title, modalSkills: skills, modalTasks: tasks, modalURL: url, modalDescription: description });
  };
 
  const onCloseModal = () => {
    setModal({ open: false, modalImage: '', modalTitle: '', modalSkills: [], modalTasks: [], modalURL: '', modalDescription: '', });
  };

  const { open, modalImage, modalTitle, modalSkills, modalTasks, modalURL, modalDescription } = modal;

    
    return(
      <div>
        <Row>
          {projects.map(item =>(
      
            <Col md={6} key={item.id}>
              <div className="project-card">
                <div className="project-img-wrap">
                <img src={item.image.src.publicURL} alt="projectss" onClick={() => onOpenModal(item.image.src.publicURL, item.title, item.skills, item.tasks, item.modalURL, item.description )} />
                </div>
                <div className="project-text-wrap">
                <span className="project-title"><p>{item.title}</p></span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Modal open={open} onClose={() => onCloseModal()} center>
          <div>
            <Container className="project-container"> 
              <h3 className="project-title">{modalTitle}</h3>
              <p>{modalDescription}</p>
              <Row>
                <Col md={6}>
                  <p className="project-label">Actioned</p>
                  <ul>
                    {modalTasks.map(task =>(
                      <li key={task} className="task">{task}</li>
                    ))}
                  </ul>
                </Col>
                <Col md={6}>
                  <p className="project-label">Technologies</p>
                  <div>
                    <ul className="skills-container">
                      {modalSkills.map(skill =>(
                        <li key={skill} className="skill">{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <a rel="noopener noreferrer" className="view-projects" href={modalURL} target="_blank">Visit Site</a>
                </Col>
              </Row>
            </Container>
            <div className="arrow-container">
            <svg className="arrows" width="30" viewBox="0 0 100 100">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
            </div>
            <img className="modal-img" src={modalImage} alt="projects" />
          </div>
        </Modal>
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



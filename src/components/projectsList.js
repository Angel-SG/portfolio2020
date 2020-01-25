import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import Modal from 'react-responsive-modal'



class ProjectsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      open: false,
      modalImage: '',
      modalTitle: '',
      modalSkills: [],
      modalTasks: [],
      modalURL: '',
      modalDescription: '',
      ...props
    }
  }
 ;
  onOpenModal = (image, title, skills, tasks, url, description) => {
    this.setState({ open: true, modalImage: image, modalTitle: title, modalSkills: skills, modalTasks: tasks, modalURL: url, modalDescription: description });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {

    const projects = this.props;
    const { open, modalImage, modalTitle, modalSkills, modalTasks, modalURL, modalDescription } = this.state;
   
    return(
      <div>
        <Row>
          {projects.projects.map(item =>(
      
            <Col md={6} key={item.id}>
              <div className="project-card">
                <div className="project-img-wrap">
                <img src={item.image.src.publicURL} alt="projectss" onClick={() => this.onOpenModal(item.image.src.publicURL, item.title, item.skills, item.tasks, item.modalURL, item.description )} />
                </div>
                <div className="project-text-wrap">
                <span className="project-title"><p>{item.title}</p></span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Modal open={open} onClose={() => this.onCloseModal()} center>
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
    );
  }
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



import React, { useState } from 'react';
import ProjectModal from '../../components/Project/ProjectModal';
import 'react-responsive-modal/styles.css';
import projects from '../../projects.json';


function WorkCard  (props)  {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [currentProject, setCurrentProject] = useState();
  
  const [projectList] = useState(projects);

  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <ProjectModal onClose={toggleModal} currentProject={currentProject} />}
      <div className="col-md-6 col-lg-4 mb-5" id="project-list">
        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            {projectList.map((project, i) => (
              <img
                src={project.image}
                alt={project.name}
                className="img-thumbnail mx-1"
                onClick={() => toggleModal(project, i)}
                key={project.name}
              />
            ))}
          </div>
          <button className="button" onClick={() => setIsModalOpen(true)}>
            Open Project
          </button>
        </div>
      </div>
    </div>
  
  )}
  

export default WorkCard;
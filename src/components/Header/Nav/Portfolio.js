import React, {useState} from "react";
import ProjectCard from '../../Project';
import projects from '../../../projects.json';
import Wrapper from "../../Project/ProjectsWrapper";
import Modal from '../../Project/ProjectModal'

function Project(props) {
  const [projectList] = useState(projects);
    return (
      <>
<Wrapper>
        <Modal />
          {projectList.map(project => (
          <ProjectCard 
          id = {project.id}
          name = {project.name}
          deployed = {project.deployed}
          image = {project.image}
          repo = {project.repo} 
          text = {props.text}
          key = {project.id} 
          />
        ))}
</Wrapper>
      </>
    );
  }

export default Project;
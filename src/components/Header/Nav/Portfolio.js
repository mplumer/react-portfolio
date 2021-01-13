import React, {useState} from "react";
import ProjectCard from '../../Project';
import projects from '../../../projects.json';
import Container from "../../Project/ProjectContainer";

function Project(props) {
  const [projectList] = useState(projects);
    return (
      <>
<Container>
          {projectList.map(project => (
          <ProjectCard 
          id = {project.id}
          name = {project.name}
          deployed = {project.deployed}
          image = {project.image}
          repo = {project.repo} 
          key = {project.id} 
          />
        ))}
</Container>
      </>
    );
  }

export default Project;
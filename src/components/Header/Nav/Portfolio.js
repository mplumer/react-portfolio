import React, {useState} from "react";
import ProjectCard from '../../Project';
import projects from '../../../projects.json';
import Container from "../../Project/ProjectsWrapper";

function Work(props) {
  const [projectList] = useState(projects);
    return (
      <>
<Container>
          {projectList.map(work => (
          <ProjectCard 
          id = {work.id}
          name = {work.name}
          deployed = {work.deployed}
          image = {work.image}
          repo = {work.repo} 
          key = {work.id} 
          />
        ))}
</Container>
      </>
    );
  }

export default Work;
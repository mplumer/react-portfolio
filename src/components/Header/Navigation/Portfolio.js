import React, {useState} from "react";
import WorkCard from '../../Project';
import works from '../../../works.json';
import Wrapper from "../../Project/ProjectsWrapper";

function Work(props) {
  const [worksList] = useState(works);
    return (
      <>
<Wrapper>
          {worksList.map(work => (
          <WorkCard 
          id = {work.id}
          name = {work.name}
          deployed = {work.deployed}
          image = {work.image}
          repo = {work.repo} 
          key = {work.id} 
          />
        ))}
</Wrapper>
      </>
    );
  }

export default Work;
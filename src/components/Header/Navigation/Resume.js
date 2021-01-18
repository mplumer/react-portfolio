import React from "react";
import resume from "../../../assets/documents/Resume-Maxwell-Plumer.pdf";

const Resume = () => {

  return (
<>
<section  className="resume-wrapper">
        <div>
        <h3 className="resume h3">Full-Stack Skill Summary</h3>
          <ul>
            <strong>Front-end Proficiencies</strong>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Mobile-responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <br></br>
          <ul>
            <strong>Back-end Proficiencies</strong>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
          </ul>
          <p className="resume">View/download complete <a href={resume}>resume PDF</a></p>
        </div>
</section>
</>
  );
};

export default Resume;

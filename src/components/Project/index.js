import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";


function ProjectCard(props) {
  return (
        /* Portfolio Item 1*/
        <div className="card col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" onClick={() => window.location.assign(`${props.deployed}`)} href={props.deployed}>
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white app-name"><i className="fas fa-plus fa-3x" />{props.name}</div>
            </div>
            <div className="img-container">
            <a href={props.deployed}>
            <img className="img-fluid" src={props.image} alt={props.name} />
            </a>
            </div>
          </div>
          <div
            className="list-group-item" href={props.repo}>
            <a className="github social-card" href={props.repo}>
              <FontAwesomeIcon icon={faGithub} size="2x" /> 
            </a>
          </div>
        </div>
  )}  

export default ProjectCard;
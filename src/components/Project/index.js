import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";


function WorkCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <a href={props.deployed}>
          <img className="card-img-top" alt={props.name} src={props.image} />
        </a>
      </div>
      <div className="content">
        <ul className="list-group list-group-flush">
          <li
            className="deployed list-group-item"
            onClick={() => window.location.assign(`${props.deployed}`)} href={props.deployed}
          >
            <div className="app-name">{props.name}</div>
          </li>

          <li
            className="list-group-item" href={props.repo}>
            <a className="github social-card" href={props.repo}>
              <FontAwesomeIcon icon={faGithub} size="2x" /> 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkCard;

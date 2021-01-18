import React, {useState} from 'react';
import 'react-responsive-modal/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import WorkCard from '../index'

function ProjectModal  (props)  {
   
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    return (
        <>
        <div>
          <modal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            center
            container={WorkCard}
            className="portfolio-modal"
          >
            <div className="modal-body text-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                            {/* Portfolio Modal - Title*/}
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">{props.name}</h2>
                            {/* Icon Divider*/}
                            <div className="divider-custom">
                                <div className="divider-custom-line" />
                                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                <div className="divider-custom-line" />
                            </div>
                            {/* Portfolio Modal - Image*/}
                            <a href={props.deployed}>
                            <img className="img-fluid rounded mb-5" src={props.image} alt={props.name} />
                            </a>
                            {/* Portfolio Modal - Text*/}
                            <p className="mb-5">{props.text}</p>
                            </div>
                            <button className="btn btn-primary" onClick={() => window.location.assign(`${props.deployed}`)} href={props.deployed}>
                                <a className="github social-card" href={props.repo}>
                                <FontAwesomeIcon icon={faGithub} size="1x" /> 
                                </a>
                            </button>
                        </div>
                    </div>
                </div>      
          </modal>
          </div>
        </>
      );
    };

    
    

export default ProjectModal;
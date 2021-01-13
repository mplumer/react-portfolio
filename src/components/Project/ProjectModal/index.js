import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";


function ProjectModal(props) {
    return (
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i className="fas fa-times" /></span>
                </button>
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
                            <button className="btn btn-primary" onClick={() => window.location.assign(`${props.deployed}`)} href={props.deployed}>
                                <a className="github social-card" href={props.repo}>
                                <FontAwesomeIcon icon={faGithub} size="1x" /> 
                                </a>
                            </button>
                            <button className="btn btn-primary" data-dismiss="modal">
                                <i className="fas fa-times fa-fw" />
                                Close Window
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )}  

export default ProjectModal;

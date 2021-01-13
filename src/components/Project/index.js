import React from 'react';



function ProjectCard(props) {
  return (
    <div class="card col-md-6 col-lg-4 mb-5">
    <div className="portfolio-item mx-auto" onClick={() => window.location.assign(`${props.deployed}`)} href={props.deployed} data-toggle="modal" data-target={props.deployed} >
        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
        </div>
        <a href={props.deployed}>
        <img className="img-fluid" src={props.image} alt={props.name} />
        </a>
    </div>
</div>

  )}  

  

export default ProjectCard;
import React from 'react';
import resume from "../../../assets/documents/Resume-Maxwell-Plumer.pdf";

function About () {

    return (
      <>
        <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          {/* About Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
          {/* Icon Divider*/}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
            <div className="divider-custom-line" />
          </div>
          {/* About Section Content*/}
          <div className="row">
            <div className="col-lg-4 ml-auto"><p className="lead">I'm Max</p></div>
            <div className="col-lg-4 mr-auto"><p className="lead">Hire Me!</p></div>
          </div>
          {/* About Section Button*/}
          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href={resume}>
              <i className="fas fa-download mr-2" />
              Download My CV
            </a>
          </div>
        </div>
      </section>
    </>
    )
  }
  
  export default About
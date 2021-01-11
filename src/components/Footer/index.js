import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons"; 

export default function Social() {
  return (
<div>
  {/* Footer*/}
  <footer className="footer text-center">
    <div className="container">
      <div className="row">
        {/* Footer Location*/}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">Location</h4>
          <p className="lead mb-0">
            Lake Wales, FL
          </p>
        </div>
        {/* Footer Social Icons*/}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">Around the Web</h4>
          <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/mplumer" className="fab fa-fw"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://linkedin.com/in/maxplumer"  className="fab fa-fw"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/mplumer12" className="fab fa-fw"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        </div>
        {/* Copyright Section*/}
        <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright Max Plumer 2021</small></div>
        </div>
    </div>
    </div>
  </footer>
</div>
 );
}

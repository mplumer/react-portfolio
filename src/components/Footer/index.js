import React from "react";

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
          <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/mplumer" ><i className="fab fa-fw fa-github"></i></a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://linkedin.com/in/maxplumer" ><i className="fab fa-fw fa-linkedin-in"></i></a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/mplumer12"><i className="fab fa-fw fa-twitter"></i></a>
        </div>
        {/* Copyright Section*/}
        <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright Max Plumer 2021</small></div>
        </div>
        {/* Scroll to Top Button (Only visible on small and extra-small screen sizes)*/}
        <div className="scroll-to-top d-lg-none position-fixed">
          <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up" /></a>
        </div>
    </div>
    </div>
  </footer>
</div>
 );
}

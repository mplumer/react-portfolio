import React from "react";

function Container(props) {
  return (
    <section className="page-section portfolio" id="portfolio">
    <div className="container card">
      {/* Portfolio Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">My Work</h2>
      {/* Icon Divider*/}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* Portfolio Grid Items*/} 
    <div className="wrapper">{props.children}</div>
    <div className="row justify-content-center"></div>
    </div>
    </section>
  )}

export default Container;
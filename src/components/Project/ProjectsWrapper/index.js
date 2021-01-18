import React from "react";

function Wrapper(props) {
  return (
    <section className="page-section portfolio" id="portfolio">
    <div className="container card">
      {/* Portfolio Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Check Out My Work!</h2>
      {/* Icon Divider*/}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* Portfolio Grid Items*/} 
    <div className="wrapper row justify-content-center">{props.children}</div>
    </div>
    </section>
  )}


export default Wrapper;
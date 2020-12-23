import React from "react";
import "../../../public/js/scripts.js";

function Nav() {

    const handleClick = () => {
        console.log("click handled")
    }

    return (
        <Nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="/">Max Plumer</a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about" onClick={() => handleClick()}>
                            About me
            </a></li>
                        <li className="nav-item mx-0 mx-lg-1"><span className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => handleClick()}>Portfolio</span></li>
                        <li className="nav-item mx-0 mx-lg-1"><span className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => handleClick()}>Contact</span></li>
                    </ul>
                </div>
            </div>
        </Nav>

    );
}

export default Nav;



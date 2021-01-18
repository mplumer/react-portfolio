import React from 'react';
import SmallImage from "../../assets/img/portfolio/small-image.jpg";
//import resume from '../../assets/documents/Resume-Maxwell-Plumer.pdf';



function Header (props) {
  const tabs = ['About', 'Portfolio', 'Resume', 'Contact' ];
  return (
    <>
    
    <nav className=" navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div className='container'>
        <a href="#home" className='navbar-brand '>
            <img
                alt="Max"
                src={SmallImage}
                width="40"
                height="40"
                className="d-inline-block align-top"
                />{' '}
            Maxwell Plumer
        </a>
        <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    See More
            <i className="fas fa-bars"></i>
        </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto" id='page-list'>
                    {tabs.map(tab => (
                        <li className="nav-item mx-0 mx-lg-1">
                            <a 
                            className='nav-link py-3 px-0 px-lg-3 rounded' 
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            >   
                            {tab}
                            </a>
                        </li>
                    ))}
                    </ul>
            </div>
    </div>
    </nav>

    <br />
    
    
    

    
    </>

)
}

export default Header;
import React from 'react';

function Header(props) {
  const tabs = ['About', 'Portfolio', 'Resume', 'Contact' ];
  return (
<>
  <nav className="navbar navbar-dark bg-dark sticky-top">
  <span className="navbar-brand mb-0 h1"><h1 className="header pb-0 mb-0">Maxwell Plumer</h1><small className="text-muted ml-1">Full-Stack Web Developer</small></span>
        <ul id="page-list" className="nav">
          {tabs.map(tab => (
            <li className="nav-item" key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
  </nav>
</>
  );
}

export default Header;
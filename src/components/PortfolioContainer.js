import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    
    switch (currentPage) {
      case 'About':
       return <About></About>
      case 'Gallery':
        return <Gallery></Gallery>
      case 'Contact':
        return <Contact></Contact>
      default: 
      return <Home></Home>
    }
  }
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage({currentPage})
        }
      </div>
    </div>
  );
}

export default Portfolio;

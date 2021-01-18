import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/Header/Navigation/About";
import Portfolio from "./components/Header/Navigation/Portfolio";
import Resume from "./components/Header/Navigation/Resume";
import ContactForm from "./components/Header/Navigation/Contact";
import Social from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = (currentPage) => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <ContactForm />;
      default:
        return <About />;
    }
  };

  return (
    <> 
      <main className="main">
        <Header
         currentPage={currentPage}
         handlePageChange={handlePageChange}
        />      
        <div className="main-content">{renderPage(currentPage)}</div>
      </main>
      <footer className="footer">
        <Social />
      </footer>

    </>
  );
}

export default App;
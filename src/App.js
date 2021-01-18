import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/Header/Navigation/About";
import Portfolio from "./components/Header/Navigation/Portfolio";
import Resume from "./components/Header/Navigation/Resume";
import Contact from "./components/Header/Navigation/Contact";
import SocialFollow from "./components/Footer";

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
        return <Contact />;
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
        <SocialFollow />
      </footer>
    </>
  );
}

export default App;

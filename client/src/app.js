import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import Navigation from "./components/nav/nav";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio/portfolio";
import Resume from "./components/pages/resume/resume";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

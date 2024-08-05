import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Home.jsx";
import Expertise from "./Expertise.jsx";
import Experience from "./Experience";
import Services from "./Services";
import Contact from "./Contact";
import Projects from "./Projects";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main className="w-full bg-[#1A191D]">
      <Home />
      <Expertise />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};

export default Main
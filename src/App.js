import React from "react";
import { useRef } from "react";

import Navigationmenu from "./components/Navigationmenu";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";

import "./App.css";

const App = () => {
  const projects = useRef(null);
  const skills = useRef(null);
  const about = useRef(null);
  const refs = { projects: projects, skills: skills, about: about };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 48,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navigationmenu scrollToSection={scrollToSection} refs={refs} />
      <Projects innerRef={projects} />
      <Skills innerRef={skills} />
      <About innerRef={about} />
    </div>
  );
};

export default App;

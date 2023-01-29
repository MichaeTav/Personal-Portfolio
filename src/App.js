import React from "react";
import { useRef } from "react";

import { Stack } from "@mui/material";

import Navigationmenu from "./components/Navigationmenu";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Background from "./sections/Background";

import "./App.css";

const App = () => {
  const projects = useRef(null);
  const skills = useRef(null);
  const about = useRef(null);
  const refs = {
    projects: projects,
    skills: skills,
    about: about,
  };

  const scrollToSection = (elementRef) => {
    console.log(elementRef);
    window.scrollTo({
      top: elementRef.current.offsetTop - 48,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Stack>
        <Navigationmenu scrollToSection={scrollToSection} refs={refs} />
        <Projects innerRef={projects} />
        <Skills innerRef={skills} />
        <About innerRef={about} />
        <Background />
      </Stack>
    </div>
  );
};

export default App;

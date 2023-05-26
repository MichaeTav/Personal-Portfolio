import React from "react";
import { Divider } from "@chakra-ui/react";
import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/events";

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <ProjectCard {...project} />
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

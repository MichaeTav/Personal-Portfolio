import { Stack } from "@mui/material";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

import ProjectCard from "../components/ProjectCard";
import MobileProjectCard from "../components/MobileProjectCard";

import projectData from "../resources/data/projectData";

const Projects = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="projects">
      <h1 className="sectionHeader">PROJECTS</h1>

      <Stack justifyContent="center" alignItems="center">
        {projectData.map((project) => (
          <div
            className="projectContainer"
            style={{ zIndex: 1 }}
            key={project.key}
          >
            <h1 className="sectionHeader projectTitle">{project.title}</h1>
            <BrowserView>
              <ProjectCard
                description={project.description}
                imageList={project.images}
                iconList={project.techIcons}
                codeLink={project.codeLink}
              />
            </BrowserView>
            <MobileView>
              <MobileProjectCard
                description={project.description}
                imageList={project.mobileImages}
                iconList={project.techIcons}
                codeLink={project.codeLink}
              />
            </MobileView>
          </div>
        ))}
      </Stack>
    </div>
  );
};

export default Projects;

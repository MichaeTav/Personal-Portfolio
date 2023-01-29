import React from "react";

import { Grid, Stack, Box, Paper, Container } from "@mui/material";

import graphqlIcon from "../resources/graphql-icon.png";
import javaIcon from "../resources/java-icon.png";
import javaScriptIcon from "../resources/javascript-icon.png";
import reactIcon from "../resources/react-icon.png";
import springIcon from "../resources/spring-icon.png";
import materialuiIcon from "../resources/materialui-icon.png";
import githubIcon from "../resources/github-icon.png";
import chromeIcon from "../resources/chrome-icon.png";
import dockerIcon from "../resources/docker-icon.png";

const languages = [javaIcon, javaScriptIcon, graphqlIcon];
const frameworks = [reactIcon, springIcon, materialuiIcon];
const tools = [githubIcon, chromeIcon, dockerIcon];

const SkillsContainer = ({ title, icons }) => {
  return (
    <Stack spacing={2}>
      <div style={{ zIndex: 1 }}>
        <h1 className="sectionHeader">{title}</h1>
      </div>
      <div style={{ zIndex: 1 }}>
        <Paper
          sx={{
            backgroundColor: "#252526",
            maxWidth: "250px",
            minWidth: "250px",
            margin: "auto",
          }}
          elevation={10}
        >
          <Grid container>
            {icons.map((icon) => (
              <Grid item xs={6} justifyContent="center" alignItems="center">
                <img src={icon} className="icon" />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </div>
    </Stack>
  );
};

const Skills = ({ innerRef }) => {
  const skills = [javaIcon, javaScriptIcon, reactIcon, graphqlIcon, springIcon];

  return (
    <div ref={innerRef} className="skills">
      <Stack
        spacing={8}
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <SkillsContainer title={"LANGUAGES"} icons={languages} />
        <SkillsContainer title={"FRAMEWORKS"} icons={frameworks} />
        <SkillsContainer title={"TOOLS"} icons={tools} />
      </Stack>
    </div>
  );
};

export default Skills;

import { Box, Stack, Paper, Typography, Avatar } from "@mui/material";
import React from "react";

import profile from "../resources/profilepic.jpg";

const description =
  "My name is Michael Tavera and I am currently a computer science student at Cal State University San Marcos. I have a strong passion for computer science and have been working hard to improve my skills in the field. Prior to attending Cal State University, I completed my associate degree in Computer Science for Transfer at MiraCosta College, where I maintained a GPA of 3.89. I also have experience working as a STEM tutor at MiraCosta College, where I helped students with coursework in computer science, math, and physics. ";

const About = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="about">
      <Stack>
        {/* Pushes header to front of components avoiding animation from overlapping */}
        <div style={{ zIndex: 1 }}>
          <h1 className="sectionHeader">ABOUT</h1>
          <Paper
            sx={{
              backgroundColor: "#252526",
              maxWidth: "1000px",
              minWidth: "250px",
              margin: "auto",
              padding: "40px",
            }}
            elevation={10}
          >
            <Stack justifyContent="center" alignItems="center" spacing={8}>
              <Avatar src={profile} sx={{ width: 100, height: 100 }} />
              <Typography variant="h6" color="#fff">
                {description}
              </Typography>
              <Typography variant="h6" color="#fff">
                Feel free to contact me on{" "}
                <a
                  href="https://www.linkedin.com/in/michael-tavera-969b8514b"
                  style={{ color: "inherit", textDecoration: "underline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                .
              </Typography>
            </Stack>
          </Paper>
        </div>
      </Stack>
    </div>
  );
};

export default About;

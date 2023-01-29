import { Box, Stack } from "@mui/material";
import React from "react";

const About = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="about">
      <Stack>
        <div style={{ zIndex: 1 }}>
          <h1 className="sectionHeader">ABOUT</h1>
        </div>
      </Stack>
    </div>
  );
};

export default About;

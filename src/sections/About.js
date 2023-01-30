import { Box, Stack } from "@mui/material";
import React from "react";

const About = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="about">
      <Stack>
        {/* Pushes header to front of components avoiding animation from overlapping */}
        <div style={{ zIndex: 1 }}>
          <h1 className="sectionHeader">ABOUT</h1>
        </div>
      </Stack>
    </div>
  );
};

export default About;

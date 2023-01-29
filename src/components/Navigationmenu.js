import React from "react";

import { AppBar, Box, Tabs, Tab, Toolbar, Button } from "@mui/material";

const Navigationmenu = ({ scrollToSection, refs }) => {
  return (
    <div>
      <AppBar
        component="nav"
        sx={{
          alignItems: "center",
          backgroundColor: "#1E1E1E;",
        }}
      >
        <Toolbar>
          <Box>
            <Button
              sx={{ color: "#fff" }}
              size="large"
              onClick={() => {
                scrollToSection(refs.projects);
              }}
            >
              PROJECTS
            </Button>
            <Button
              sx={{ color: "#fff" }}
              size="large"
              onClick={() => {
                scrollToSection(refs.skills);
              }}
            >
              SKILLS
            </Button>
            <Button
              sx={{ color: "#fff" }}
              size="large"
              onClick={() => {
                scrollToSection(refs.about);
              }}
            >
              ABOUT
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigationmenu;

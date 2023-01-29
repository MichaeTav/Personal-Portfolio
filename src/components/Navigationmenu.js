import React from "react";

import { AppBar, Box, Tabs, Tab, Toolbar, Button } from "@mui/material";

const Navigationmenu = ({ scrollToSection, refs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        scrollToSection(refs.projects);
        break;
      case 1:
        scrollToSection(refs.skills);
        break;
      case 2:
        scrollToSection(refs.about);
        break;
      default:
        console.log("BROKEN");
    }
  };

  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
          <Box>
            <Button sx={{ color: "#fff" }} onClick={handleChange}>
              PROJECTS
            </Button>
            <Button sx={{ color: "#fff" }} onClick={handleChange}>
              SKILLS
            </Button>
            <Button sx={{ color: "#fff" }} onClick={handleChange}>
              ABOUT
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigationmenu;

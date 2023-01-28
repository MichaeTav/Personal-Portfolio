import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
    <div className="navBar">
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Projects" />
          <Tab label="Skills" />
          <Tab label="About Me" />
        </Tabs>
      </Box>
    </div>
  );
};

export default Navigationmenu;

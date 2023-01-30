import React from "react";

import { CardContent, Stack, Typography, Paper } from "@mui/material";

import ImageList from "./ImageList";

const ProjectCard = ({ description, imageList, iconList }) => {
  return (
    <Stack>
      <div style={{ zIndex: 1 }}>
        <Paper
          sx={{
            backgroundColor: "#252526",
            maxWidth: "840px",
            padding: "20px 0px 0px 0px",
          }}
          elevation={10}
        >
          <ImageList imageList={imageList} />
          <CardContent>
            <Typography variant="body1" color="#fff">
              {description}
            </Typography>
          </CardContent>
          <Stack direction="row" justifyContent="center">
            {iconList.map((icon) => (
              <img className="smallIcon" src={icon} alt="" />
            ))}
          </Stack>
        </Paper>
      </div>
    </Stack>
  );
};

export default ProjectCard;

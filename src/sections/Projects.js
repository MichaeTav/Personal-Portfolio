import { Stack } from "@mui/material";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

import ProjectCard from "../components/ProjectCard";
import MobileProjectCard from "../components/MobileProjectCard";

import graphqlIcon from "../resources/graphql-icon.png";
import javaIcon from "../resources/java-icon.png";
import javaScriptIcon from "../resources/javascript-icon.png";
import reactIcon from "../resources/react-icon.png";
import springIcon from "../resources/spring-icon.png";
import materialuiIcon from "../resources/materialui-icon.png";
import mongodbIcon from "../resources/mongodb-icon.png";
import shrink1 from "../resources/shrinktracker/image1.png";
import shrink2 from "../resources/shrinktracker/image2.png";
import shrink3 from "../resources/shrinktracker/image3.png";
import shrink4 from "../resources/shrinktracker/image4.png";
import shrink1m from "../resources/shrinktracker/Mobile/image1.png";
import shrink2m from "../resources/shrinktracker/Mobile/image2.png";
import shrink3m from "../resources/shrinktracker/Mobile/image3.png";
import shrink4m from "../resources/shrinktracker/Mobile/image4.png";
import shrink5m from "../resources/shrinktracker/Mobile/image5.png";
import sars1 from "../resources/sars/image1.png";
import sars2 from "../resources/sars/image2.png";
import sars1m from "../resources/sars/Mobile/image1.png";
import sars2m from "../resources/sars/Mobile/image2.jpg";

const mobileShrinkImages = [shrink1m, shrink2m, shrink3m, shrink4m, shrink5m];
const shrinkImages = [shrink1, shrink2, shrink3, shrink4];
const shrinkIcons = [
  javaIcon,
  javaScriptIcon,
  reactIcon,
  graphqlIcon,
  springIcon,
  materialuiIcon,
  mongodbIcon,
];
const shrinkCodeLink = "https://github.com/MichaeTav/ShrinkTracker";
const shrinkDescription =
  "ShrinkTracker is a full stack web application that keeps track of perishable items expiration date. It allows for multiple users along with different roles that correspond to the departments you might find in a grocery store. Each user only has access to their department by using role based authentication. One thing I would like to add to this project is the ability to upload images for each product and store them in S3.";

const mobileSarsImages = [sars2m, sars1m];
const sarsImages = [sars2, sars1];
const sarsIcons = [javaScriptIcon];
const sarsCodeLink = "https://github.com/MichaeTav/SARS-Notifications";
const sarsDescription =
  "SARS Notifications is a browser extension that enables sound notifications when a new student enters the drop in list for SARS(an online student management system). It can only be turned on once the correct webpage is open and allows for volume adjustment. The values for the volume persist through local storage in the browser allowing for the users choice of volume to be saved.";

const Projects = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="projects">
      <h1 className="sectionHeader">PROJECTS</h1>

      <Stack justifyContent="center" alignItems="center">
        <div className="projectContainer" style={{ zIndex: 1 }}>
          <h1 className="sectionHeader projectTitle">SHRINK TRACKER</h1>
          <BrowserView>
            <ProjectCard
              description={shrinkDescription}
              imageList={shrinkImages}
              iconList={shrinkIcons}
              codeLink={shrinkCodeLink}
            />
          </BrowserView>
          <MobileView>
            <MobileProjectCard
              description={shrinkDescription}
              imageList={mobileShrinkImages}
              iconList={shrinkIcons}
              codeLink={shrinkCodeLink}
            />
          </MobileView>
          <h1 className="sectionHeader projectTitle">SARS NOTIFICATIONS</h1>
          <BrowserView>
            <ProjectCard
              description={sarsDescription}
              imageList={sarsImages}
              iconList={sarsIcons}
              codeLink={sarsCodeLink}
            />
          </BrowserView>
          <MobileView>
            <MobileProjectCard
              description={sarsDescription}
              imageList={mobileSarsImages}
              iconList={sarsIcons}
              codeLink={sarsCodeLink}
            />
          </MobileView>
        </div>
      </Stack>
    </div>
  );
};

export default Projects;

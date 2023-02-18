import {
  shrinkTechIcons,
  shrinkImages,
  shrinkMobileImages,
  sarsTechIcons,
  sarsImages,
  sarsMobileImages,
  discordBotTechIcons,
  discordBotImages,
  discordBotMobileImages,
} from "./imageArrays";

const projectData = [
  {
    key: "shrink",
    title: "SHRINK TRACKER",
    description:
      "ShrinkTracker is a full stack web application that keeps track of perishable items expiration date. It allows for multiple users along with different roles that correspond to the departments you might find in a grocery store. Each user only has access to their department by using role based authentication. One thing I would like to add to this project is the ability to upload images for each product and store them in S3.",
    codeLink: "https://github.com/MichaeTav/ShrinkTracker",
    images: shrinkImages,
    mobileImages: shrinkMobileImages,
    techIcons: shrinkTechIcons,
  },
  {
    key: "sars",
    title: "SARS NOTIFICATIONS",
    description:
      "SARS Notifications is a browser extension that enables sound notifications when a new student enters the drop in list for SARS(an online student management system). It can only be turned on once the correct webpage is open and allows for volume adjustment. The values for the volume persist through local storage in the browser allowing for the users choice of volume to be saved.",
    codeLink: "https://github.com/MichaeTav/SARS-Notifications",
    images: sarsImages,
    mobileImages: sarsMobileImages,
    techIcons: sarsTechIcons,
  },
  {
    key: "discordBot",
    title: "ASSIGNMENT DISCORD BOT",
    description:
      "This discord bot connects to the Canvas LMS graphql API to retrieve the due dates of upcoming assignments. It implements weekly reminders and a slash command to retrieve all assignments.",
    codeLink: "https://github.com/MichaeTav/Canvas-Assignments-Discord-Bot",
    images: discordBotImages,
    mobileImages: discordBotMobileImages,
    techIcons: discordBotTechIcons,
  },
];

export default projectData;

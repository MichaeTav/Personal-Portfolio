import graphqlIcon from "../graphql-icon.png";
import javaIcon from "../java-icon.png";
import javaScriptIcon from "../javascript-icon.png";
import reactIcon from "../react-icon.png";
import springIcon from "../spring-icon.png";
import materialuiIcon from "../materialui-icon.png";
import mongodbIcon from "../mongodb-icon.png";
import shrink1 from "../shrinktracker/image1.png";
import shrink2 from "../shrinktracker/image2.png";
import shrink3 from "../shrinktracker/image3.png";
import shrink4 from "../shrinktracker/image4.png";
import shrink1m from "../shrinktracker/Mobile/image1.png";
import shrink2m from "../shrinktracker/Mobile/image2.png";
import shrink3m from "../shrinktracker/Mobile/image3.png";
import shrink4m from "../shrinktracker/Mobile/image4.png";
import shrink5m from "../shrinktracker/Mobile/image5.png";
import sars2 from "../sars/image1.png";
import sars1 from "../sars/image2.png";
import sars1m from "../sars/Mobile/image1.png";
import sars2m from "../sars/Mobile/image2.jpg";
import discord1 from "../canvasdiscordbot/get-assignments.png";

//SHRINK TRACKER IMAGES
const shrinkTechIcons = [
  {
    key: "java",
    image: javaIcon,
  },
  {
    key: "javaScript",
    image: javaScriptIcon,
  },
  {
    key: "react",
    image: reactIcon,
  },
  {
    key: "graphQL",
    image: graphqlIcon,
  },
  {
    key: "spring",
    image: springIcon,
  },
  {
    key: "materialui",
    image: materialuiIcon,
  },
  {
    key: "mongodb",
    image: mongodbIcon,
  },
];

const shrinkImages = [
  {
    key: "shrink1",
    image: shrink1,
    description:
      "Shows home page for a base user including the add item widget and all upcoming products in their department.",
  },
  {
    key: "shrink2",
    image: shrink2,
    description:
      "Shows admin adding a new item and selecting the department for the item to go into.",
  },
  {
    key: "shrink3",
    image: shrink3,
    description: "Shows admin adding a new item to be stored in the database.",
  },
  {
    key: "shrink4",
    image: shrink4,
    description:
      "Shows admin home page which includes all items from every department.",
  },
];

const shrinkMobileImages = [
  {
    key: "shrink1m",
    image: shrink1m,
    description: "",
  },
  {
    key: "shrink2m",
    image: shrink2m,
    description: "",
  },
  {
    key: "shrink3m",
    image: shrink3m,
    description: "",
  },
  {
    key: "shrink4m",
    image: shrink4m,
    description: "",
  },
  {
    key: "shrink5m",
    image: shrink5m,
    description: "",
  },
];

//SARS IMAGES
const sarsTechIcons = [
  {
    key: "javaScript",
    image: javaScriptIcon,
  },
];

const sarsImages = [
  {
    key: "sars1",
    image: sars1,
    description: "Shows extension being opened during sars session.",
  },
  {
    key: "sars2",
    image: sars2,
    description: "Shows extension.",
  },
];

const sarsMobileImages = [
  {
    key: "sars1m",
    image: sars1m,
    description: "Shows extension being opened during sars session.",
  },
  {
    key: "sars2m",
    image: sars2m,
    description: "Shows extension.",
  },
];

//DISCORD IMAGES
const discordBotTechIcons = [
  {
    key: "javaScript",
    image: javaScriptIcon,
  },
];

const discordBotImages = [
  {
    key: "discord1",
    image: discord1,
    description: "Shows user using /get-assignments command",
  },
];

const discordBotMobileImages = [
  {
    key: "discord1",
    image: discord1,
    description: "Shows user using /get-assignments command",
  },
];

export {
  shrinkTechIcons,
  shrinkImages,
  shrinkMobileImages,
  sarsTechIcons,
  sarsImages,
  sarsMobileImages,
  discordBotTechIcons,
  discordBotImages,
  discordBotMobileImages,
};

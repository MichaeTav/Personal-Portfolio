import React from "react";
import ProjectCard from "../components/cards/ProjectCard";
import ExperienceCard from "../components/cards/ExperienceCard";
import BlogCard from "../components/cards/BlogCard";
import { homeItems } from "../data/events";
import { Divider } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      {homeItems.map((item, index) => {
        switch (item.type) {
          case "project":
            return (
              <div key={index}>
                <ProjectCard {...item} />
                <Divider />
              </div>
            );
          case "experience":
            return (
              <div key={index}>
                <ExperienceCard {...item} />
                <Divider />
              </div>
            );
          case "blog":
            return (
              <div key={index}>
                <BlogCard {...item} />
                <Divider />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Home;

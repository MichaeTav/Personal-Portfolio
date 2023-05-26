import React from "react";
import ExperienceCard from "../components/cards/ExperienceCard";
import { experience } from "../data/events";
import { Divider } from "@chakra-ui/react";

const Experience = () => {
  return (
    <div>
      {experience.map((job, index) => {
        return (
          <div key={index}>
            <ExperienceCard {...job} />
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default Experience;

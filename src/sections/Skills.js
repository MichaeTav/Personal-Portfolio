import React from "react";

import { Stack } from "@mui/material";
import { motion } from "framer-motion";

import graphqlIcon from "../resources/graphql-icon.png";
import javaIcon from "../resources/java-icon.png";
import javaScriptIcon from "../resources/javascript-icon.png";
import reactIcon from "../resources/react-icon.png";
import springIcon from "../resources/spring-icon.png";

const Skills = ({ innerRef }) => {
  const skills = [javaIcon, javaScriptIcon, reactIcon, graphqlIcon, springIcon];

  return (
    <div ref={innerRef} className="skills">
      <h1 className="sectionHeader">SKILLS</h1>

      <Stack spacing={10}>
        {skills.map((icon) => (
          <motion.div
            initial={{ x: "-95vw" }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              transition: { type: "spring", duration: 1.5, bounce: 0.3 },
            }}
            key={icon}
          >
            <img src={icon} className="icon" />
          </motion.div>
        ))}
      </Stack>
    </div>
  );
};

export default Skills;

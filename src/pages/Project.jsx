import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Center, Circle, Divider, HStack, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/events";
import Comments from "../components/comments/Comments";

const Project = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const [isSmallerThanDesktop] = useMediaQuery("(max-width: 960px)");
  const [borders, setBorders] = useState(isSmallerThanDesktop);

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    setBorders(isSmallerThanDesktop);
  }, [isSmallerThanDesktop]);

  let project;

  switch (projectName) {
    case "personalwebsite":
      project = projects[0];
      break;
    case "shrinktracker":
      project = projects[3];
      break;
    case "govsort":
      project = projects[1];
      break;
    case "discordbot":
      project = projects[2];
      break;
    case "sarsnotifications":
      project = projects[4];
      break;
    case "genotune":
      project = projects.find((p) => p.title === "GenoTune");
      break;
    default:
      navigate("/");
  }

  return (
    <Box backgroundColor="#242424">
      <Center>
        <Box
          width={isSmallerThanDesktop ? "100%" : "50vw"}
          maxWidth="960px"
          minH="100vh"
          borderLeftWidth={borders ? "" : "1px"}
          borderRightWidth={borders ? "" : "1px"}
          borderLeftColor="rgba(255, 255, 255, 0.48)"
          borderRightColor="rgba(255, 255, 255, 0.48)"
          borderLeftStyle="solid"
          borderRightStyle="solid"
        >
          <HStack padding="1rem">
            <Circle
              _hover={{
                background: "rgba(255, 255, 255, 0.05)",
                cursor: "pointer",
              }}
              size="48px"
              onClick={(event) => handleBack(event)}
            >
              <AiOutlineArrowLeft size="24px" />
            </Circle>
            <Text fontWeight="bold" fontSize="xl">
              Project
            </Text>
          </HStack>
          <Divider />
          <ProjectCard {...project} />
          <Divider />
          <Comments />
        </Box>
      </Center>
    </Box>
  );
};

export default Project;

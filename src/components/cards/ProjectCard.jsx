import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Circle,
  HStack,
  Image,
  VStack,
  Text,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink, AiOutlineComment } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import profilePic from "../../assets/profilepic.jpg";

const ProjectCard = ({
  title,
  description,
  dateCompleted,
  githubURL,
  demoURL,
  commentURL,
  githubCommentTitle,
}) => {
  const navigate = useNavigate();
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const fetchCommentCount = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/michaetav/comments/issues?state=all"
        );
        const issues = response.data;
        const issue = issues.filter(
          (issue) => issue.title === githubCommentTitle
        );
        const totalComments = issue.reduce(
          (count, issue) => count + issue.comments,
          0
        );
        setCommentCount(totalComments);
      } catch (error) {
        console.error("Error fetching comment count:", error);
      }
    };

    fetchCommentCount();
  }, []);

  const handleCommentClick = (event) => {
    event.preventDefault();
    const currentPath = window.location.pathname;
    if (currentPath === "/" || currentPath === "/projects") {
      navigate(commentURL);
    }
  };
  return (
    <Box
      padding="1rem"
      _hover={{ background: "rgba(255, 255, 255, 0.05)", cursor: "pointer" }}
      onClick={(event) => handleCommentClick(event)}
    >
      <HStack align="flex-start">
        <Circle size="48px">
          <Image borderRadius="full" src={profilePic} alt="Michael Tavera" />
        </Circle>
        <VStack align="flex-start" textAlign="left">
          <HStack>
            <Text fontWeight="bold">{title}</Text>
            <Text color="#71767B">
              · {moment(dateCompleted).format("MMM D, YYYY")}
            </Text>
          </HStack>
          <Text>{description}</Text>
          <HStack minW="100%" justify="space-between">
            <Tooltip label="Comments">
              <Link isExternal display="flex" alignItems="center">
                <AiOutlineComment
                  size="24px"
                  onClick={(event) => handleCommentClick(event)}
                />
                <Text marginLeft="0.5rem">{commentCount}</Text>
              </Link>
            </Tooltip>
            <Tooltip label="Code">
              <Link
                href={githubURL}
                isExternal
                display="flex"
                alignItems="center"
                onClick={(event) => event.stopPropagation()}
              >
                <AiFillGithub size="24px" />
              </Link>
            </Tooltip>
            <Tooltip label={demoURL && "Demo"}>
              <Link
                href={demoURL}
                isExternal
                display="flex"
                alignItems="center"
                color={demoURL ? "" : "#71767B"}
                onClick={(event) => event.stopPropagation()}
              >
                <AiOutlineLink size="24px" />
              </Link>
            </Tooltip>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ProjectCard;

import React from "react";
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

const ExperienceCard = ({ title, company, timeRange, description, logo }) => {
  return (
    <Box padding="1rem" _hover={{ background: "rgba(255, 255, 255, 0.05)" }}>
      <HStack align="flex-start">
        <Circle size="48px">
          <Image borderRadius="full" src={logo} alt="Company Logo" />
        </Circle>
        <VStack align="flex-start" textAlign="left">
          <HStack flexWrap="wrap" minW="100%">
            <Text fontWeight="bold">{title}</Text>
            <HStack flexWrap="wrap" spacing={2}>
              <Text color="#71767B">@{company}</Text>
              <Text color="#71767B">· {timeRange}</Text>
            </HStack>
          </HStack>
          <Text>{description}</Text>
          {/* <HStack minW="100%" justify="space-between">
            <Tooltip label="Comments">
              <Link isExternal display="flex" alignItems="center">
                <AiOutlineComment size="24px" />
              </Link>
            </Tooltip>
            <Tooltip label="Code">
              <Link
                href={githubURL}
                isExternal
                display="flex"
                alignItems="center"
              >
                <AiFillGithub size="24px" />
              </Link>
            </Tooltip>
            <Tooltip label="Demo">
              <Link
                href={demoURL}
                isExternal
                display="flex"
                alignItems="center"
              >
                <AiOutlineLink size="24px" />
              </Link>
            </Tooltip>
          </HStack> */}
        </VStack>
      </HStack>
    </Box>
  );
};

export default ExperienceCard;

import React from "react";
import {
  AspectRatio,
  Box,
  VStack,
  Image,
  Text,
  HStack,
  Link,
  Circle,
  useBreakpointValue,
  Tooltip,
} from "@chakra-ui/react";
import { GrMap } from "react-icons/gr";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import profilePic from "../../assets/profilepic.jpg";

import HeaderImage from "../../assets/Header.jpg";

const ProfileHeader = () => {
  const size = useBreakpointValue({
    base: "100px",
    sm: "120px",
    md: "150px",
    lg: "150px",
    xl: "150px",
  });

  return (
    <Box>
      <AspectRatio minW="100%" ratio={3}>
        <Image src={HeaderImage} />
      </AspectRatio>
      <Box padding="1rem">
        <VStack align="flex-start" textAlign="left">
          <HStack minW="100%" justify="space-between">
            <Box marginTop={`-${parseInt(size) / 2}px`} zIndex={2}>
              <Circle borderWidth="3px" borderColor="#242424" boxSize={size}>
                <Image
                  borderRadius="full"
                  src={profilePic}
                  alt="Michael Tavera"
                  mt="6px"
                />
              </Circle>
            </Box>
          </HStack>
          <Text fontSize="xl" fontWeight="bold">
            Michael Tavera
          </Text>
          <Text fontSize="md" color="#71767B">
            @developer
          </Text>
          <Text fontSize="md" textAlign="left">
            Junior in computer science at San Marcos. Passionate about building
            new projects.
          </Text>
          <HStack>
            <MdOutlineSchool color="#71767B" />
            <Text color="#71767B">
              CSUSM - B.S. Computer Science (Expected Dec. 2024)
            </Text>
          </HStack>
          <HStack>
            <MdOutlineSchool color="#71767B" />
            <Text color="#71767B">
              MiraCosta - Computer Science Transfer (Jan. 2023)
            </Text>
          </HStack>
          <HStack>
            <GrMap className="location-icon" />
            <Text color="#71767B">Orange County, CA</Text>
          </HStack>
          <HStack>
            <Link
              href="https://www.linkedin.com/in/michael-tavera-969b8514b"
              isExternal
              display="flex"
              alignItems="center"
            >
              <AiFillLinkedin size="1.5rem" color="#71767B" />
              <Text color="twitter.500" marginLeft={2}>
                LinkedIn
              </Text>
            </Link>
            <Link
              href="https://github.com/MichaeTav"
              isExternal
              display="flex"
              alignItems="center"
            >
              <AiFillGithub size="1.5rem" color="#71767B" />
              <Text color="twitter.500" marginLeft={2}>
                GitHub
              </Text>
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default ProfileHeader;

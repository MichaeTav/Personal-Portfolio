import "./App.css";
import { Box, Center, Divider } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import NavBar from "./components/nav/NavBar";
import { Outlet } from "react-router-dom";
import ProfileHeader from "./components/profile/ProfileHeader";
import { useEffect, useState } from "react";

function App() {
  const [isSmallerThanDesktop] = useMediaQuery("(max-width: 960px)");
  const [borders, setBorders] = useState(isSmallerThanDesktop);

  useEffect(() => {
    setBorders(isSmallerThanDesktop);
  }, [isSmallerThanDesktop]);
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
          <ProfileHeader />
          <NavBar />
          <Divider paddingTop="5px" />
          <Outlet />
        </Box>
      </Center>
    </Box>
  );
}

export default App;

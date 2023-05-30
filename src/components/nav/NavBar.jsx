import React, { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabIndicator } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/projects":
        setSelectedTab(1);
        break;
      case "/experience":
        setSelectedTab(2);
        break;
      case "/blog":
        setSelectedTab(3);
        break;
    }
  }, [location]);

  const changeTab = (index) => {
    setSelectedTab(index);
    switch (index) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/projects");
        break;
      case 2:
        navigate("/experience");
        break;
      case 3:
        navigate("/blog");
        break;
    }
  };

  return (
    <Tabs
      isFitted
      align="center"
      variant="unstyled"
      onChange={(index) => changeTab(index)}
      index={selectedTab}
    >
      <TabList>
        <Tab
          _selected={{
            color: "white",
            fontWeight: "bold",
          }}
          _hover={{ background: "rgba(255, 255, 255, 0.05)" }}
          color="#71767B"
        >
          Home
        </Tab>
        <Tab
          _selected={{
            color: "white",
            fontWeight: "bold",
          }}
          _hover={{ background: "rgba(255, 255, 255, 0.05)" }}
          color="#71767B"
        >
          Projects
        </Tab>
        <Tab
          _selected={{
            color: "white",
            fontWeight: "bold",
          }}
          _hover={{ background: "rgba(255, 255, 255, 0.05)" }}
          color="#71767B"
        >
          Experience
        </Tab>
        {/* <Tab
          _selected={{
            color: "white",
            fontWeight: "bold",
          }}
          _hover={{ background: "rgba(255, 255, 255, 0.05)" }}
          color="#71767B"
          isDisabled
        >
          Blog
        </Tab> */}
      </TabList>
      <TabIndicator height="5px" bg="blue.500" borderRadius="5px" />
    </Tabs>
  );
};

export default NavBar;

import React, { useState } from "react";
import { Tabs, TabList, Tab, TabIndicator } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { routes } from "../../Routes";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getTabIndex = () => {
    const route = routes.findIndex((route) => route.path === location.pathname);
    return route >= 0 ? route : 0;
  };

  const changeTab = (index) => {
    if (routes[index]) {
      navigate(routes[index].path);
    }
  };

  return (
    <Tabs
      isFitted
      align="center"
      variant="unstyled"
      onChange={(index) => changeTab(index)}
      index={getTabIndex()}
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

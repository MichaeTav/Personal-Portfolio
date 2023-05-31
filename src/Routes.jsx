import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Blog from "./pages/Blog.jsx";
import Home from "./pages/Home.jsx";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  //   {
  //     path: "/blog",
  //     element: <Blog />,
  //   },
];

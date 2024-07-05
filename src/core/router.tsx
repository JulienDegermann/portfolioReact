import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Skills from "../Layout/Body/Sections/Skills";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/skills",
    element: <Skills />
  }

])
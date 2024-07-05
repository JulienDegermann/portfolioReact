import { createBrowserRouter } from "react-router-dom";
import Skills from "../components/sections/Skills";
import Home from "../views/Home";


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
import {createBrowserRouter} from "react-router-dom";

import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Creations from "../Pages/Creations";
import Layout from "../Layout";
import News from "../Pages/News";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "creations",
                element: <Creations/>
            },
            {
                path: "news",
                element: <News/>
            },
        ]
    },

])
import App from "@/App";

import DashboardLayout from "@/layout/DashboardLayout";
import About from "@/pages/About";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";

const router = createBrowserRouter([
    {
        Component : App,
        path :"/",
        children : [
            {
                index: true,
                Component : Home
            },
            {
                path : "about",
                Component : About
            },
            {
                path : "register",
                Component : Register

            },
            {
                path : "login",
                Component : Login

            },
            {
                path : "verify",
                Component : Verify

            }
        ]
    },

    {
        Component : DashboardLayout,
        path : "/admin",
        children : [
          ...  generateRoutes(adminSidebarItems)  
        ]
    },
    {
        Component : DashboardLayout,
        path : "/user",
        children : [
            ...  generateRoutes(userSidebarItems)
            
        ]
    },
])

export default router
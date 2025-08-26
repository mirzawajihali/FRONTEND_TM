import App from "@/App";

import DashboardLayout from "@/layout/DashboardLayout";
import About from "@/pages/About";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import type { TRole } from "@/types";
import { role } from "@/constants/role";
import Unauthorized from "@/pages/Unauthorized";

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
        Component : withAuth(DashboardLayout, role.admin as TRole),
        path : "/admin",
        children : [
            {index : true, element : <Navigate to="/admin/analytics"/>},
          ...  generateRoutes(adminSidebarItems)  
        ]
    },
    {
        Component : withAuth(DashboardLayout, role.user as TRole),
        path : "/user",
        children : [
            {index : true, element : <Navigate to="/user/bookings"/>},
            ...  generateRoutes(userSidebarItems)
            
        ]
    },

     {
    Component: Unauthorized,
    path: "/unauthorized",
  },
])

export default router
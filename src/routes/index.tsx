import App from "@/App";
import AdminLayout from "@/layout/AdminLayout";
import About from "@/pages/About";
import Analytics from "@/pages/Analytics";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";

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
        Component : AdminLayout,
        path : "/admin",
        children : [
            {
                path : "analytics",
                Component : Analytics
            },
            
        ]
    }
])

export default router
import App from "@/App";
import AdminLayout from "@/layout/AdminLayout";
import About from "@/pages/About";
import Analytics from "@/pages/Analytics";
import Home from "@/pages/Home";
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
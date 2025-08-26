import AddTour from "@/pages/Admin/AddTour";

import type { IsidebarItems } from "@/types";
import { lazy } from "react";


const Analytics = lazy(()=> import("@/pages/Admin/Analytics"))

export const adminSidebarItems : IsidebarItems[] = [
    {
      title: "Dashboard", 
      
      items: [
        {
          title: "Analytics",
          url: "analytics", // Remove /admin prefix since it's already in the parent route
          component : Analytics,
        },
        
      ],
    },
    {
      title: "Tour Management",
    
      items: [
        {
          title: "Add Tour",
          url: "add-tour", // Remove /admin prefix since it's already in the parent route
          component :  AddTour,
        },
        
      ],
    },
   
  ]
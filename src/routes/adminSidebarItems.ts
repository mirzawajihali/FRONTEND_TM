import AddDivision from "@/pages/Admin/AddDivision";
import AddTour from "@/pages/Admin/AddTour";
import AddTourType from "@/pages/Admin/AddTourType";

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
        {
          title: "Add Tour Type",
          url: "add-tour-type", // Remove /admin prefix since it's already in the parent route
          component :  AddTourType,
        },
        {
          title: "Add Division",
          url: "add-division", // Remove /admin prefix since it's already in the parent route
          component :  AddDivision
          ,
        },
        
      ],
    },
   
  ]
import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import type { IsidebarItems } from "@/types";

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
import Bookings from "@/pages/User/Bookings";
import type { IsidebarItems } from "@/types";

export const userSidebarItems : IsidebarItems[] = [
    {
        title : "Bookings",
        items : [
            {
                title : "Analytics",
                url : "/user/bookings",
                component : Bookings
            }
        ]
    }
]
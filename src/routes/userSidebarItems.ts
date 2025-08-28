import Bookings from "@/pages/User/Bookings";
import UpdateUser from "@/pages/User/UpdateUser";
import type { IsidebarItems } from "@/types";

export const userSidebarItems : IsidebarItems[] = [
    {
        title : "Bookings",
        items : [
            {
                title : "Bookings",
                url : "/user/bookings",
                component : Bookings
            },
            {
                title : "Update User Info",
                url : "/user/update",
                component : UpdateUser
            }
        ]
    }
]
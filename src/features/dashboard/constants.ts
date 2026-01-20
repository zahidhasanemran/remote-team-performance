import { FolderCog, LayoutDashboard, SquareCheckBig, Users } from "lucide-react"

export const sidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard
  },
  {
    id: 2,
    title: "Projects",
    url: "/projects",
    icon: FolderCog
  },
  {
    id: 3,
    title: "Team",
    url: "/teams",
    icon: Users,
  },
  {
    id: 4, 
    title: "Tasks",
    url: "/tasks",
    icon: SquareCheckBig
  }
]
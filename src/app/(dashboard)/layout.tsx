"use client"

import DashboardHeader from "@/components/layout/DashboardHeader"
import DashboardSidebar from "@/components/layout/DashboardSidebar"
import { cn } from "@/lib/utils"
import { PanelLeft } from "lucide-react"
import { useState } from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const [sidebarHidden, setSidebarHidden] = useState(false)

  return (
    <div className="relative flex">
      <aside className={cn(
        "sidebar bg-dashboard-sidebar-surface min-h-screen border-r border-black/10",
        "transition-[width,opacity] duration-300 ease-in-out",
        sidebarHidden ? "opacity-0 w-0" : "w-[250px] opacity-100"
      )}>
        <DashboardSidebar />
      </aside>
      <div className="content-wrapper flex-1  ">
        <div className="dashboard-header h-[65px] max-h-[65px] border-b border-black/10 fixed top-0 z-10 flex bg-secondary w-full items-center gap-x-4 px-4">
          <PanelLeft onClick={() => setSidebarHidden(!sidebarHidden)} />
          <DashboardHeader />
        </div>
        <div className="content p-5 pt-12 bg-secondary-light min-h-screen ">
          {(sidebarHidden).toString()}
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
import { sidebarLinks } from "@/features/dashboard/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const DashboardSidebar = () => {
  const pathname = usePathname()
  return (
    <div >
      <div className="sidebar-header max-h-[65px] ">
        <div className="flex items-center gap-3 px-3 py-4 border-b border-black/10">
          <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span className="text-sm text-muted-foreground">
            WorkloadIQ
          </span>
        </div>
      </div>

      <nav className="dashboard-navigation mt-5 px-2" aria-label="dashboard navigation ">

        {sidebarLinks?.map((link) => {
          const isActive = pathname === link.url
          return (
            <Link href={link?.url} key={link?.id} className={cn(
              "flex items-center gap-x-2 w-full px-3 py-2  hover:bg-brand-primary/10 rounded group",
              isActive ? "bg-brand-primary/10" : "bg-transparent"
            )}>
              <link.icon className={cn(
                "h-5 w-5 group-hover:text-brand-primary ",
                isActive ? "text-brand-primary" : "text-black"
              )} />
              <p className={cn(
                "group-hover:text-brand-primary text-sm font-medium ",
                isActive ? "text-brand-primary" : "text-black"
              )}>{link?.title}</p>
            </Link>
          )
        })}

      </nav>
    </div>
  )
}

export default DashboardSidebar
import { TrendingUp, Clock, Users } from "lucide-react"
import { teamMembers, STATUS_STYLES } from "@/components/landing/constants/workload"

const HeroWorkloadDashboard = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-linear-to-r from-brand-primary/20 via-brand-primary/10 to-transparent rounded-3xl blur-2xl " />
      <div className="relative bg-card rounded-2xl border border-status-healthy/30 shadow-xl overflow-hidden z-10">
        {/* Header */}
        <div className="px-5 py-4 border-b border-status-healthy bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">Team Workload</h3>
                <p className="text-xs text-muted-foreground">This week · 5 members</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Live</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-healthy opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-status-healthy"></span>
              </span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 px-5 py-4 border-b border-status-healthy bg-muted/20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-status-healthy">
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="text-lg font-bold">72%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Team Capacity</p>
          </div>
          <div className="text-center border-x border-status-healthy">
            <div className="flex items-center justify-center gap-1 text-status-warning">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-lg font-bold">1</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">At Risk</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-status-overload">
              <span className="text-lg font-bold">1</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Overloaded</p>
          </div>
        </div>

        {/* Team members list */}
        <div className="divide-y divide-status-healthy">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}

              className="px-5 py-3 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium ${STATUS_STYLES[member.status].bg}`}>
                  <span className="text-foreground">{member.avatar}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <div>
                      <p className="text-sm font-medium text-foreground truncate">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{member.hours}</span>
                  </div>

                  {/* Workload bar */}
                  <div className=" mt-1! h-2 bg-muted rounded-full overflow-hidden">
                    <div

                      className={`h-full rounded-full ${STATUS_STYLES[member.status].dot}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-muted/20 border-t border-status-healthy">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-status-healthy"></span>
                <span className="text-muted-foreground">Balanced</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-status-warning"></span>
                <span className="text-muted-foreground">High</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-status-overload"></span>
                <span className="text-muted-foreground">Overload</span>
              </div>
            </div>
            <span className="text-muted-foreground">Updated 2m ago</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-card rounded-xl border border-status-overload/30 shadow-lg p-3 max-w-[200px] bg-white z-10">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-status-overload/10 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-status-overload text-xs">!</span>
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">Workload Alert</p>
            <p className="text-xs text-muted-foreground mt-0.5">Marcus is at 95% capacity this week</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroWorkloadDashboard
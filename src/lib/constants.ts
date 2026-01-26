import { TeamMember } from "@/types/team"
import { AlertTriangle, CheckCircle, TrendingDown, TrendingUp } from "lucide-react"

export const MAX_WEEKLY_HOURS = 40

export const STATUS_STYLES = {
  healthy: {
    dot: "bg-status-healthy",
    bg: "bg-status-healthy/10",
    text: "text-status-healthy",
    border: "border-status-healthy",
    icon: CheckCircle
  },
  warning: {
    dot: "bg-status-warning",
    bg: "bg-status-warning/10",
    text: "text-status-warning",
    border: "border-status-warning",
    icon: TrendingUp
  },
  overload: {
    dot: "bg-status-overload",
    bg: "bg-status-overload/10",
    text: "text-status-overload",
    border: "border-status-overload",
    icon: AlertTriangle
  },
  underload: {
    dot: "bg-status-underload",
    bg: "bg-status-underload/10",
    text: "text-status-underload",
    border: "border-status-underload",
    icon: TrendingDown
  },
} as const


export const teamMembers: TeamMember[] = [
  { name: "Sarah Chen", role: "Lead Designer", workload: 85, status: "warning", avatar: "SC", hours: "38/40h" },
  { name: "Marcus Johnson", role: "Frontend Dev", workload: 95, status: "overload", avatar: "MJ", hours: "44/40h" },
  { name: "Emily Rodriguez", role: "Product Manager", workload: 65, status: "healthy", avatar: "ER", hours: "32/40h" },
  { name: "David Kim", role: "Backend Dev", workload: 40, status: "underload", avatar: "DK", hours: "18/40h" },
  { name: "Lisa Thompson", role: "QA Engineer", workload: 72, status: "healthy", avatar: "LT", hours: "34/40h" },
]


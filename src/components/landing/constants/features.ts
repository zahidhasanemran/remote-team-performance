import { Radar, Bell, CalendarClock, LayoutDashboard } from "lucide-react";

export const features = [
  {
    icon: Radar,
    title: "Workload Radar",
    description: "Instantly see underloaded, balanced, or overloaded team members with clear visual indicators.",
    color: "from-brand-primary to-brand-primary-glow",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified when any team member's workload crosses healthy limits — before problems start.",
    color: "from-status-warning to-status-overload",
  },
  {
    icon: CalendarClock,
    title: "Capacity Planning",
    description: "Plan and assign tasks based on real team capacity, not guesswork or availability calendars.",
    color: "from-status-healthy to-brand-primary",
  },
  {
    icon: LayoutDashboard,
    title: "Team Overview",
    description: "One dashboard for projects, deadlines, and workload across your entire remote team.",
    color: "from-status-underload to-brand-primary",
  },
];
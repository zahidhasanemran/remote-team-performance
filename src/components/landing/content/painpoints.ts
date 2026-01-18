import { AlertTriangle, Eye, Users } from "lucide-react";

export const painPoints = [
  {
    icon: AlertTriangle,
    pain: "Managers guess workload",
    solution: "See real capacity data at a glance",
    color: "text-status-warning",
  },
  {
    icon: Eye,
    pain: "Burnout is noticed too late",
    solution: "Get alerts before it happens",
    color: "text-status-overload",
  },
  {
    icon: Users,
    pain: "Some people are always overloaded",
    solution: "Balance work across your team",
    color: "text-status-underload",
  },
];
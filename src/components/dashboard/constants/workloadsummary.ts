
import { AlertTriangle, CheckCircle, TrendingDown } from "lucide-react";

interface StatusCard {
  id: string;
  count: number;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}


export const workloadsummary = [
  {
    id: 1,
    title: 'Overloaded',
    count: 2,
    icon: AlertTriangle,
    color: "text-status-overload",
    bgColor: "bg-status-overload/10",
  },
  {
    id: 2,
    title: 'Balanced',
    count: 4,
    icon: CheckCircle,
    color: "text-status-healthy",
    bgColor: "bg-status-healthy/10",
  },
  {
    id: 3,
    title: 'Warning',
    count: 1,
    icon: TrendingDown,
    color: "text-status-warning",
    bgColor: "bg-status-warning/10",
  },
  {
    id: 4,
    title: 'Underutilized',
    count: 1,
    icon: TrendingDown,
    color: "text-status-underload",
    bgColor: "bg-status-underload/10",
  }
]
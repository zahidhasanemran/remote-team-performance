import { cn } from "@/lib/utils"

interface WorkloadStatusProps {
  label: string,
  status: "balanced" | "warning" | "overload" | "underload"
  className?: string
}

const styles = {
  balanced: "bg-status-healthy",
  warning: "bg-status-warning",
  overload: "bg-status-overload",
  underload: "bg-status-underload"
}

const WorkloadStatus = ({ label, status = "balanced", className }: WorkloadStatusProps) => {
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      <div className={cn(styles[status], "w-3 h-3 rounded-full")}></div>
      <p className="text-muted-foreground font-light text-xs">{label}</p>
    </div>
  )
}

export default WorkloadStatus
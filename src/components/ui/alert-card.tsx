import { STATUS_STYLES } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { WorkloadStatusType } from "@/types/workload-status"
import Heading from "./Heading"
import MutedText from "./muted-text"


interface AlertCardProps {
  title: string,
  status: WorkloadStatusType
  time: string
  className?: string
}

const AlertCard = ({ title, status = "healthy", time, className }: AlertCardProps) => {
  const styles = STATUS_STYLES[status]
  const Icon = styles.icon

  return (
    <div className={cn("flex items-center  gap-x-3 px-2 py-2 border border-secondary rounded-lg", styles.bg, className)}>
      <div className={cn("px-3 py-3 rounded-lg", styles.bg)}>
        <Icon className={cn("w-5 h-5", styles.text)} aria-hidden="true" />
      </div>
      <div className="">
        <Heading as="h5">{title}</Heading>
        <MutedText label={time} variants="xs" />
      </div>
    </div>
  )
}

export default AlertCard
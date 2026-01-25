import { STATUS_STYLES } from "@/lib/constants"
import { formatDueDate } from "@/lib/date"
import { cn, getInitials } from "@/lib/utils"
import { WorkloadStatusType } from "@/types/workload-status"
import { Clock } from "lucide-react"
import Image from "next/image"
import MutedText from "@/components/ui/muted-text"
import Heading from "@/components/ui/Heading"

interface TaskCardProps {
  children: React.ReactNode
  status: WorkloadStatusType
  className?: string
}

interface TaskDateProps {
  dueDate: string | null
  status: WorkloadStatusType
}

interface AssigneeAvatarProps {
  src?: string
  name: string
  status: WorkloadStatusType
  className?: string
}

export const TaskCard = ({ children, status, className }: TaskCardProps) => {
  return (
    <div className={cn("flex justify-between gap-x-1 border px-3 py-3 rounded", className, STATUS_STYLES[status].border, STATUS_STYLES[status].bg)}>
      {children}
    </div>
  )
}

const TaskDate = ({ dueDate, status }: TaskDateProps) => {
  const formattedDate = formatDueDate(dueDate)

  return (
    <div className="flex gap-x-1 items-center">
      <Clock className={cn("w-5 h-5", STATUS_STYLES[status].text)} />
      <p className={cn(STATUS_STYLES[status].text)}>{formattedDate}</p>
    </div>
  )
}

const TaskTitle = ({ title }: { title: string }) => {
  return <Heading as="h4" className="truncate">{title}</Heading>
}

const TaskContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {children}
    </div>
  )
}
const AssigneeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-x-1 items-center ">
      {children}
    </div>
  )
}

const AssigneeAvatar = ({ src, name, status, className }: AssigneeAvatarProps) => {
  const initials = getInitials(name)

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full border border-secondary h-7 w-7 overflow-hidden",
        STATUS_STYLES[status].bg,
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={`${name}'s avatar`}
          fill
          className="object-cover rounded-full"
          sizes="32px"
        />
      ) : (
        <span className="text-[10px] font-medium text-slate-600">{initials}</span>
      )}
    </div>
  )
}

const AssigneeName = ({ name }: { name: string }) => {
  return <MutedText label={name} variants="sm" />
}

TaskCard.Title = TaskTitle
TaskCard.Date = TaskDate
TaskCard.Avatar = AssigneeAvatar
TaskCard.AssingeeName = AssigneeName
TaskCard.Container = TaskContainer
TaskCard.AssigneeContainer = AssigneeContainer



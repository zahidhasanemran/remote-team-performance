
/**
 * User Identity will contain User's name, designation and avatar
 * 
 */

import { cn, getInitials } from "@/lib/utils"
import Image from "next/image"
import MutedText from "@/components/ui/muted-text"
import { WorkloadStatusType } from "@/types/workload-status"
import { STATUS_STYLES } from "@/lib/constants"


interface UserIdentityProps {
  children: React.ReactNode
  className?: string
}

interface UserAvatarProps {
  src?: string
  name: string
  status: WorkloadStatusType
  className?: string
}

const UserIdentity = ({ children, className }: UserIdentityProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {children}
    </div>
  )
}


const UserAvatar = ({ src, name, status, className }: UserAvatarProps) => {
  const initials = getInitials(name)

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full border border-secondary h-8 w-8 overflow-hidden",
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
        <span className="text-xs font-medium text-slate-600">{initials}</span>
      )}
    </div>
  )
}

const UserContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col min-w-0 leading-tight", className)}>{children}</div>
}

const UserName = ({ name, className }: { name: string; className?: string }) => {
  return <span className={cn("text-sm font-semibold text-slate-900 truncate", className)}>{name}</span>
}

const UserDesignation = ({ designation, className }: { designation: string; className?: string }) => {
  return <MutedText label={designation} variants="xs" className={className} />
}

UserIdentity.Avatar = UserAvatar
UserIdentity.Content = UserContent
UserIdentity.Name = UserName
UserIdentity.Designation = UserDesignation

export { UserIdentity }
export type { UserIdentityProps, UserAvatarProps }
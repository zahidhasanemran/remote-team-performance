"user client"

import { cn, getInitials } from "@/lib/utils"
import Image from "next/image"

/**
 * User Identity will contain User's name, designation and avatar
 * 
 */

interface UserIdentityProps {
  children: React.ReactNode,
  className?: string,
}

interface UserAvatarProps {
  src?: string,
  name: string
}

export const UserIdentity = ({ children, className }: UserIdentityProps) => {
  return (
    <div className={cn("flex tiems-center gap-3", className)}>
      {children}
    </div>
  )
}

const UserAvatar = ({ src, name }: UserAvatarProps) => {
  const initials = getInitials(name)
  return (
    <div className="relative flex shrink-0 items-center justify-center rounded-full bg-slate-100 border border-slate-200 h-8 w-8">
      {src ? (
        <Image src={src} alt={name} fill className="object-cover rounded-full" />
      ) : (
        <span className="text-xs font-medium text-slate-600">{initials}</span>
      )}
    </div>
  )
}

const UserContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col min-w-0 leading-tight">{children}</div>
}


const UserName = ({ name }: { name: string }) => {
  return <span className="text-sm font-semibold text-slate-900 truncate">{name}</span>
}

const UserDesignation = ({ designation }: { designation: string }) => {
  return <span className="text-sm font-semibold text-slate-900 truncate">{designation}</span>
}


UserIdentity.Avatar = UserAvatar
UserIdentity.Content = UserContent
UserIdentity.Name = UserName
UserIdentity.Designation = UserDesignation
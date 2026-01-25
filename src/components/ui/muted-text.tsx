/**
 * Paragraph for the Dashboard specially
 * @params variants "lg" | "md" | "sm" | "xs"
 * @return p tag
 * @example <MutedText>Dashboard</MutedText>
 */

import { cn } from "@/lib/utils"

interface MutedTextProps {
  label: string,
  variants?: "lg" | "md" | "sm" | "xs"
  className?: string
}

const variantClasses = {
  lg: "text-lg text-muted-foreground",
  md: "text-md text-muted-foreground",
  sm: "text-sm text-muted-foreground",
  xs: "text-xs text-muted-foreground"
}

const MutedText = ({ label, variants = "lg", className }: MutedTextProps) => {
  return (
    <p className={cn(variantClasses[variants], className)}>
      {label}
    </p>
  )
}

export default MutedText
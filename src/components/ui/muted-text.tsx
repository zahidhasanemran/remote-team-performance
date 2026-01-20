/**
 * Paragraph for the Dashboard specially
 * @return p tag
 * @example <MutedText>Dashboard</MutedText>
 */

import { cn } from "@/lib/utils"

interface MutedTextProps {
  text: string,
  variants?: "lg" | "md" | "sm" | "xs"
  className?: ""
}

const variantClasses = {
  lg: "text-lg text-muted-foreground",
  md: "text-md text-muted-foreground",
  sm: "text-sm text-muted-foreground",
  xs: "text-xs text-muted-foreground"
}

const MutedText = ({ text, variants = "lg", className }: MutedTextProps) => {
  return (
    <p className={cn(variantClasses[variants], className)}>
      {text}
    </p>
  )
}

export default MutedText
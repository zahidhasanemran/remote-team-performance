/**
 * Headings for the Dashboard specially
 * @return h1, h2, h3, h4 and so on 
 * @example <Heading as="h1">Dashboard</Heading>
 */

import { cn } from "@/lib/utils"

interface HeadingProps {
  children: React.ReactNode,
  as?: "h1" | "h2" | "h3" | "h4" | "h5"
  className?: string
}

const variants = {
  h1: "text-xl lg:text-2xl font-semibold text-foreground",
  h2: "text-lg lg:text-xl font-semibold text-foreground",
  h3: "text-md lg:text-lg font-semibold text-foreground",
  h4: "text-sm lg:text-md font-semibold text-foreground",
  h5: "text-xs lg:text-sm font-semibold text-foreground",
}


const Heading = ({ children, as = "h1", className }: HeadingProps) => {

  const Tag = as
  const variantClass = variants[Tag as keyof typeof variants] ?? ""

  return (
    <Tag className={cn(variantClass, className)}>
      {children}
    </Tag>
  )
}

export default Heading
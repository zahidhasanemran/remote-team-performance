/**
 * Header for Secton card in the Dashboard area 
 * @props icon -
 * @props title -
 * @props className - 
 * @props badge - a ReactNode element 
 * @example <SectionHeader 
 *  icon={Calender}
 *  title="Tasks Due This Week"
 *  className=""
 *  badge = {<span>3 Tasks</span>}
 * />
 */

import Heading from "@/components/ui/Heading"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  icon?: React.ReactNode,
  title: string,
  className?: string
  badge: React.ReactNode,
}

const SectionHeader = ({ icon, title, className, badge }: SectionHeaderProps) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-x-2">
          {icon}
        </div>
        <Heading as="h2">{title}</Heading>
      </div>
      <div className="py-1 px-3 bg-secondary rounded-full">
        {badge}
      </div>
    </div>
  )
}

export default SectionHeader
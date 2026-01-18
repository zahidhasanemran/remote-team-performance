/**
 * AppButton - A Next js Link Component with primary and secondary variant
 * @param variant - primary or secondary
 * @param link - where it will take you 
 * @param label - what it will say
 * @returns A Link component with a default className and variant, primary is brand-primary, secondary is gray-200
 * @example
 * <AppButton variant="primary" link="/dashboard" label="Go to Dashboard" />
 * <AppButton variant="secondary" link="/dashboard" label="Go to Dashboard" />
 */

import Link from "next/link"
import { cn } from "@/lib/utils"

interface AppButtonProps {
  variant?: 'primary' | 'secondary'
  link: string
  label: string
}

const AppButton = ({
  variant = 'primary',
  link,
  label,
}: AppButtonProps) => {
  const variantStyles = {
    primary: "bg-brand-primary hover:bg-brand-primary/90 text-white font-medium",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white",
  }

  const baseStyles = "inline-flex items-center justify-center px-4 py-2 rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary focus:ring-offset-background"

  return (
    <Link
      href={link}
      className={cn(baseStyles, variantStyles[variant])}
    >
      {label}
    </Link>
  )
}

export default AppButton
export function getWeekRange(date: Date) {
  // logic
}

/**
 * Formats a date string (YYYY-MM-DD) or null into a human-readable format
 * @param dateString - Date string in format "YYYY-MM-DD" or null
 * @returns "Today", "Tomorrow", "Jan 12", "2d overdue", or empty string if null
 */
export function formatDueDate(dateString: string | null): string {
  if (!dateString) return "N/A"

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const dueDate = new Date(dateString)
  dueDate.setHours(0, 0, 0, 0)

  const diffTime = dueDate.getTime() - today.getTime()
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

  // Today
  if (diffDays === 0) {
    return "Today"
  }

  // Tomorrow
  if (diffDays === 1) {
    return "Tomorrow"
  }

  // Past dates (overdue)
  if (diffDays < 0) {
    const daysOverdue = Math.abs(diffDays)
    return `${daysOverdue}d overdue`
  }

  // Future dates (format as "Jan 12")
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const month = months[dueDate.getMonth()]
  const day = dueDate.getDate()

  return `${month} ${day}`
}
import { TeamMember } from "@/types/team"

export type Task = {
  id: number,
  title: string,
  assignee: TeamMember,
  dueDate: string | null
}
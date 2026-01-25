import { WorkloadStatusType } from "@/types/workload-status"

export type TeamMember = {
  name: string
  role: string
  workload: number
  status: WorkloadStatusType
  avatar: string
  hours: string
}
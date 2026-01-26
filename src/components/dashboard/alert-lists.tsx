
import SectionHeader from '@/components/ui/section-header'
import { AlertTriangle } from 'lucide-react'
import AlertCard from '../ui/alert-card'
import { WorkloadStatusType } from '@/types/workload-status'

interface AlertItem {
  id: number
  status: WorkloadStatusType
  title: string
  dueTime: string
}

const alertLists: AlertItem[] = [
  {
    id: 1,
    status: "warning",
    title: "Alex Rivera is overloaded this week (115% capacity)",
    dueTime: "2h ago"
  },
  {
    id: 2,
    status: "overload",
    title: "2 tasks are overdue and need attention",
    dueTime: "4 days ago"
  },
  {
    id: 3,
    status: "healthy",
    title: "Morgan Blake is approaching capacity limit",
    dueTime: "2h ago"
  },
  {
    id: 4,
    status: "underload",
    title: "Casey Lee has low utilization (40%)",
    dueTime: "4 days ago"
  }

]

const AlertLists = () => {
  return (
    <div className="my-3 bg-white rounded-lg">
      <div className="py-5 px-5 ">
        <div className="mb-3 pt-3 pb-5">
          <SectionHeader
            icon={<AlertTriangle className="w-6 h-6 text-brand-primary" />}
            title="Alerts"
            badge={<span className="text-xs">4 new</span>}
          />
        </div>
        <div className="mb-3">
          {alertLists?.map((alert) => (
            <AlertCard
              key={alert?.id}
              title={alert?.title}
              status={alert.status}
              time={alert.dueTime}
              className='mb-3'
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default AlertLists
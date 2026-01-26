import { Task } from "@/types/task"
import { TaskCard } from "@/components/ui/task-card"
import SectionHeader from "@/components/ui/section-header"
import { Calendar } from "lucide-react"

const tasks: Task[] = [
  {
    id: 1,
    title: "API Integration Review",
    assignee: {
      name: "Sarah Chen",
      role: "Lead Designer",
      workload: 85,
      status: "warning",
      avatar: "SC",
      hours: "38/40h"
    },
    dueDate: "2026-01-24",
  },
  {
    id: 2,
    title: "Design System Update",
    assignee: {
      name: "Marcus Johnson",
      role: "Frontend Dev",
      workload: 95,
      status: "overload",
      avatar: "MJ",
      hours: "44/40h"
    },
    dueDate: "2026-01-26"
  },
  {
    id: 3,
    title: "Bug Fix Priority",
    assignee: {
      name: "Emily Rodriguez",
      role: "Product Manager",
      workload: 65,
      status: "healthy",
      avatar: "ER",
      hours: "32/40h"
    },
    dueDate: null
  },
  {
    id: 4,
    title: "Design System Update",
    assignee: {
      name: "Marcus Johnson",
      role: "Frontend Dev",
      workload: 95,
      status: "overload",
      avatar: "MJ",
      hours: "44/40h"
    },
    dueDate: "2026-01-27"
  },
  {
    id: 5,
    title: "Bug Fix Priority",
    assignee: {
      name: "Emily Rodriguez",
      role: "Product Manager",
      workload: 65,
      status: "healthy",
      avatar: "ER",
      hours: "32/40h"
    },
    dueDate: "2026-02-05"
  }
]

const UpcommingTaskList = ({ }) => {
  return (
    <div className="my-3 bg-white rounded-lg">
      <div className="py-5 px-5 ">
        <div className="mb-3 pt-3 pb-5">
          <SectionHeader
            icon={<Calendar className="w-6 h-6 text-brand-primary" />}
            title="Tasks Due This Week"
            badge={<span className="text-xs">5 tasks</span>}
          />
        </div>
        {tasks?.map((task) => {
          return (
            <TaskCard status={task?.assignee?.status} key={task?.id} className="mb-3">
              <TaskCard.Container>
                <TaskCard.Title title={task?.title} />
                <TaskCard.AssigneeContainer>
                  <TaskCard.Avatar name={task?.assignee?.name} status={task?.assignee?.status} />
                  <TaskCard.AssingeeName name={task?.assignee.name} />
                </TaskCard.AssigneeContainer>
              </TaskCard.Container>
              <TaskCard.Date dueDate={task?.dueDate} status={task?.assignee?.status} />
            </TaskCard>
          )
        })}
      </div>
    </div>
  )
}

export default UpcommingTaskList
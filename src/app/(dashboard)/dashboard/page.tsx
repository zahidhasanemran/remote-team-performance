import UpcommingTaskList from '@/components/dashboard/upcoming-tasks-list'
import WorkloadBoard from '@/components/dashboard/workload-board'
import WorkloadSummary from '@/components/dashboard/workload-summary'
import Heading from '@/components/ui/Heading'
import MutedText from '@/components/ui/muted-text'


const Dashboard = () => {
  return (
    <div>
      <Heading as="h1" className="mb-1">Dashboard</Heading>
      <MutedText label='Monitor your teams workload and capacity at a glance.' />
      <section>
        <WorkloadSummary />
        <WorkloadBoard />
        <div className="flex gap-6">
          <div className="w-1/2">
            <UpcommingTaskList />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
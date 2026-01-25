import { cn } from "@/lib/utils"
import Heading from "../ui/Heading"
import MutedText from "../ui/muted-text"
import { workloadsummary } from "./constants/workloadsummary"


const WorkloadSummary = () => {
  return (
    <div className="py-5">
      <div className="flex flex-wrap gap-5 ">
        {workloadsummary?.map((workload) => (
          <div className="flex items-center justify-between border border-brand-primary py-3 px-4 gap-x-12 bg-white rounded min-w-[250px] " key={workload?.id}>
            <div className="left">
              <MutedText label={workload?.title} />
              <Heading as="h2">{workload?.count}</Heading>
            </div>
            <div className={cn("px-3 py-3 rounded-lg", workload.bgColor)}>
              <workload.icon className={cn("w-5 h-5", workload.color)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkloadSummary
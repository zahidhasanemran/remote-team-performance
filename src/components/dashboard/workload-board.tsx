import { STATUS_STYLES, teamMembers } from "@/lib/constants"
import Heading from "../ui/Heading"
import MutedText from "../ui/muted-text"
import WorkloadStatus from "../ui/workload-status"
import { UserIdentity } from "../ui/user-identity"
import { cn } from "@/lib/utils"



const WorkloadBoard = () => {
  return (
    <div className="my-3 bg-white">
      <div className="py-5 px-5 rounded-lg">
        <div className="top flex items-center justify-between">
          <div className="left">
            <Heading as="h2">Team Workload</Heading>
            <MutedText variants="md" label="Weekly capacity overview" />
          </div>
          <div className="flex items-center gap-4  ">
            <WorkloadStatus label="Balanced" status="balanced" />
            <WorkloadStatus label="Near capacity" status="warning" />
            <WorkloadStatus label="Overloaded" status="overload" />
            <WorkloadStatus label="Underutilized" status="underload" />
          </div>
        </div>

        {/* Board */}
        <div className="mt-5">
          {teamMembers?.map((team, index) => (
            <div className="flex items-center gap-x-12 mb-3" key={index}>
              <div className="w-[300px]">
                <UserIdentity>
                  <UserIdentity.Avatar name={team?.name} status={team?.status} />
                  <UserIdentity.Content>
                    <UserIdentity.Name name={team?.name} />
                    <UserIdentity.Designation designation={team.role} />
                  </UserIdentity.Content>
                </UserIdentity>
              </div>
              {/* bars  */}
              <div className="h-5 w-full bg-secondary overflow-hidden rounded-full">
                <div
                  style={{ width: `${team?.workload}%` }}
                  className={cn("h-full rounded-full  ", STATUS_STYLES[team?.status].dot)}
                ></div>
              </div>
              {/* working hours */}
              <div>
                <h2>{team?.hours}</h2>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default WorkloadBoard
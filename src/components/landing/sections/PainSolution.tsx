import { TrendingUp, CheckCircle2 } from "lucide-react"
import { painPoints } from "@/components/landing/constants/painpoints"

const PainSolution = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary ">
      <div className="container">
        <div
          className="px-4 md:px-0  text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Remote work visibility shouldn&apos;t be this hard
          </h2>
          <p className="text-md lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Most managers fly blind until someone burns out. There&apos;s a better way.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.pain}
              className="bg-white rounded-sm p-6"
            >
              <div className="flex flex-col h-full">

                <div className="mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${point.color} bg-current/10`}>
                    <point.icon className={`w-6 h-6 ${point.color}`} />
                  </div>

                  <p className="text-lg font-medium mb-0 text-foreground">
                    {point.pain}
                  </p>
                </div>


                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 border border-secondary" />
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <div className="h-px flex-1 border border-secondary" />
                </div>


                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-status-healthy" />
                    <span className="text-xs font-medium uppercase tracking-wider text-status-healthy">The solution</span>
                  </div>
                  <p className="text-muted-foreground">
                    {point.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PainSolution
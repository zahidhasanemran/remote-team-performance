import { ArrowRight } from "lucide-react"
import { steps } from "@/components/landing/content/howitworks"

const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container">
        <div
          className="px-4 md:px-0 text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-brand-primary/70 text-white mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Up and running in minutes
          </h2>
          <p className="text-md lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            No lengthy onboarding. No complex integrations. Just create, assign, and see.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">

          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-px">
            <div className="h-full bg-linear-to-r from-transparent via-border to-transparent" />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              <div className="text-center">

                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-brand border border-status-healthy shadow-lg flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-brand-primary text-white text-sm font-bold flex items-center justify-center shadow-md z-10">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
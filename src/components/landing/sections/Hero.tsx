import AppButton from "@/components/ui/app-button"
import HeroWorkloadDashboard from "@/components/landing/sections/HeroWorkloadDashboard"

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-white">
      <div className="container">
        <div>
          {/* Subtle gradient background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-linear-to-b from-accent/50 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="section-container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

              <div className="px-4 md:px-0 text-center lg:text-left" >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent text-accent-foreground border border-brand-primary/10"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                  </span>
                  Built for remote-first teams
                </div>

                <h1 className="text-3xl sm:text-4xl 2xl:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6!">
                  Know who&apos;s overloaded{" "}
                  <span className="gradient-text">before burnout happens</span>
                </h1>

                <p className="text-md sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8! leading-relaxed">
                  Visual workload intelligence for remote teams. No spying. No micromanagement.
                  Just clear visibility into who needs support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <AppButton link="/dashboard" label="View Demo">

                  </AppButton>
                  <AppButton
                    variant="secondary"
                    link="/demo"
                    label="Try with Sample Data"
                  >

                  </AppButton>
                </div>

                <div className="mt-8! flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-status-healthy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-status-healthy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    5-minute setup
                  </div>
                </div>
              </div>


              <div
                className="relative px-5 lg:px-0"
              >
                <HeroWorkloadDashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import AppButton from "@/components/ui/AppButton"

const FinalCTA = () => {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-linear-to-b from-background via-brand-primary/30 to-background" />
      <div className="container">
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="section-container">
            <div
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                See your teams workload clearly —{" "}
                <span className="gradient-text">starting today</span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                Stop guessing. Start supporting your team with real visibility.
                No credit card required to try.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AppButton
                  link="/demo"
                  label="Try Demo"
                />

              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-status-healthy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free to try
                </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
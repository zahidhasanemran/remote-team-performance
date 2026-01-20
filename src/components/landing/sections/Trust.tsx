import { trustPoints } from "../constants/trust"


const Trust = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary-light">
      <div className="container">
        <div

          className="px-4 md:px-0 text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full  bg-brand-primary/70 text-white mb-4">
            Built on Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            We believe in transparency, not surveillance
          </h2>
          <p className="text-md lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Great teams are built on trust. Our tools help you support your people, not spy on them.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <div
              key={point.title}

              className="flex items-start gap-4 p-5 rounded-xl bg-white border border-status-healthy hover:border-primary/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-primary/80 flex items-center justify-center shrink-0">
                <point.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trust
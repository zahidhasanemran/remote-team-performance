import { features } from "@/components/landing/content/features"


const Features = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary-light">
      <div className="container">
        <div
          className="px-4 md:px-0 text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-brand-primary/70 text-white mb-4">
            Core Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything you need to manage workload
          </h2>
          <p className="text-md lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, focused tools that give you clarity without complexity or surveillance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-md"
            >
              <div className="card-elevated p-6 h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-linear-to-br ${feature.color}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
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

export default Features
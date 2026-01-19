import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-sm text-muted-foreground">
              WorkloadIQ — Visual workload intelligence for remote teams
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
              Login
            </Link>
            <Link href="/register" className="text-muted-foreground hover:text-foreground transition-colors">
              Register
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WorkloadIQ. Built for remote-first teams.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
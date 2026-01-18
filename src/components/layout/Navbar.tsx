import Link from "next/link"
import AppButton from "@/components/ui/AppButton"

const Navbar = () => {
  return (
    <section className="w-full fixed bg-white/30 backdrop-blur-sm z-50">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-brand-primary flex items-center justify-center">
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
            <span className="font-semibold text-foreground hidden sm:block">WorkloadIQ</span>
          </div>
          <ul className="flex items-center gap-x-2">
            <li className="flex"><Link className="py-5 px-4 font-medium text-[16px] leading-5 font-mono " href="/">Home</Link></li>
            <li className="flex"><Link className="py-5 px-4 font-medium text-[16px] leading-5 font-mono " href="/login">Login</Link></li>
            <li className="flex">
              <AppButton
                link="/register"
                label="Get Started"
              />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
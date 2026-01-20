import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="block">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "components/footer"
import Navbar from "components/nav-bar"
import AuthProvider from "./context/auth-provider"
// import Navbar from "./components/Navbar"
// import AuthProvider from "./context/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NextAuth Tutorial",
  description: "Learn NextAuth.js by Dave Gray",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + "h-screen"}>
        <AuthProvider>
          <Navbar />
          <main className="flex flex-col items-start p-6">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

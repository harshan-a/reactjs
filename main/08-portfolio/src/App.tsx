import { useEffect } from "react"
import CustomCursor from "./Components/CustomCursor"
import Header from "./Components/Header"
import About from "./sections/About"
import Hero from "./sections/Hero"
import Work from "./sections/Work"
import Contact from "./sections/Contact"
import Footer from "./Components/Footer"
import axios from "axios"

export default function App() {
  async function registerVisitor() {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/visitors`,
        {},
        { withCredentials: true },
      )

      // await fetch(`${import.meta.env.VITE_BASE_URL}/visitors`, {
      //   method: "POST",
      //   credentials: "include",
      // })
      console.log("Visitor registered successfully")
    } catch (error) {
      console.error("Error registering visitor:", error)
    }
  }

  useEffect(() => {
    registerVisitor()
  }, [])

  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

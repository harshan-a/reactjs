import { useState, useEffect } from "react"
import mobileLogo from "../assets/logos/mobile-logo-new.svg"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -50, y: -50 })

  useEffect(() => {
    const updateMousePosition = (ev: PointerEvent) => {
      if (ev.pointerType === "mouse" || ev.pointerType === "pen") {
        setMousePosition({ x: ev.clientX, y: ev.clientY })
      }
      // const clientX = "clientX" in ev ? ev.clientX : ev.touches[0].clientX
      // const clientY = "clientY" in ev ? ev.clientY : ev.touches[0].clientY
    }

    window.addEventListener("pointermove", updateMousePosition)
    document.body.classList.add("custom-cursor")

    // window.addEventListener("mousemove", updateMousePosition)
    // window.addEventListener("touchmove", updateMousePosition)

    return () => {
      window.removeEventListener("pointermove", updateMousePosition)
      document.body.classList.remove("custom-cursor")
      // window.removeEventListener("mousemove", updateMousePosition)
      // window.removeEventListener("touchmove", updateMousePosition)
    }
  }, [])

  return (
    <div
      className="fixed w-6 h-6 rounded-full pointer-events-none -translate-1/2 transition-transform duration-100 ease-out z-10000"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}>
      <img src={mobileLogo} alt="Cursor Logo" className="w-full h-full" />
    </div>
  )
}

export default CustomCursor

import { useState, useEffect } from "react"
import mobileLogo from "../assets/mobile-logo-new.svg"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent | TouchEvent) => {
      const clientX = "clientX" in ev ? ev.clientX : ev.touches[0].clientX
      const clientY = "clientY" in ev ? ev.clientY : ev.touches[0].clientY
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("touchmove", updateMousePosition)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("touchmove", updateMousePosition)
    }
  }, [])

  return (
    <div
      className="fixed w-5 h-5 rounded-full pointer-events-none -translate-1/2 transition-transform duration-100 ease-out z-10000"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}>
      <img
        src={mobileLogo}
        alt="Cursor Logo"
        className="max-mobile:hidden w-full h-full"
      />
    </div>
  )
}

export default CustomCursor

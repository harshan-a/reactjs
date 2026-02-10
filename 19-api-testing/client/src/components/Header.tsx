// import logo from "../assets/logo-new.svg"
import type { Dispatch, SetStateAction } from "react"
import mobileLogo from "../assets/mobile-logo-new.svg"

type HeaderProps = {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export default function Header({ isLoggedIn, setIsLoggedIn }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full min-w-150 h-15 shadow-primary flex items-center z-100">
      <a href="#" className="w-fit h-[inherit] text-decoration-none absolute">
        <img
          className="mobile-logo py-1.75 px-2.5 box-border h-[inherit]"
          src={mobileLogo}
          alt="harshan-logo"
        />
        {/* <img className="logo" src={logo} alt="harshan-logo" /> */}
      </a>
      {isLoggedIn && (
        <span
          className="ml-auto mr-5 text-cyan-400 underline underline-offset-4 transition-all hover:text-cyan-500 active:scale-85 cursor-pointer select-none"
          onClick={() => setIsLoggedIn(false)}>
          Logout
        </span>
      )}
    </header>
  )
}

import type { Dispatch, SetStateAction } from "react"
import { Link } from "react-router"

import logo from "../assets/logo/logo.png"
import "./Header.css"

type HeaderProps = {
  onlyLogo: boolean
  signupHeader: boolean
  userRole: "client" | "freelancer" | undefined
  setUserRole: Dispatch<SetStateAction<"client" | "freelancer" | undefined>>
}

export default function Header({
  onlyLogo = false,
  signupHeader = false,
  userRole,
  setUserRole,
}: Partial<HeaderProps>) {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="upwork logo" className="logo" />
      </div>
      {!onlyLogo && (
        <>
          <nav className="links-container">
            <a>
              <span>Find talent </span>
              <span className="material-symbols-outlined links-arrow">
                keyboard_arrow_up
              </span>
            </a>
            <a>
              <span>Find work </span>
              <span className="material-symbols-outlined links-arrow">
                keyboard_arrow_up
              </span>
            </a>
            <a>
              <span>Why Upwork </span>
              <span className="material-symbols-outlined links-arrow">
                keyboard_arrow_up
              </span>
            </a>
            <a>
              <span>What's new </span>
              <span className="material-symbols-outlined links-arrow">
                keyboard_arrow_up
              </span>
            </a>
          </nav>
          <div className="buttons-container">
            <Link to="/auth/login">
              <button className="login-btn">Log in</button>
            </Link>
            <Link to="/auth/signup">
              <button className="signup-btn green-btn">Sign up</button>
            </Link>
          </div>
        </>
      )}
      {onlyLogo && signupHeader && userRole && (
        <div className="user-role-link-container">
          {userRole === "client" ? (
            <>
              <p>Looking for work?</p>
              <button
                onClick={() => {
                  if (setUserRole) setUserRole("freelancer")
                }}>
                Apply as talent
              </button>
            </>
          ) : (
            <>
              <p>Here to hire talent?</p>
              <button
                onClick={() => {
                  if (setUserRole) setUserRole("client")
                }}>
                Join as a Client
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

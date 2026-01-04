// import logo from "../assets/logo-new.svg"
import mobileLogo from "../assets/mobile-logo-new.svg"

import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <a href="#">
        <img className="mobile-logo" src={mobileLogo} alt="harshan-logo" />
        {/* <img className="logo" src={logo} alt="harshan-logo" /> */}
      </a>
      <h4></h4>
    </header>
  )
}

// import { NavLink } from "react-router"
import { HashLink } from "react-router-hash-link"

export default function Header() {
  return (
    <header className="header">
      <nav className="flex gap-x-9 max-tablet:gap-x-6 font-medium [&_a]:decoration-none [&_a]:hover:underline [&_a]:hover:text-cyan-400/80  [&_a]:underline-offset-4 [&_a]:active:scale-70 [&_a]:transition-all [&_a]:duration-200">
        <HashLink to="/#home" smooth>
          Hero
        </HashLink>
        <HashLink to="/#about" smooth>
          About
        </HashLink>
        <HashLink to="#work" smooth>
          Work
        </HashLink>
        <HashLink to="#contact" smooth>
          Contact
        </HashLink>
      </nav>
    </header>
  )
}

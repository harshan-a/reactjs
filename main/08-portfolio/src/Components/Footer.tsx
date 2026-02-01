import githubLogo from "../assets/logos/github-logo.svg"
import linkedinLogo from "../assets/logos/linkedin-logo.svg"
import emailLogo from "../assets/logos/email-logo.svg"

export default function Footer() {
  return (
    <footer className="py-5 flex flex-col items-center gap-y-4">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Harshan. built with react & tailwind
        css.
      </p>
      <nav className="grid grid-cols-[repeat(3,36px)] grid-rows-[36px] gap-x-2 *:rounded-full *:opacity-70 *:hover:opacity-100 *:active:scale-90 transition-all">
        <a
          href="https://github.com/harshan-a"
          target="_blank"
          className="bg-cyan-400 p-1">
          <img src={githubLogo} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/harshan-amuthan" target="_blank">
          <img src={linkedinLogo} alt="linkedin" />
        </a>
        <a href="mailto:contact@harshan.io" target="_blank">
          <img src={emailLogo} alt="email" />
        </a>
      </nav>
    </footer>
  )
}

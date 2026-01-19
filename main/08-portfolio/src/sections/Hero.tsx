import { HashLink } from "react-router-hash-link"
import profileImage from "../assets/profile-image.png"
import TypingText from "../Components/TypingText"
import TypeScriptLogo from "../assets/logos/typescript-logo.svg"
import NodejsLogo from "../assets/logos/nodejs-logo.svg"
import ReactjsLogo from "../assets/logos/reactjs-logo.svg"
import MongodbLogo from "../assets/logos/mongodb-logo.svg"
import ExpressLogo from "../assets/logos/expressjs-logo.svg"

export default function Hero() {
  const texts = [
    "Self-taught Developer.",
    "Student & Learner & Creator.",
    "I code better with music.",
  ]

  return (
    <section
      id="home"
      className="box-border pt-header-p px-3 h-svh flex flex-col items-start gap-x-6">
      <div className="profile-container">
        <img
          src={profileImage}
          alt="profile image"
          className="object-cover object-top pointer-events-none w-full h-full rounded-full absolute"
        />
      </div>
      <div className="mt-10 flex flex-col flex-1 w-full">
        <h1 className="flex flex-col text-2xl font-medium whitespace-nowrap">
          Hello, I'm
          <span className="text-cyan-400 whitespace-nowrap text-4xl">
            Harshan Amuthan.
          </span>
        </h1>
        <h1 className="flex flex-col text-gray-500 text-sm font-medium mt-1 font-mono">
          A Full Stack Developer
          <span className="whitespace-nowrap text-gray-500">& Designer.</span>
        </h1>
        <p className="mt-4 text-sm text-cyan-300 font-mono h-8 select-none text-end">
          <TypingText texts={texts} />
        </p>
        <div className="flex gap-x-3 mt-4 select-none">
          <a
            href="https://drive.google.com/file/d/1DZiBQGzbVnJe8TKjstYhqMXQKsyGEyyJ/view?usp=drive_link"
            target="_blank"
            className="px-6 py-2 bg-cyan-400 text-black font-bold rounded-full hover:bg-cyan-500 transition-all duration-200 active:scale-90 flex items-center gap-x-1">
            <span className="material-symbols-outlined text-black">
              article_person
            </span>
            Resume
          </a>
          <HashLink
            smooth
            to="/#about"
            className="px-6 py-2 bg-transparent text-cyan-400 border-2 border-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-200 active:scale-90">
            About &#10141;
          </HashLink>
        </div>
        <div className="flex justify-center gap-x-6 my-auto [&>img]:w-7 [&>img]:h-7 [&>img]:opacity-70 select-none [&>img]:pointer-events-none">
          <img src={ReactjsLogo} alt="React.js Logo" />
          <img src={TypeScriptLogo} alt="TypeScript Logo" />
          <img src={NodejsLogo} alt="Node.js Logo" />
          <img src={MongodbLogo} alt="MongoDB Logo" />
          <img src={ExpressLogo} alt="Express.js Logo" />
        </div>
      </div>
    </section>
  )
}

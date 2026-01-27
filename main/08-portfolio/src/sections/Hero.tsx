import { HashLink } from "react-router-hash-link"

import TypingText from "../Components/TypingText"

import profileImage from "../assets/images/profile-image.svg"
import typeScriptLogo from "../assets/logos/typescript-logo.svg"
import nodejsLogo from "../assets/logos/nodejs-logo.svg"
import reactjsLogo from "../assets/logos/reactjs-logo.svg"
import mongodbLogo from "../assets/logos/mongodb-logo.svg"
import expressLogo from "../assets/logos/expressjs-logo.svg"
import tailwindLogo from "../assets/logos/tailwindcss-logo.svg"
import ribbonImage from "../assets/images/ribbon.svg"

export default function Hero() {
  const texts = [
    "Self-taught Developer.",
    "Student & Learner & Creator.",
    "I code better with music.",
  ]

  return (
    <section
      id="home"
      className="box-border pt-header-p mx-3 min-h-svh flex flex-col items-center gap-y-4
      tablet:mx-6 tablet:flex-row-reverse tablet:gap-y-0 tablet:gap-x-15 desktop:gap-x-30 border-b border-b-gray-800">
      <div className="profile-container">
        <img
          src={profileImage}
          alt="profile image"
          className="object-cover object-top pointer-events-none w-full h-full rounded-full absolute"
        />
      </div>
      <div className="mt-10 flex flex-col flex-1 w-full tablet:mt-0 tablet:mx-5 tablet:flex-0 desktop:ml-auto">
        <h1 className="flex flex-col text-2xl font-medium whitespace-nowrap desktop:text-4xl">
          Hello, I'm
          <span className="text-cyan-400 whitespace-nowrap text-3xl desktop:text-5xl font-bold">
            Harshan Amuthan.
          </span>
        </h1>
        <h1 className="flex flex-col text-gray-500 text-sm font-medium mt-1 font-mono desktop:text-base">
          A Full Stack Developer
          <span className="whitespace-nowrap text-gray-500">& Designer.</span>
        </h1>
        <p className="mt-4 text-sm text-cyan-400 font-mono h-8 select-none text-end tablet:h-fit desktop:text-base">
          <TypingText texts={texts} />
        </p>
        <div className="flex gap-x-3 mt-4 select-none">
          <a
            href="https://drive.google.com/file/d/1DZiBQGzbVnJe8TKjstYhqMXQKsyGEyyJ/view?usp=drive_link"
            target="_blank"
            className="btn-primary px-5 py-2 ">
            <span className="material-symbols-outlined text-black">
              article_person
            </span>
            Resume
          </a>
          <HashLink smooth to="/#about" className="px-6 py-2 btn-secondary">
            About &#10141;
          </HashLink>
        </div>
        <div className="flex justify-center gap-x-6 my-auto [&>img]:w-7 [&>img]:h-7 [&>img]:opacity-70 select-none [&>img]:pointer-events-none py-4 tablet:[&>img]:w-6 tablet:[&>img]:h-6 tablet:[&>img]:opacity-90">
          <img src={reactjsLogo} alt="React.js Logo" />
          <img src={typeScriptLogo} alt="TypeScript Logo" />
          <img src={nodejsLogo} alt="Node.js Logo" />
          <img src={mongodbLogo} alt="MongoDB Logo" />
          <img src={expressLogo} alt="Express.js Logo" />
          <img src={tailwindLogo} alt="Tailwind CSS Logo" />
        </div>
      </div>
      <div className="desktop:block hidden h-85 self-start shrink-0 -mr-25 -mt-header-p">
        <img
          src={ribbonImage}
          alt="Ribbon Image"
          className="h-full pointer-events-none select-none"
        />
      </div>
    </section>
  )
}

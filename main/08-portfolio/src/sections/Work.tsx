import { useState } from "react"
import Title from "../Components/Title"

import projectsData from "../data/projects"

import githubLogo from "../assets/logos/github-logo.svg"

export default function Work() {
  const [projects, setProjects] = useState<
    "all" | "frontend" | "backend" | "fullstack"
  >("fullstack")

  return (
    <section id="work" className="main-section">
      <header className="main-section_header">
        <Title title={"what i’ve built?"} />
      </header>
      <main className="main-section_main">
        <p className="mb-5 text-secondary text-justify animate-slide-in-from-left">
          i’ve built a set of projects to showcase my web development knowledge,
          starting from simple static pages and progressing to complex web
          applications, developed using modern technologies and frameworks.
          projects are categorized into frontend, backend, and full-stack based
          on their functionality and development approach.
        </p>
        <select
          value={projects}
          onChange={(e) =>
            setProjects(
              e.currentTarget.value as
                | "all"
                | "frontend"
                | "backend"
                | "fullstack",
            )
          }
          name="projects"
          id="projects"
          className="ml-auto mb-5 p-2 bg-black border border-black rounded-sm hover:border-cyan-400 focus:border-cyan-400 focus:outline-none animate-slide-in-from-left">
          <option value="all">All Projects</option>
          <option value="frontend">Frontend Projects</option>
          <option value="backend">Backend Projects</option>
          <option value="fullstack">Full-Stack Projects</option>
        </select>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 *:animate-zoom-in">
          {projectsData
            .filter((project) => {
              if (projects === "all" || project.category === projects) {
                return true
              }
              return false
            })
            .map((project, index) => {
              return (
                <div
                  key={index}
                  className="p-4 rounded-lg max-w-125 mx-auto border border-cyan-400 flex shrink-0 flex-col">
                  <h3 className="text-xl mb-3 text-center text-cyan-400">
                    {project.title}
                  </h3>
                  <div className="rounded-md mb-3">
                    <img
                      src={project.image}
                      alt={`screenshot of ${project.title}`}
                      className="w-full aspect-video object-cover object-left rounded-[inherit]"
                    />
                  </div>
                  <p className="text-secondary text-justify mb-3">
                    {project.description}
                  </p>
                  <p className="text-gray-600 text-justify mb-5 text-[13px] font-mono">
                    {project.techStack.join(" • ")}
                  </p>
                  <div className="flex gap-x-2 mt-auto">
                    <a
                      href={project.repoLink}
                      title="github repo"
                      target="_blank"
                      className="btn-primary w-9 h-9 p-0.5">
                      <img
                        src={githubLogo}
                        alt="repo"
                        className="w-full h-full"
                      />
                    </a>
                    <a
                      href={project.demoLink}
                      title="demo"
                      target="_blank"
                      className="btn-secondary w-9 h-9 p-0.5 text-2xl">
                      &#10138;
                    </a>
                  </div>
                </div>
              )
            })}
        </div>
      </main>
    </section>
  )
}

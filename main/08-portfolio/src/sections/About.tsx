import Title from "../Components/Title"

import linkIcon from "../assets/icons/link-icon.svg"
import whoIAmImage from "../assets/images/who-i-am-image.svg"
import graduateImage from "../assets/images/graduate-image.svg"

export default function About() {
  const technicalSkills = [
    "html5",
    "css3",
    "javascript",
    "reactjs",
    "typescript",
    "tailwind css",
    "nodejs",
    "expressjs",
    "mongodb",
  ]
  return (
    <section id="about" className="main-section">
      <header className="main-section_header">
        <Title title="get to know me" />
      </header>
      <main className="main-section_main">
        {/* about me */}
        <section className="mb-10 text-lg tablet:text-md desktop:text-lg tablet:grid tablet:grid-cols-1 tablet:items-center tablet:justify-items-center tablet:gap-y-10 tablet:px-5 desktop:grid-cols-2 desktop:gap-x-10">
          <div className="hidden tablet:block w-full tablet:aspect-rectangle desktop:aspect-video p-4 rounded-lg  select-none animate-slide-in-from-left">
            <img
              src={whoIAmImage}
              alt="image"
              className="w-full h-full max-w-full object-cover object-top rounded-lg pointer-events-none"
            />
          </div>
          <div className="max-desktop:**:animate-slide-in-from-left desktop:**:animate-slide-in-from-right">
            <h2 className="subtitle">who I am</h2>
            <main>
              <p className="leading-relaxed text-justify text-secondary">
                i’m <span className="text-cyan-400">Harshan</span>, a final-year
                computer science and engineering student from Tamil Nadu with a
                strong interest in web development. i build responsive and
                modern web applications using reactjs and nodejs. i enjoy
                turning ideas into real, functional websites. most of my skills
                are self-taught using free online resources, documentation, and
                developer communities. i learn best by building projects and
                solving real problems. outside of coding, i love listening to
                music and continuously exploring new technologies in the web
                development world.
              </p>
            </main>
          </div>
        </section>

        {/* technical skills */}
        <section className="mb-10">
          <h2 className="subtitle animate-slide-in-from-left">
            technical skills
          </h2>
          <main className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-5 pt-4 text-sm *:animate-zoom-in">
            {technicalSkills.map((skill, i) => (
              <div
                key={i}
                className="relative rounded-full aspect-square before:content-[''] before:absolute before:rounded-[inherit] before:w-full before:h-full before:bg-[linear-gradient(100deg,cyan_80%,black_20%)] before:box-content before:scale-104 before:animate-spin-view">
                <p className="bg-black w-full h-full rounded-full flex items-center justify-center absolute text-secondary">
                  {skill}
                </p>
              </div>
            ))}
          </main>
        </section>

        {/* education */}
        <section>
          <h2 className="subtitle animate-slide-in-from-left">education</h2>
          <main className="tablet:grid tablet:grid-cols-1 tablet:items-center tablet:justify-items-start tablet:gap-y-10 desktop:grid-cols-2 desktop:gap-x-10">
            <div className="**:animate-slide-in-from-left">
              <div className="mb-5">
                <h3 className="font-semibold text-md">
                  Bachelor of Engineering in Computer Science and Engineering
                </h3>
                <p className="text-sm desktop:hover:[&>a]:inline-block text-secondary">
                  Velalar College of Engineering and Technology, Erode{" "}
                  <a
                    className="inline-block align-middle ml-1 mb-0.5 desktop:hidden "
                    href="https://www.velalarengg.ac.in/"
                    target="_blank">
                    <img src={linkIcon} className="h-3.25 w-3.25 mr-5" />
                  </a>
                </p>
                <p className="text-[13px] text-secondary">
                  2022 - <span className="text-cyan-400">Present</span>
                </p>
              </div>
              <div className="mb-5">
                <h3 className="font-semibold text-md">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-sm desktop:hover:[&>a]:inline-block text-secondary">
                  Kalaimagal Vidya Mandir, Salem
                </p>
                <p className="text-[13px] text-secondary">2021 - 2022</p>
                <p className="text-[13px] text-secondary">Percentage: 81.2%</p>
              </div>
              <div className="">
                <h3 className="font-semibold text-md">
                  Secondary School Leaving Certificate (SSLC)
                </h3>
                <p className="text-sm desktop:hover:[&>a]:inline-block text-secondary">
                  Kalaimagal Vidya Mandir, Salem
                </p>
                <p className="text-[13px] text-secondary">2019 - 2020</p>
                <p className="text-[13px] text-secondary">Percentage: 94.6%</p>
              </div>
            </div>
            <div className="hidden tablet:block w-full tablet:aspect-rectangle desktop:aspect-video p-4 rounded-lg  select-none max-desktop:animate-slide-in-from-left desktop:animate-slide-in-from-right">
              <img
                src={graduateImage}
                alt="image"
                className="w-full h-full max-w-full object-cover object-left rounded-lg pointer-events-none"
              />
            </div>
          </main>
        </section>
      </main>
    </section>
  )
}

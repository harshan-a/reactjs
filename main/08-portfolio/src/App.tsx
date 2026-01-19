import CustomCursor from "./Components/CustomCursor"
import Header from "./Components/Header"
import Hero from "./sections/Hero"

export default function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <div
        id="about"
        className="min-h-screen flex flex-col items-center justify-center pt-header-p">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">My Portfolio</h1>
        </header>
        <main className="w-full max-w-4xl px-4">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="leading-relaxed">
              Hello! I'm a passionate developer with experience in building web
              applications using modern technologies. I love creating beautiful
              and functional user interfaces.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Project One</h3>
                <p className="">
                  A web application that allows users to track their tasks and
                  manage their time effectively.
                </p>
              </div>
              <div className="p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Project Two</h3>
                <p className="">
                  An e-commerce platform that provides a seamless shopping
                  experience with a variety of products.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="mt-12">
          &copy; 2024 My Portfolio. All rights reserved.
        </footer>
      </div>
    </>
  )
}

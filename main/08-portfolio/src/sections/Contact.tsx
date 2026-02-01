import Title from "../Components/Title"
import Form from "../Components/Form"
import linkedinLogo from "../assets/logos/linkedin-logo.svg"
import emailLogo from "../assets/logos/email-logo.svg"
import locationLogo from "../assets/logos/location-logo.svg"

export default function Contact() {
  // console.log(import.meta.env.VITE_BASE_URL)
  return (
    <section id="contact" className="main-section">
      <header className="main-section_header">
        <Title title="get in touch" />
      </header>
      <main className="main-section_main flex flex-col desktop:flex-row gap-8 desktop:gap-16">
        <div className="flex-1 *:animate-slide-in-from-left **:text-secondary flex flex-col gap-y-6">
          <p className="text-justify">
            i’m currently open to new opportunities and collaborations. whether
            you have a question, want to discuss a project, or just want to say
            hello, feel free to reach out!
          </p>

          <nav className="*:animate-slide-in-from-left flex flex-col gap-y-5 pl-2">
            <a
              href="https://www.linkedin.com/in/harshan-amuthan"
              target="_blank"
              className="contact-link">
              <img src={linkedinLogo} alt="LinkedIn" />
              <span>linkedin.com/in/harshan-amuthan</span>
            </a>
            <a
              href="mailto:contact@harshan.io"
              target="_blank"
              className="contact-link">
              <img src={emailLogo} alt="Email" />
              <span>contact@harshan.io</span>
            </a>
            <a
              href="https://maps.app.goo.gl/wGfuxNDZVxmLvF4u6"
              target="_blank"
              className="contact-link">
              <img src={locationLogo} alt="Location" />
              <span>Salem, Tamil Nadu</span>
            </a>
          </nav>
          <p className="tracking-wide text-cyan-400! w-fit m-auto">
            thank you for visiting! &#128151;
          </p>
        </div>
        <Form />
      </main>
    </section>
  )
}

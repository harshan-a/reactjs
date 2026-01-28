import { useState, type FormEvent } from "react"
import axios from "axios"

import loadingGif from "../assets/icons/loading.gif"

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    try {
      setIsLoading(true)
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/feedbacks`,
        {
          name,
          email,
          message,
        },
        { withCredentials: true },
      )
      // await fetch(`${import.meta.env.VITE_BASE_URL}/feedback`, {
      //   method: "POST",
      //   credentials: "include",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ name, email, message }),
      // })
      document.body.classList.remove("custom-cursor")
      setTimeout(() => {
        alert("Thank you for your feedback!")
        document.body.classList.add("custom-cursor")
      }, 100)

      setIsLoading(false)
      setName("")
      setEmail("")
      setMessage("")
      console.log("Form submitted successfully")
    } catch (error) {
      document.body.classList.remove("custom-cursor")
      setTimeout(() => {
        alert("There was an error submitting the form. Please try again later.")
        document.body.classList.add("custom-cursor")
      }, 100)
      setIsLoading(false)
      console.error("Error submitting form:", error)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div
        className={`rounded-[inherit] absolute inset-0 flex items-center justify-center text-cyan-400 bg-black/90 backdrop-blur-sm transition-opacity ${isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {isLoading ? <img src={loadingGif} alt="Loading..." /> : ""}
      </div>
      <h2 className="text-lg font-semibold text-cyan-400">Feedback</h2>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        rows={4}
        className="[&::-webkit-scrollbar]:hidden max-h-50 resize-y min-h-10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required></textarea>
      <button
        type="submit"
        className="btn-primary text-sm mt-3 w-fit px-3 py-1.5">
        Send Message
      </button>
    </form>
  )
}

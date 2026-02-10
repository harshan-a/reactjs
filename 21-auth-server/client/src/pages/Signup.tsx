import {
  useState,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from "react"
import PasswordBar from "../components/PasswordBar"

type SignupProps = {
  redirectUrl: string
  setIsLogin: Dispatch<SetStateAction<boolean>>
}

export default function Signup({ redirectUrl, setIsLogin }: SignupProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match")
      return
    } else setErrorMessage("")

    window.location.href = redirectUrl
  }

  return (
    <>
      <h2 className="text-center mb-5">Signup</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="input-bar"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-bar"
          />
        </div>
        <PasswordBar password={password} setPassword={setPassword} />
        <div className="mb-4">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="input-bar"
          />
        </div>
        <button type="submit" className="submit-btn">
          Signup
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p className="text-center mt-4 ">
        Already have an account?{" "}
        <span
          className="underline cursor-pointer text-cyan-400"
          onClick={() => setIsLogin(true)}>
          Login
        </span>
      </p>
    </>
  )
}

import {
  useState,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from "react"
import EmailValidation from "../components/EmailValidation"
import PasswordBar from "../components/PasswordBar"

type LoginProps = {
  redirectUrl: string
  setIsLogin: Dispatch<SetStateAction<boolean>>
  setForgotPassword: Dispatch<SetStateAction<boolean>>
}

export default function Login({
  redirectUrl,
  setIsLogin,
  setForgotPassword,
}: LoginProps) {
  const [email, setEmail] = useState({ valid: false, mail: "" })
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    setErrorMessage("no error")

    window.location.href = redirectUrl
  }

  return (
    <>
      <h2 className="text-center mb-5">Login</h2>

      <form onSubmit={handleSubmit}>
        <EmailValidation input={email} setInput={setEmail} />
        <PasswordBar password={password} setPassword={setPassword} />
        <button
          type="submit"
          className={`submit-btn ${email.valid ? "" : "pointer-events-none opacity-50"}`}>
          Login
        </button>

        <p
          className="form-secondary-action"
          onClick={() => setForgotPassword(true)}>
          Forgot password?
        </p>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <span
          className="underline cursor-pointer text-cyan-400"
          onClick={() => setIsLogin(false)}>
          Signup
        </span>
      </p>
    </>
  )
}

import {
  useState,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from "react"
import PasswordBar from "../components/PasswordBar"

type ChangePasswordProps = {
  setForgotPassword: Dispatch<SetStateAction<boolean>>
}

export default function ChangePassword({
  setForgotPassword,
}: ChangePasswordProps) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) setErrorMessage("Passwords do not match")
    else setForgotPassword(false)
  }

  return (
    <>
      <h2 className="text-center mb-5">Enter New Password</h2>
      <form onSubmit={handleSubmit}>
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
        <button className={`submit-btn`}>Change Password</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  )
}

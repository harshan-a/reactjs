import {
  useState,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from "react"
import EmailValidation from "../components/EmailValidation"

type VerifyOTPProps = {
  setIsOTPVerified: Dispatch<SetStateAction<boolean>>
}

export default function VerifyOTP({ setIsOTPVerified }: VerifyOTPProps) {
  const [email, setEmail] = useState({ valid: false, mail: "" })
  const [isOTPSend, setIsOTPSend] = useState(false)
  const [otp, setOtp] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    if (isOTPSend) {
      setIsOTPVerified(true)
      setErrorMessage("otp verified")
    } else setIsOTPSend(true)
  }
  return (
    <>
      <h2 className="text-center mb-5">
        {isOTPSend ? "Verify OTP" : "Send OTP"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className={`${isOTPSend ? "opacity-50 pointer-events-none" : ""}`}>
          <EmailValidation input={email} setInput={setEmail} />
        </div>
        {isOTPSend && (
          <div className="mb-4">
            <input
              type="text"
              name="otp"
              placeholder="otp (only 6 digits)"
              value={otp}
              minLength={6}
              onChange={(e) =>
                setOtp((p) => {
                  if (
                    (Number(e.target.value) || e.target.value === "") &&
                    e.target.value.length <= 6
                  )
                    return e.target.value
                  return p
                })
              }
              required
              className="input-bar"
            />
          </div>
        )}
        <button
          className={`submit-btn ${email.valid ? "" : "pointer-events-none opacity-50"}`}>
          {isOTPSend ? "Verify otp" : "Send otp"}
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  )
}

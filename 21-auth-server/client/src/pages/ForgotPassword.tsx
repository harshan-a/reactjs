import { useState, type Dispatch, type SetStateAction } from "react"
import VerifyOTP from "./VerifyOTP"
import ChangePassword from "./ChangePassword"

type ForgotPasswordProps = {
  setForgotPassword: Dispatch<SetStateAction<boolean>>
}

export default function ForgotPassword({
  setForgotPassword,
}: ForgotPasswordProps) {
  const [isOTPVerified, setIsOTPVerified] = useState(false)

  return (
    <>
      {isOTPVerified ? (
        <ChangePassword setForgotPassword={setForgotPassword} />
      ) : (
        <>
          <VerifyOTP setIsOTPVerified={setIsOTPVerified} />
          <p
            className="form-secondary-action"
            onClick={() => setForgotPassword(false)}>
            Return to login
          </p>
        </>
      )}
    </>
  )
}

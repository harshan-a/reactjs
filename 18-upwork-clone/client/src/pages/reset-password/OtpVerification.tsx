import { useState, type ChangeEvent } from "react"
import InputBar from "../../components/InputBar"

type OtpVerificationProps = {
  setIsOptVerified: (p: boolean) => void
}

export default function OtpVerification({
  setIsOptVerified,
}: OtpVerificationProps) {
  const [otp, setOtp] = useState("")

  function handleOtpInput(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    if (Number(value) || value === "") {
      setOtp(value.trim())
    }
  }
  return (
    <div className="container reset-password otp">
      <h4>Password recovery</h4>
      <span>
        The 6 digits one-time-password(OTP) is send to{" "}
        <span>{"harshan2412005@gmail.com"}</span>
      </span>
      <div className="input-container">
        <InputBar
          type="text"
          placeholder="Enter OTP"
          title="Only numbers are allowed"
          maxLength={6}
          value={otp}
          handleValueChange={handleOtpInput}
        />
      </div>
      <button className="green-btn" onClick={() => setIsOptVerified(true)}>
        Verify OTP
      </button>
      <a>Resend</a>
    </div>
  )
}

import { Link } from "react-router"
import type { Dispatch, SetStateAction } from "react"
import InputBar from "../../components/InputBar"

type UserConformationProps = {
  setIsUserConformed: Dispatch<SetStateAction<boolean>>
}

export default function UserConformation({
  setIsUserConformed,
}: UserConformationProps) {
  return (
    <div className="container reset-password email">
      <h4>Password recovery</h4>
      <span>The email address associated with your Upword account.</span>
      <div className="input-container email-container">
        {/* <label htmlFor="email">Email</label> */}
        <InputBar
          type="text"
          maxLength={20}
          value={"hello"}
          handleValueChange={() => {}}
        />
      </div>
      <button
        className="green-btn"
        onClick={() => {
          // setIsLoading(true)
          setIsUserConformed(true)
        }}>
        Send OTP
      </button>
      <Link to="/auth/login">back</Link>
    </div>
  )
}

import { useState, type Dispatch, type SetStateAction } from "react"

import Checkbox from "../../components/Checkbox"

import eyeOpenIcon from "../../assets/icons/eye-open-icon.svg"
import eyeCloseIcon from "../../assets/icons/eye-close-icon.svg"
import passwordIcon from "../../assets/icons/password-icon.svg"

import "./PasswordSection.css"

type PasswordSectionProps = {
  setIsUserVerified: Dispatch<SetStateAction<boolean>>
}

export default function PasswordSection({
  setIsUserVerified,
}: PasswordSectionProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <h4>Welcome</h4>
      <p className="user">example@gmail.com</p>
      <div className="input-bar-container">
        <img
          src={passwordIcon}
          alt="lock"
          className="input-icon password-icon"
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="input-bar password-bar"
        />
        <button
          className="password-view-btn"
          // onMouseUp={handlePasswordView}
          // onMouseDown={handlePasswordView}
          onClick={() => setShowPassword((p) => !p)}>
          <img
            src={showPassword ? eyeOpenIcon : eyeCloseIcon}
            alt="show"
            className="eye-icon"
          />
        </button>
      </div>
      <div className="login-management-container">
        <Checkbox label={"Keep me logged in"} />
        <a href="#">Forgot Password?</a>
      </div>
      <button className="login-btn green-btn">Log in</button>
      <a onClick={() => setIsUserVerified(false)}>Not you?</a>
    </>
  )
}

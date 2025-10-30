import { useState } from "react"
import { Link } from "react-router"
import type { FormEvent } from "react"

import Checkbox from "../../components/Checkbox"

import eyeOpenIcon from "../../assets/icons/eye-open-icon.svg"
import eyeCloseIcon from "../../assets/icons/eye-close-icon.svg"

import "./SignupForm.css"

type SignupFormProps = {
  userRole: "client" | "freelancer"
}

export default function SignupForm({ userRole }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false)

  function handleFormSubmission(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("hello, world!!!")
  }

  return (
    <form className="signup-form" onSubmit={handleFormSubmission}>
      <h4>
        {userRole === "client"
          ? "Sign up to hire talent"
          : "Sign up to find work you love"}
      </h4>
      <div className="username-container">
        <div className="input-container first-name-container">
          <label htmlFor="first-name">First name</label>
          <div className="input-bar-container">
            <input
              required
              type="text"
              name="firstname"
              id="first-name"
              className="input-bar"
            />
          </div>
        </div>
        <div className="input-container last-name-container">
          <label htmlFor="last-name">Last name</label>
          <div className="input-bar-container">
            <input
              required
              type="text"
              name="lastname"
              id="last-name"
              className="input-bar"
            />
          </div>
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="email">
          {userRole === "client" ? "Work email address" : "Email"}
        </label>
        <div className="input-bar-container">
          <input required type="email" id="email" className="input-bar" />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <div className="input-bar-container">
          <input
            required
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password (8 or more characters)"
            minLength={8}
            className="input-bar password-bar"
          />
          <button
            type="button"
            className="password-view-btn"
            onClick={() => setShowPassword((p) => !p)}>
            <img src={showPassword ? eyeOpenIcon : eyeCloseIcon} alt="view" />
          </button>
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="country">Country</label>
        <div className="input-bar-container">
          <select name="country" id="country" className="input-bar">
            <option value="india">India</option>
          </select>
        </div>
      </div>
      <Checkbox
        label="Yes, I know this not a real upwork app"
        required={true}
      />
      <button type="submit" className="green-btn submit-btn">
        Create my account
      </button>
      <p>
        Already have an account? <Link to="/auth/login">Log In</Link>
      </p>
    </form>
  )
}

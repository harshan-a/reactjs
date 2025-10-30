import { useState } from "react"
import { Link } from "react-router"

import type { Dispatch, SetStateAction, ChangeEvent } from "react"

import userIcon from "../../assets/icons/user-icon.svg"

import "./UserSection.css"

type UserSectionProps = {
  setIsUserVerified: Dispatch<SetStateAction<boolean>>
}

export default function UserSection({ setIsUserVerified }: UserSectionProps) {
  const [userInput, setUserInput] = useState("")

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value)
  }

  function handleUserVerification() {
    console.log(userInput.trim())
    setTimeout(() => {
      setIsUserVerified(true)
    }, 100)
  }

  return (
    <>
      <h4>Log in to Upwork</h4>
      <div className="input-bar-container">
        <img src={userIcon} alt="user" className="input-icon user-icon" />
        <input
          type="text"
          placeholder="Username or Email"
          className="input-bar"
          onChange={handleInputChange}
          value={userInput}
        />
      </div>
      <button
        className="continue-btn green-btn"
        onClick={handleUserVerification}>
        Continue
      </button>
      <div className="sign-up-container">
        <p>Don't have an Upwork account?</p>
        <Link to="/auth/signup">Sign Up</Link>
      </div>
    </>
  )
}

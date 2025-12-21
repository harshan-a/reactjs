import { useState, useContext } from "react"
import { Link } from "react-router"
import axios from "axios"

import type { Dispatch, SetStateAction } from "react"

import api from "../../api"
import InputBar from "../../components/InputBar"

import { LoadingSetterContext } from "../../App"

import "./UserSection.css"

type UserSectionProps = {
  setIsUserVerified: Dispatch<SetStateAction<boolean>>
  setUser: Dispatch<SetStateAction<unknown>>
}

export default function UserSection({
  setIsUserVerified,
  setUser,
}: UserSectionProps) {
  const [userInput, setUserInput] = useState("")
  const [error, setError] = useState("")

  const setIsLoading = useContext(LoadingSetterContext)

  async function handleUserVerification() {
    try {
      setIsLoading(true)
      const { data: response } = await api.get(
        "/api/v1/auth/check-user?email=" + userInput.trim()
      )

      // const response = { data: { email: "harshan2412005@gmail.com" } }

      setIsLoading(false)

      setUser(response.data)
      setIsUserVerified(true)
      console.log(response)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) setError(err.response.data.msg)
        else if (err.request) setError(err.message)

        console.log(err)
      } else setError("Something went wrong, please try again later!!!")
      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <>
      <h4>Log in to Upwork</h4>
      <div className="input-container">
        <InputBar
          type="user"
          value={userInput}
          handleValueChange={(e) => {
            setUserInput(e.target.value)
            setError("")
          }}
          handleKeyDown={(e) => {
            if (e.key === "Enter") handleUserVerification()
          }}
          placeholder="Username or Email"
        />
        <span className="api-error-span">{error}</span>
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

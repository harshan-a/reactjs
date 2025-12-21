import { useContext, useState, useEffect } from "react"
import { Link } from "react-router"
import type { FormEvent } from "react"
import api from "../../api"
import axios from "axios"

import { LoadingSetterContext } from "../../App"
import Checkbox from "../../components/Checkbox"
import InputBar from "../../components/InputBar"

import "./SignupForm.css"

type SignupFormProps = {
  userRole: "client" | "freelancer"
}

export default function SignupForm({ userRole }: SignupFormProps) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [country, setCountry] = useState("india")

  const [error, setError] = useState("")

  const setIsLoading = useContext(LoadingSetterContext)

  useEffect(() => {
    setError("")
  }, [firstName, lastName, email, password, country, userRole])

  async function handleFormSubmission(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()
      setIsLoading(true)
      const response = await api.post("/api/v1/auth/register", {
        firstName,
        lastName,
        email,
        password,
        country,
        role: userRole,
      })
      setIsLoading(false)

      console.log(response.data)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) setError(err.response.data.msg)
        if (err.request) setError(err.message)
      }
      setIsLoading(false)
    }
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
          <InputBar
            type="text"
            id="first-name"
            maxLength={20}
            value={firstName}
            handleValueChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container last-name-container">
          <label htmlFor="last-name">Last name</label>
          <InputBar
            type="text"
            id="last-name"
            maxLength={20}
            value={lastName}
            handleValueChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="email">
          {userRole === "client" ? "Work email address" : "Email"}
        </label>
        <InputBar
          type="email"
          id="email"
          value={email}
          handleValueChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <InputBar
          type="passwordWithBtn"
          id="password"
          placeholder="Password (8 or more characters)"
          minLength={8}
          value={password}
          handleValueChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="country">Country</label>
        <div className="input-bar-container">
          <select
            name="country"
            id="country"
            className="input-bar"
            value={country}
            onChange={(e) => setCountry(e.target.value)}>
            <option value="india">India</option>
          </select>
        </div>
      </div>
      <Checkbox
        label="Yes, I know this not a real upwork app"
        required={true}
      />
      <span className="api-error-span">{error}</span>
      <button type="submit" className="green-btn submit-btn">
        Create my account
      </button>
      <p>
        Already have an account? <Link to="/auth/login">Log In</Link>
      </p>
    </form>
  )
}

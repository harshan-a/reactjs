import {
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react"
import { Link } from "react-router"
import axios from "axios"

import api from "../../api"
import { LoadingSetterContext } from "../../App"
import Checkbox from "../../components/Checkbox"
import InputBar from "../../components/InputBar"

import "./PasswordSection.css"

type PasswordSectionProps = {
  setIsUserVerified: Dispatch<SetStateAction<boolean>>
  user: { email: string; _id: string }
  setUser: Dispatch<SetStateAction<unknown>>
}

export default function PasswordSection({
  setIsUserVerified,
  user,
  setUser,
}: PasswordSectionProps) {
  const [password, setPassword] = useState("")
  const [keepLogin, setKeepLogin] = useState(false)
  const [error, setError] = useState("")

  const setIsLoading = useContext(LoadingSetterContext)

  useEffect(() => {
    setError("")
  }, [password])

  async function handleLogin() {
    console.log(keepLogin)
    try {
      setIsLoading(true)
      const response = await api.post("/api/v1/auth/login", {
        email: user.email,
        password,
      })
      setIsLoading(false)
      console.log(response.data)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) setError(err.response.data.msg)
        else if (err.request) setError(err.message)
      } else setError("Something went wrong, please try again later!!!")

      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <>
      <h4>Welcome</h4>
      <p className="user">{user.email}</p>
      <div className="input-container">
        <InputBar
          type="passwordWithIconAndBtn"
          value={password}
          handleValueChange={(e) => setPassword(e.target.value)}
          handleKeyDown={(e) => {
            if (e.key === "Enter") handleLogin()
          }}
          placeholder="Password"
        />
        <span className="api-error-span">{error}</span>
      </div>
      <div className="login-management-container">
        <Checkbox
          label="Keep me logged in"
          checked={keepLogin}
          setChecked={setKeepLogin}
        />
        <Link to={"/auth/reset-password/" + user._id}>Forgot Password?</Link>
      </div>
      <button className="login-btn green-btn" onClick={handleLogin}>
        Log in
      </button>
      <a
        onClick={() => {
          setUser(null)
          setIsUserVerified(false)
        }}>
        Not you?
      </a>
    </>
  )
}

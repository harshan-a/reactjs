import { useState } from "react"

import Header from "../../components/Header"
import UserSection from "./UserSection"
import PasswordSection from "./PasswordSection"

import "./LoginPage.css"

export default function LoginPage() {
  const [isUserVerified, setIsUserVerified] = useState(false)
  return (
    <>
      <Header onlyLogo={true} />
      <div className="wrapper">
        <div className="container">
          {isUserVerified ? (
            <PasswordSection setIsUserVerified={setIsUserVerified} />
          ) : (
            <UserSection setIsUserVerified={setIsUserVerified} />
          )}
        </div>
      </div>
    </>
  )
}

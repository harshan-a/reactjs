import { useState } from "react"

import Header from "../../components/Header"
import UserSection from "./UserSection"
import PasswordSection from "./PasswordSection"

import "./LoginPage.css"

export default function LoginPage() {
  const [user, setUser] = useState<unknown>(null)
  const [isUserVerified, setIsUserVerified] = useState(false)
  return (
    <>
      <Header onlyLogo={true} />
      <div className="wrapper">
        <div className="container">
          {isUserVerified ? (
            <PasswordSection
              setIsUserVerified={setIsUserVerified}
              user={user as { email: string; _id: string }}
              setUser={setUser}
            />
          ) : (
            <UserSection
              setIsUserVerified={setIsUserVerified}
              setUser={setUser}
            />
          )}
        </div>
      </div>
    </>
  )
}

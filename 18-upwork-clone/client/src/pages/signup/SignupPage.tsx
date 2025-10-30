import { useState } from "react"

import Header from "../../components/Header"
import UserRole from "./UserRole"
import SignupForm from "./SignupForm"

import "./SignupPage.css"

export default function SignupPage() {
  const [userRole, setUserRole] = useState<"client" | "freelancer" | undefined>(
    undefined
  )
  return (
    <>
      <Header
        onlyLogo={true}
        signupHeader={true}
        userRole={userRole}
        setUserRole={setUserRole}
      />
      <div className="signup-wrapper">
        {userRole ? (
          <SignupForm userRole={userRole} />
        ) : (
          <UserRole setUserRole={setUserRole} />
        )}
      </div>
    </>
  )
}

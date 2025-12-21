import {
  useEffect,
  useState,
  // useContext
} from "react"
import { useParams } from "react-router"
// import { LoadingSetterContext } from "../../App"
import UserConformation from "./UserConformation"
import OtpVerification from "./OtpVerification"
import PasswordChange from "./PasswordChange"

import "./ResetPassword.css"

// type ResetPasswordProps = {
//   setIsLoading: (p: boolean) => void
// }

export default function ResetPassword() {
  // const setIsLoading = useContext(LoadingSetterContext)
  const [user, setUser] = useState<unknown>(null)

  const [isOptVerified, setIsOptVerified] = useState(false)
  const [isUserConformed, setIsUserConformed] = useState(false)

  const { id: userId } = useParams()

  useEffect(() => {}, [userId])

  return (
    <>
      <div className="wrapper">
        {isOptVerified ? (
          <PasswordChange />
        ) : !isUserConformed ? (
          <UserConformation setIsUserConformed={setIsUserConformed} />
        ) : (
          <OtpVerification setIsOptVerified={setIsOptVerified} />
        )}
      </div>
    </>
  )
}

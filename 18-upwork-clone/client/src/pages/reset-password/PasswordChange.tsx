import { useEffect, useState, type ChangeEvent } from "react"
import InputBar from "../../components/InputBar"

export default function PasswordChange() {
  const [newPass, setNewPass] = useState("")
  const [reEnteredPass, setReEnteredPass] = useState("")

  useEffect(() => {
    if (newPass !== reEnteredPass) console.log("password not matched")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reEnteredPass])

  function handleNewPassInput(e: ChangeEvent<HTMLInputElement>) {
    const { value: newPass } = e.target
    setNewPass(newPass)
  }

  function handleReEnteredPassInput(e: ChangeEvent<HTMLInputElement>) {
    const { value: reEnteredPass } = e.target
    setReEnteredPass(reEnteredPass)
  }

  return (
    <div className="container reset-password email">
      <h4>Enter New password</h4>
      <div className="input-container">
        <label htmlFor="new-password">New password</label>
        <InputBar
          type="passwordWithBtn"
          id="new-password"
          maxLength={20}
          value={newPass}
          handleValueChange={handleNewPassInput}
        />
      </div>
      <div className="input-container">
        <label htmlFor="re-entered-password">Re-enter password</label>
        <InputBar
          id="re-entered-password"
          type="password"
          maxLength={20}
          value={reEnteredPass}
          handleValueChange={handleReEnteredPassInput}
        />
      </div>
      <button className="green-btn" onClick={() => {}}>
        Change Password
      </button>
      <a href="/auth/login">back to login</a>
    </div>
  )
}

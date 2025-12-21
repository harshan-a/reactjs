import {
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  // type Dispatch,
  // type SetStateAction,
} from "react"

import clsx from "clsx"

import userIcon from "../assets/icons/user-icon.svg"
import eyeOpenIcon from "../assets/icons/eye-open-icon.svg"
import eyeCloseIcon from "../assets/icons/eye-close-icon.svg"
import passwordIcon from "../assets/icons/password-icon.svg"

import "./InputBar.css"

type InputBarProps = {
  type:
    | "text"
    | "email"
    | "user"
    | "password"
    | "passwordWithIconAndBtn"
    | "passwordWithBtn"
  placeholder?: string
  value: string
  handleValueChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void

  id?: string
  minLength?: number
  maxLength?: number
  title?: string
}

export default function InputBar({
  type,
  value,
  handleValueChange,
  handleKeyDown = () => {},
  placeholder,
  id,
  minLength,
  maxLength,
  title,
}: InputBarProps) {
  const [showPassword, setShowPassword] = useState(false)

  const inputBarClass = clsx(
    "input-bar",
    type !== "text" &&
      type !== "password" &&
      type !== "email" && [
        type !== "passwordWithBtn" && "with-icon",
        type === "user" ? "user-bar" : "password-bar",
      ]
  )

  const barType =
    type === "text" || type === "user"
      ? "text"
      : type === "email"
      ? "email"
      : showPassword
      ? "text"
      : "password"

  return (
    <div className="input-bar-container">
      {type === "user" && (
        <img src={userIcon} alt="user" className="input-icon user-icon" />
      )}
      {type === "passwordWithIconAndBtn" && (
        <img
          src={passwordIcon}
          alt="lock"
          className="input-icon password-icon"
        />
      )}
      <input
        type={barType}
        placeholder={placeholder}
        className={inputBarClass}
        onChange={handleValueChange}
        onKeyDown={handleKeyDown}
        value={value}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
        title={title}
        required
      />
      {(type === "passwordWithIconAndBtn" || type === "passwordWithBtn") && (
        <button
          className="password-view-btn"
          // onMouseUp={handlePasswordView}
          // onMouseDown={handlePasswordView}
          onClick={(e) => {
            e.preventDefault()
            setShowPassword((p) => !p)
          }}>
          <img
            src={showPassword ? eyeOpenIcon : eyeCloseIcon}
            alt="show"
            className="eye-icon"
          />
        </button>
      )}
    </div>
  )
}

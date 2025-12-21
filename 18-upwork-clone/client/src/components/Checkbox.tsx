import type { Dispatch, SetStateAction } from "react"
import checkmark from "../assets/icons/checkmark.svg"

import "./Checkbox.css"

type CheckboxProps = {
  label?: string
  required?: boolean
  checked?: boolean
  setChecked?: Dispatch<SetStateAction<boolean>>
}

export default function Checkbox({
  label = "",
  required = false,
  checked = undefined,
  setChecked = () => {},
}: CheckboxProps) {
  return (
    <label htmlFor="check-box" className="check-box-container">
      <div className="check-box">
        <input
          type="checkbox"
          name="check-box"
          id="check-box"
          required={required}
          checked={checked}
          onChange={() => setChecked((p) => !p)}
        />
        <img src={checkmark} alt="checked" />
      </div>
      {label}
    </label>
  )
}

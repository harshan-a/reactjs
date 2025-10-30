import checkmark from "../assets/icons/checkmark.svg"

import "./Checkbox.css"

type CheckboxProps = {
  label?: string
  required?: boolean
}

export default function Checkbox({
  label = "",
  required = false,
}: CheckboxProps) {
  return (
    <label htmlFor="check-box" className="check-box-container">
      <div className="check-box">
        <input
          type="checkbox"
          name="check-box"
          id="check-box"
          required={required}
        />
        <img src={checkmark} alt="checked" />
      </div>
      {label}
    </label>
  )
}

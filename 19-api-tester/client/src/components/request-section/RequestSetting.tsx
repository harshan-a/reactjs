import { useState } from "react"

import type { Dispatch, SetStateAction } from "react"

import CloseButton from "../CloseButton"

import "./RequestSetting.css"

type RequestSettingProps = {
  setBaseUrl: Dispatch<SetStateAction<string>>
  setShowSetBaseUrl: Dispatch<SetStateAction<boolean>>
}

export default function RequestSetting({
  setBaseUrl,
  setShowSetBaseUrl,
}: RequestSettingProps) {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <div className="request-setting">
      <span
        className="material-symbols-rounded icon"
        onClick={() => setShowOptions((p) => !p)}>
        settings
      </span>
      <div className={`setting-options ${showOptions && "show"}`}>
        <CloseButton eventHandler={() => setShowOptions(false)} />

        <span
          className="option"
          onClick={() => {
            setShowSetBaseUrl(true)
            setShowOptions(false)
          }}>
          Set base url
        </span>

        <span
          className="option"
          onClick={() => {
            setBaseUrl("")
            setShowOptions(false)
          }}>
          Remove base url
        </span>
      </div>
    </div>
  )
}

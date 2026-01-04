import { useState, type Dispatch, type SetStateAction } from "react"
import "./SetBaseUrl.css"

type SetBaseUrlProps = {
  baseUrl: string
  setBaseUrl: Dispatch<SetStateAction<string>>
  setShowSetBaseUrl: Dispatch<SetStateAction<boolean>>
}

export default function SetBaseUrl({
  baseUrl,
  setBaseUrl,
  setShowSetBaseUrl,
}: SetBaseUrlProps) {
  const [urlInput, setUrlInput] = useState(baseUrl)

  function handleSetUrl() {
    setBaseUrl(urlInput.trim())
    setShowSetBaseUrl(false)
  }

  return (
    <div className="set-base-url-wrapper">
      <div className="container">
        <label htmlFor="base-url">Base Url</label>
        <input
          type="text"
          id="base-url"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSetUrl()
          }}
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          autoFocus
        />
        <div className="btn-container">
          <button className="text-btn" onClick={handleSetUrl}>
            Set
          </button>
          <button
            className="text-btn"
            onClick={() => {
              setShowSetBaseUrl(false)
            }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

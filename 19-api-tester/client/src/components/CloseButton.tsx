import "./CloseButton.css"

type CloseButtonProps = {
  eventHandler: () => void
}

export default function CloseButton({ eventHandler }: CloseButtonProps) {
  return (
    <button className="close-btn" onClick={eventHandler}>
      <span className="material-symbols-outlined">close</span>
    </button>
  )
}

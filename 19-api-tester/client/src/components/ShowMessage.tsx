import "./ShowMessage.css"

type ShowMessageProps = {
  message: string
}

export default function ShowMessage({ message }: ShowMessageProps) {
  return (
    <div className="display-msg show-msg-action">
      <div className="show-msg-wrapper">
        <span className="msg">{message}</span>
      </div>
    </div>
  )
}

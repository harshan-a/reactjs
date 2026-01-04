import { useContext } from "react"

import type { Dispatch, SetStateAction } from "react"
import type { RequestType } from "../../utils/types"

import "./Request.css"
import { SetDeletionDataContext } from "../../Contexts"

type RequestProps = {
  request: RequestType
  collectionId: string
  setSelectedRequest: Dispatch<SetStateAction<RequestType | null>>
}

export default function Request({
  request,
  collectionId,
  setSelectedRequest,
}: RequestProps) {
  const name = request.req_name
  const setDeletionData = useContext(SetDeletionDataContext)

  function handleRequestClick() {
    setSelectedRequest(request)
  }

  return (
    <div className="saved-req">
      <span
        className="saved-req-name"
        title={name}
        onClick={handleRequestClick}>
        {name}
      </span>
      <span
        className="material-symbols-rounded delete-request google-symbols-rounded"
        title="delete"
        onClick={() =>
          setDeletionData({
            ...request,
            type: "request",
            col_id: collectionId,
          })
        }>
        delete
      </span>
    </div>
  )
}

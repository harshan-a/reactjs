import type { Dispatch, SetStateAction } from "react"
import type { RequestType } from "../../utils/types"

import Request from "./Request"

import "./Requests.css"

type RequestsProps = {
  requests: RequestType[]
  collectionId: string
  showRequests: boolean
  setSelectedRequest: Dispatch<SetStateAction<RequestType | null>>
}

export default function Requests({
  requests,
  collectionId,
  showRequests,
  setSelectedRequest,
}: RequestsProps) {
  return (
    <div className={"saved-req-wrapper" + (showRequests ? " clicked" : "")}>
      {/* ${await createSavedReqHTML(collection) || ""} */}
      {requests.map((request, i) => {
        return (
          <Request
            key={i}
            request={request}
            collectionId={collectionId}
            setSelectedRequest={setSelectedRequest}
          />
        )
      })}
    </div>
  )
}

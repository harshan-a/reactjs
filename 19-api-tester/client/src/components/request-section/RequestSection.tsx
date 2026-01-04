import { useState } from "react"

import type { Dispatch, SetStateAction } from "react"
import type { CollectionType, RequestType } from "../../utils/types"

import RequestSelected from "./RequestSelected"
import RequestCreate from "./RequestCreate"

import "./RequestSection.css"

type RequestSectionProps = {
  selectedRequest: RequestType | null
  setSelectedRequest: Dispatch<SetStateAction<RequestType | null>>
  collections: CollectionType[]
}

export default function RequestSection({
  selectedRequest,
  setSelectedRequest,
  collections,
}: RequestSectionProps) {
  const [baseUrl, setBaseUrl] = useState("")
  const [request, setRequest] = useState<Omit<RequestType, "_id">>({
    req_name: "",
    req_method: "GET",
    req_url: "",
    contains_body: false,
    req_body: "",
    req_res: {
      status_code: 0,
      status_text: "",
      data: "",
    },
  })

  return (
    <>
      {selectedRequest ? (
        <RequestSelected
          selectedRequest={selectedRequest as RequestType}
          setSelectedRequest={
            setSelectedRequest as Dispatch<SetStateAction<RequestType>>
          }
        />
      ) : (
        <RequestCreate
          collections={collections}
          request={request}
          setRequest={setRequest}
          baseUrl={baseUrl}
          setBaseUrl={setBaseUrl}
        />
      )}
    </>
  )
}

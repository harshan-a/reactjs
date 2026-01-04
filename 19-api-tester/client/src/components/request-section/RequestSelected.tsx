import { useContext, type Dispatch, type SetStateAction } from "react"
import type { RequestMethodType, RequestType } from "../../utils/types"

import CloseButton from "../CloseButton"

import { handleSendRequest } from "../../api/handleSendRequest"
import {
  AllowToSaveContext,
  LoadCollectionsContext,
  SetAllowToSaveContext,
  SetShowMessageContext,
} from "../../Contexts"
import api from "../../api"
import { AxiosError } from "axios"

type RequestSelectedProps = {
  selectedRequest: RequestType
  setSelectedRequest: Dispatch<SetStateAction<RequestType>>
}

export default function RequestSelected({
  selectedRequest,
  setSelectedRequest,
}: RequestSelectedProps) {
  const allowToSave = useContext(AllowToSaveContext)
  const setAllowToSave = useContext(SetAllowToSaveContext)
  const setShowMessage = useContext(SetShowMessageContext)
  const loadCollections = useContext(LoadCollectionsContext)

  async function handleSaveRequest() {
    try {
      await api.patch(
        "/api/v1/requests/" + selectedRequest._id,
        selectedRequest
      )

      setAllowToSave(false)
      setShowMessage("Changes saved successfully.")
      loadCollections()
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          setShowMessage(err.response?.data.message)
          console.log(err.response?.data.message)
        } else setShowMessage(err.message)
      }
      console.log(err)
    }
  }

  return (
    <section className="req-sending-section">
      <div className="req-sending-section-header">
        <div className="sending-title">{selectedRequest.req_name}</div>
        <CloseButton
          eventHandler={() => {
            setSelectedRequest(null as unknown as RequestType)
          }}
        />
      </div>
      <div className="sending-wrapper">
        <div className="send-req-wrapper">
          <select
            name="req-method"
            className="req-method-drop-down"
            value={selectedRequest.req_method}
            onChange={(e) =>
              setSelectedRequest((prev) => ({
                ...prev,
                req_method: e.target.value as RequestMethodType,
              }))
            }>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>

          <input
            type="text"
            placeholder="Enter the url"
            title={selectedRequest.req_url}
            value={selectedRequest.req_url}
            onChange={(e) =>
              setSelectedRequest((prev) => ({
                ...prev,
                req_url: e.target.value,
              }))
            }
          />

          <button
            className="text-btn send-req-btn"
            onClick={() =>
              handleSendRequest(
                selectedRequest,
                setSelectedRequest as Dispatch<
                  SetStateAction<RequestType | Omit<RequestType, "_id">>
                >,
                setShowMessage,
                setAllowToSave
              )
            }>
            Send
          </button>
        </div>
        <div
          className={
            "req-body-wrapper " +
            (selectedRequest.contains_body ? "show-body-text-area" : "")
          }>
          {/*add class = show-body-text-area*/}
          <button
            className="text-btn body-btn"
            onClick={() =>
              setSelectedRequest((prev) => ({
                ...prev,
                contains_body: !selectedRequest.contains_body,
              }))
            }>
            {!selectedRequest.contains_body ? "Set request body" : "Unset body"}
          </button>
          <div className="text-area-wrapper">
            <textarea
              placeholder={`JSON Syntex:  {"property": "value"} `}
              value={selectedRequest.req_body}
              onChange={(e) =>
                setSelectedRequest((prev) => ({
                  ...prev,
                  req_body: e.target.value,
                }))
              }></textarea>
            {/* add <textarea></textarea>*/}
          </div>
        </div>
        <div className="display-res-wrapper" title="response">
          <div className="res-status-wrapper">
            <span className="status-code">
              {selectedRequest.req_res.status_code ? (
                <>
                  Status Code: {selectedRequest.req_res.status_code}
                  &nbsp;&nbsp;&nbsp;
                </>
              ) : (
                ""
              )}
            </span>
            <span className="status-text">
              {selectedRequest.req_res.status_text
                ? "Status Text: " + selectedRequest.req_res.status_text
                : ""}
            </span>
          </div>
          <pre className="display-data">{selectedRequest.req_res.data}</pre>
        </div>
        <div
          className={`save-req-wrapper save-req-changes-wrapper ${
            allowToSave ? "allow-to-save" : ""
          }`}>
          <input
            type="text"
            value={selectedRequest.req_name}
            onChange={(e) =>
              setSelectedRequest((prev) => ({
                ...prev,
                req_name: e.target.value,
              }))
            }
            placeholder="Req Name"
          />
          <button
            className="text-btn save-req-changes-btn"
            title="Send before Save the changes"
            onClick={handleSaveRequest}>
            Save Changes
          </button>
        </div>
      </div>
    </section>
  )
}

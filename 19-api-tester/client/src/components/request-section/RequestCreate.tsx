import {
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react"
import type {
  CollectionType,
  RequestMethodType,
  RequestType,
} from "../../utils/types"

import RequestSetting from "./RequestSetting"
import SetBaseUrl from "./SetBaseUrl"

import { handleSendRequest } from "../../api/handleSendRequest"
import {
  AllowToSaveContext,
  LoadCollectionsContext,
  SetAllowToSaveContext,
  SetShowMessageContext,
} from "../../Contexts"
import api from "../../api"
import { AxiosError } from "axios"

type RequestCreateProps = {
  collections: CollectionType[]
  request: Omit<RequestType, "_id">
  setRequest: Dispatch<SetStateAction<Omit<RequestType, "_id">>>
  baseUrl: string
  setBaseUrl: Dispatch<SetStateAction<string>>
}

export default function RequestCreate({
  collections,
  request,
  setRequest,
  baseUrl,
  setBaseUrl,
}: RequestCreateProps) {
  const [collectionIdToSave, setCollectionIdToSave] = useState("")
  const [showSetBaseUrl, setShowSetBaseUrl] = useState(false)
  const allowToSave = useContext(AllowToSaveContext)
  const setAllowToSave = useContext(SetAllowToSaveContext)
  const setShowMessage = useContext(SetShowMessageContext)
  const loadCollections = useContext(LoadCollectionsContext)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCollectionIdToSave(collections[0]?._id)
  }, [collections])

  async function handleSaveRequest() {
    try {
      const {
        data: { data },
      } = await api.post("/api/v1/requests", {
        ...request,
        req_url: baseUrl + request.req_url,
      })

      await api.patch(
        "/api/v1/collections/" + collectionIdToSave + "?op=push",
        {
          reqId: data._id,
        }
      )

      setAllowToSave(false)
      setShowMessage("Request saved successfully.")
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
        <div className="sending-title">Request Creation</div>
        <RequestSetting
          setBaseUrl={setBaseUrl}
          setShowSetBaseUrl={setShowSetBaseUrl}
        />
      </div>
      <div className="sending-wrapper">
        <div className="send-req-wrapper">
          <select
            name="req-method"
            className="req-method-drop-down"
            value={request.req_method}
            onChange={(e) =>
              setRequest((prev) => ({
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
            title={request.req_url}
            value={request.req_url}
            onChange={(e) =>
              setRequest((prev) => ({ ...prev, req_url: e.target.value }))
            }
          />

          <button
            className="text-btn send-req-btn"
            onClick={() =>
              handleSendRequest(
                request,
                setRequest,
                setShowMessage,
                setAllowToSave,
                baseUrl
              )
            }>
            Send
          </button>

          {baseUrl && (
            <span className="request-base-url" title={baseUrl}>
              base url: <span>{baseUrl}</span>
            </span>
          )}
        </div>
        <div
          className={
            "req-body-wrapper " +
            (request.contains_body ? "show-body-text-area" : "")
          }>
          {/*add class = show-body-text-area*/}
          <button
            className="text-btn body-btn"
            onClick={() =>
              setRequest((prev) => ({
                ...prev,
                contains_body: !request.contains_body,
              }))
            }>
            {!request.contains_body ? "Set request body" : "Unset body"}
          </button>
          <div className="text-area-wrapper">
            <textarea
              placeholder={`JSON Syntex:  {"property": "value"} `}
              value={request.req_body}
              onChange={(e) =>
                setRequest((prev) => ({ ...prev, req_body: e.target.value }))
              }></textarea>
            {/* add <textarea></textarea>*/}
          </div>
        </div>
        <div className="display-res-wrapper" title="response">
          <div className="res-status-wrapper">
            <span className="status-code">
              {request.req_res.status_code ? (
                <>
                  Status Code: {request.req_res.status_code}
                  &nbsp;&nbsp;&nbsp;
                </>
              ) : (
                ""
              )}
            </span>
            <span className="status-text">
              {request.req_res.status_text
                ? "Status Text: " + request.req_res.status_text
                : ""}
            </span>
          </div>
          <pre className="display-data">{request.req_res.data}</pre>
        </div>
        <div
          className={`save-req-wrapper ${allowToSave ? "allow-to-save" : ""}`}>
          {/* <label>Select collection</label> */}
          <select
            name="collection-save"
            className="collection-to-save-req"
            value={collectionIdToSave}
            onChange={(e) => setCollectionIdToSave(e.target.value)}>
            {collections.map((collection) => {
              return (
                <option key={collection._id} value={collection._id}>
                  {collection.col_name}
                </option>
              )
            })}
          </select>
          <input
            type="text"
            value={request.req_name}
            onChange={(e) =>
              setRequest((prev) => ({ ...prev, req_name: e.target.value }))
            }
            placeholder="Req Name"
          />
          <button className="text-btn save-req-btn" onClick={handleSaveRequest}>
            Save
          </button>
        </div>
      </div>

      {showSetBaseUrl && (
        <SetBaseUrl
          baseUrl={baseUrl}
          setBaseUrl={setBaseUrl}
          setShowSetBaseUrl={setShowSetBaseUrl}
        />
      )}
    </section>
  )
}

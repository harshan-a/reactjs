import { useContext, type Dispatch, type SetStateAction } from "react"
import type { RequestType, CollectionType } from "../utils/types"

import api from "../api"

import "./DeleteComponent.css"
import { SetAllowToSaveContext, SetShowMessageContext } from "../Contexts"
import { AxiosError } from "axios"

type DeleteComponentProps = {
  deletionData: Required<RequestType> | Required<CollectionType>
  setDeletionData: Dispatch<
    SetStateAction<Required<RequestType> | Required<CollectionType> | null>
  >
  setSelectedRequest: Dispatch<SetStateAction<RequestType | null>>
  loadCollections: () => void
}

export default function DeleteComponent({
  deletionData,
  setDeletionData,
  loadCollections,
  setSelectedRequest,
}: DeleteComponentProps) {
  const setShowMessage = useContext(SetShowMessageContext)
  const setAllowToSave = useContext(SetAllowToSaveContext)
  async function deleteRequest(id: string, colId: string) {
    try {
      await api.delete("/api/v1/requests/" + id)

      await api.patch(`/api/v1/collections/${colId}?op=pull`, {
        reqId: id,
      })
      setShowMessage("Request Deleted Successfully.")
      setSelectedRequest(null)
      loadCollections()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err instanceof AxiosError) {
        if (err.response) {
          setShowMessage(err.response?.data.message)
          console.log(err.response?.data.message)
        } else setShowMessage(err.message)
      }
      if ("message" in err) {
        setShowMessage(err.message)
      }
      console.log(err)
      setAllowToSave(false)
    }
  }
  async function deleteCollection(collection: Required<CollectionType>) {
    try {
      await api.delete("/api/v1/collections/" + collection._id)
      setShowMessage("Collection Deleted Successfully.")
      setSelectedRequest(null)
      loadCollections()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err instanceof AxiosError) {
        if (err.response) {
          setShowMessage(err.response?.data.message)
          console.log(err.response?.data.message)
        } else setShowMessage(err.message)
      }
      if ("message" in err) {
        setShowMessage(err.message)
      }
      console.log(err)
      setAllowToSave(false)
    }
  }

  async function handleDeletion() {
    if (deletionData.type === "request")
      await deleteRequest(deletionData._id, deletionData.col_id)
    else await deleteCollection(deletionData)

    setDeletionData(null)
  }

  return (
    <div className="delete-component-wrapper">
      <div className="container">
        {/* <CloseButton eventHandler={() => setShowDeleteComp(null)} /> */}
        <p>
          Are you sure to delete a {deletionData.type}
          {" : "}
          <b>
            {"col_name" in deletionData
              ? deletionData.col_name
              : deletionData.req_name}
          </b>
        </p>
        <div className="btn-container">
          <button className="text-btn" onClick={() => handleDeletion()}>
            Yes
          </button>
          <button className="text-btn" onClick={() => setDeletionData(null)}>
            No
          </button>
        </div>
      </div>
    </div>
  )
}

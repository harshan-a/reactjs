import { useState, useContext, useEffect } from "react"

import type { Dispatch, SetStateAction } from "react"
import type { CollectionType, RequestType } from "../../utils/types"

import Requests from "./Requests"

import { SetDeletionDataContext } from "../../Contexts"
import api from "../../api"

import "./Collection.css"

type CollectionProps = {
  collection: CollectionType
  setSelectedRequest: Dispatch<SetStateAction<RequestType | null>>
}

export default function Collection({
  collection,
  setSelectedRequest,
}: CollectionProps) {
  const [requests, setRequests] = useState<RequestType[]>([])
  const [showRequests, setShowRequests] = useState(false)

  const setDeletionData = useContext(SetDeletionDataContext)

  useEffect(() => {
    async function loadRequests() {
      try {
        const {
          data: { data: requests },
        } = await api.get(
          "/api/v1/requests?all=false&reqIds=" + collection.req_ids
        )
        // console.log(requests)
        setRequests(requests)
      } catch (err) {
        console.log(err)
      }
    }
    loadRequests()
  }, [collection])

  async function handleCollectionClick() {
    setShowRequests((p) => !p)
    // if (!showRequests) {
    //   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    //   !requests.length && (await loadRequests())
    // }
  }

  return (
    <div className="collection">
      <div className="collection-name-wrapper">
        <span
          className="collection-name"
          title={collection.col_name}
          onClick={handleCollectionClick}>
          <span
            className={
              "arrow material-symbols-outlined" +
              (showRequests ? " clicked" : "")
            }>
            arrow_right
          </span>{" "}
          {collection.col_name}
        </span>
        <span
          className={
            "material-symbols-rounded google-symbols-rounded delete-collection"
          }
          title="delete"
          onClick={() =>
            setDeletionData({ ...collection, type: "collection" })
          }>
          delete
        </span>
      </div>
      <Requests
        setSelectedRequest={setSelectedRequest}
        requests={requests}
        collectionId={collection._id}
        showRequests={showRequests}
      />
    </div>
  )
}

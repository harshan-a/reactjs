import type { Dispatch, SetStateAction } from "react"
import type { CollectionType, RequestType } from "../../utils/types"

import Collection from "./Collection"

import "./Collections.css"

type CollectionsProps = {
  collections: CollectionType[]
  setSelectedRequest: Dispatch<SetStateAction<RequestType | null>>
}

export default function Collections({
  collections,
  setSelectedRequest,
}: CollectionsProps) {
  return (
    <div className="saved-collection-wrapper">
      {collections.map((collection, i) => {
        return (
          <Collection
            key={i}
            collection={collection}
            setSelectedRequest={setSelectedRequest}
          />
        )
      })}
    </div>
  )
}

import Collections from "./Collections"
import type { CollectionType, RequestType } from "../../utils/types"

import "./CollectionSection.css"
import type { Dispatch, SetStateAction } from "react"

type CollectionSectionProps = {
  collections: CollectionType[]
  setSelectedRequest: Dispatch<SetStateAction<RequestType | null>>
  setShowCreateCollection: Dispatch<SetStateAction<boolean>>
}

export default function CollectionSection({
  collections,
  setSelectedRequest,
  setShowCreateCollection,
}: CollectionSectionProps) {
  return (
    <section className="req-collection-section">
      <div className="collection-title">Collections</div>

      <div className="create-collection">
        <span>Collection</span>
        <button
          className="char-btn create-collection-btn"
          onClick={() => setShowCreateCollection(true)}>
          +
        </button>
      </div>

      <Collections
        collections={collections}
        setSelectedRequest={setSelectedRequest}
      />
    </section>
  )
}

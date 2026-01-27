import { useContext, useState, type Dispatch, type SetStateAction } from "react"

import api from "../api"

import "./CreateCollection.css"
import { AxiosError } from "axios"
import { SetAllowToSaveContext, SetShowMessageContext } from "../Contexts"

type CreateCollectionProps = {
  setShowCreateCollection: Dispatch<SetStateAction<boolean>>
  loadCollections: () => void
}

export default function CreateCollection({
  setShowCreateCollection,
  loadCollections,
}: CreateCollectionProps) {
  const [input, setInput] = useState("")

  const setShowMessage = useContext(SetShowMessageContext)
  const setAllowToSave = useContext(SetAllowToSaveContext)

  async function handleCreation() {
    try {
      await api.post("/api/v1/collections", { col_name: input })
      setShowCreateCollection(false)
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

  return (
    <div className="create-collection-wrapper">
      <div className="container">
        <label htmlFor="create-collection">Collection Name</label>
        <input
          type="text"
          id="create-collection"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleCreation()
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <div className="btn-container">
          <button className="text-btn" onClick={handleCreation}>
            Create
          </button>
          <button
            className="text-btn"
            onClick={() => {
              setShowCreateCollection(false)
            }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

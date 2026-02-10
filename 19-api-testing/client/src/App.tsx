import { useEffect, useState } from "react"

import type { CollectionType, RequestType } from "./utils/types"

import Header from "./components/Header"
import CollectionSection from "./components/collection-section/CollectionSection"
import RequestSection from "./components/request-section/RequestSection"
import DeleteComponent from "./components/DeleteComponent"

import {
  AllowToSaveContext,
  SetAllowToSaveContext,
  SetDeletionDataContext,
  SetShowMessageContext,
  LoadCollectionsContext,
} from "./Contexts"
import api from "./api"

import "./App.css"
import CreateCollection from "./components/CreateCollection"
import ShowMessage from "./components/ShowMessage"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [collections, setCollections] = useState<CollectionType[]>([])
  const [selectedRequest, setSelectedRequest] = useState<RequestType | null>(
    null,
  )
  const [deletionData, setDeletionData] = useState<
    Required<RequestType> | Required<CollectionType> | null
  >(null)
  const [showCreateCollection, setShowCreateCollection] = useState(false)
  const [showMessage, setShowMessage] = useState("")
  const [allowToSave, setAllowToSave] = useState(false)

  const loadCollections = async () => {
    try {
      const {
        data: { data: collections },
      } = await api.get("/api/v1/collections")
      // console.log(collections)
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      collections && setCollections(collections)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = `${import.meta.env.VITE_AUTH_URL}?redirect_url=${import.meta.env.VITE_AUTH_REDIRECT_URL}`
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      loadCollections()
    }
  }, [isLoggedIn])

  useEffect(() => {
    const timeId = showMessage
      ? setTimeout(() => {
          setShowMessage("")
        }, 2000)
      : undefined
    return () => clearTimeout(timeId)
  }, [showMessage])

  if (isLoggedIn) {
    return (
      <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main>
          <SetDeletionDataContext.Provider value={setDeletionData}>
            <SetShowMessageContext.Provider value={setShowMessage}>
              <SetAllowToSaveContext.Provider value={setAllowToSave}>
                <AllowToSaveContext.Provider value={allowToSave}>
                  <LoadCollectionsContext.Provider value={loadCollections}>
                    <CollectionSection
                      collections={collections}
                      setSelectedRequest={setSelectedRequest}
                      setShowCreateCollection={setShowCreateCollection}
                    />

                    <RequestSection
                      selectedRequest={selectedRequest}
                      setSelectedRequest={setSelectedRequest}
                      collections={collections}
                    />

                    {deletionData && (
                      <DeleteComponent
                        deletionData={deletionData}
                        setDeletionData={setDeletionData}
                        loadCollections={loadCollections}
                        setSelectedRequest={setSelectedRequest}
                      />
                    )}
                    {showCreateCollection && (
                      <CreateCollection
                        setShowCreateCollection={setShowCreateCollection}
                        loadCollections={loadCollections}
                      />
                    )}
                    {showMessage && <ShowMessage message={showMessage} />}
                  </LoadCollectionsContext.Provider>
                </AllowToSaveContext.Provider>
              </SetAllowToSaveContext.Provider>
            </SetShowMessageContext.Provider>
          </SetDeletionDataContext.Provider>
        </main>
      </>
    )
  } else return <>Loading...</>
}

export default App

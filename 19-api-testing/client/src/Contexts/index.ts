import { createContext, type Dispatch, type SetStateAction } from "react"
import type { RequestType, CollectionType } from "../utils/types"

export const SetDeletionDataContext = createContext<
  Dispatch<
    SetStateAction<Required<RequestType> | Required<CollectionType> | null>
  >
>(() => {})

export const SetShowMessageContext = createContext<
  Dispatch<SetStateAction<string>>
>(() => {})

export const AllowToSaveContext = createContext<boolean>(false)

export const SetAllowToSaveContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {})

export const LoadCollectionsContext = createContext(() => {})

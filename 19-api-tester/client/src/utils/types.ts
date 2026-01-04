export type RequestMethodType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

export type CollectionType = {
  type?: "collection"
  _id: string
  col_name: string
  req_ids: string[]
}

export type RequestType = {
  type?: "request"
  col_id?: string
  _id: string
  req_name: string
  req_method: RequestMethodType
  req_url: string
  contains_body: boolean
  req_body: string
  req_res: {
    status_code: number
    status_text: string
    data: string
  }
}

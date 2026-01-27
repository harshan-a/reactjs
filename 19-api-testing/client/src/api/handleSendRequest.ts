import axios, { AxiosError } from "axios"
import type { Dispatch, SetStateAction } from "react"
import type { RequestType } from "../utils/types"

export async function handleSendRequest(
  request: Omit<RequestType, "_id"> | RequestType,
  setRequest: Dispatch<SetStateAction<Omit<RequestType, "_id"> | RequestType>>,
  setShowMessage: Dispatch<SetStateAction<string>>,
  setAllowToSave: Dispatch<SetStateAction<boolean>>,
  baseUrl: string = ""
) {
  type HttpMethod = "get" | "post" | "patch" | "put" | "delete"
  const method: HttpMethod =
    request.req_method.toLocaleLowerCase() as HttpMethod

  setRequest((p) => ({
    ...p,
    req_res: {
      data: "",
      status_code: 0,
      status_text: "",
    },
  }))

  try {
    let response
    if (method === "get" || method === "delete") {
      if (request.contains_body) {
        setShowMessage("Body is not allowed for method " + method)
        return
      }
      response = await axios[method](baseUrl + request.req_url, {
        validateStatus: function (status) {
          return status < 500 // Resolve only if the status code is less than 500
        },
      })
    } else {
      if (!request.contains_body) {
        setShowMessage("Body is required for method " + method)
        return
      }
      let body = request.req_body
      try {
        body = JSON.parse(body)
      } catch (err) {
        setShowMessage("Invalid JSON data")
        console.log(err)
        return
      }
      response = await axios[method](baseUrl + request.req_url, body, {
        validateStatus: function () {
          return true // Resolve only if the status code is less than 500
        },
      })
    }

    let responseData = response.data
    if (typeof response.data === "object") {
      responseData = JSON.stringify(response.data, undefined, 2)
    }

    setRequest((p) => ({
      ...p,
      req_res: {
        data: responseData,
        status_code: response.status,
        status_text: response.statusText,
      },
    }))
    setAllowToSave(true)
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

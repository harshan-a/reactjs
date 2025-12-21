import { Routes, Route } from "react-router"
import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
} from "react"

import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/login/LoginPage"
import SignupPage from "./pages/signup/SignupPage"
import ResetPassword from "./pages/reset-password/ResetPassword"

import "./App.css"

// eslint-disable-next-line react-refresh/only-export-components
export const LoadingSetterContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {})

function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      {isLoading && (
        <div className="loading-wrapper">
          <div className="loading"></div>
        </div>
      )}
      <LoadingSetterContext.Provider value={setIsLoading}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/reset-password/:id" element={<ResetPassword />} />
        </Routes>
      </LoadingSetterContext.Provider>
    </>
  )
}

export default App

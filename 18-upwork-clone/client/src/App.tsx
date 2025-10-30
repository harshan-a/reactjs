import { Routes, Route } from "react-router"

import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/login/LoginPage"
import SignupPage from "./pages/signup/SignupPage"

import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App

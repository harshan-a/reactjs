import Form from "./pages/Form"
import Header from "./components/Header"

function App() {
  const params = new URLSearchParams(window.location.search)
  const redirectUrl = params.get("redirect_url")
  const pkceCodeChallenger = params.get("pkce_code_challenger")
  // console.log(redirectUrl, pkceCodeChallenger)

  if (!redirectUrl || !pkceCodeChallenger) {
    return <span className="text-white">Unexpected Error...</span>
  }
  return (
    <>
      <Header />
      <Form redirectUrl={redirectUrl} />
    </>
  )
}

export default App

import "./App.css"

function App() {
  return (
    <>
      <div className="grid grid-cols-3 mt-2">
        <div className="bg-green-500 w-16 h-16 rounded-full order-3"></div>
        <div className="bg-blue-500 w-16 h-16 rounded-full order-1"></div>
        <div className="bg-orange-500 w-16 h-16 rounded-full order-1"></div>
      </div>
    </>
  )
}

export default App

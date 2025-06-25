import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import './index.css'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Honeycomb background */}
      <div className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App

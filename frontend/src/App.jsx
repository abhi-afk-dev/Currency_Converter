import './App.css'
import { Routes, Route } from 'react-router-dom'
import Interface from "./pages/interface"

function App() {

  return (
    <Routes>
        <Route path='/' element={<Interface/>} />
    </Routes>
  )
}

export default App

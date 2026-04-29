import { Route, Routes } from 'react-router'
import { Homepage } from '../pages/Homepage'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="checkout" element={<div>Test checkout page</div>} />
      </Routes>

    </>
  )
}

export default App

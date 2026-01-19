import React from 'react'
import Landing from './pages/Landing'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App
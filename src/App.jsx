import React from 'react'
import Landing from './pages/Landing'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
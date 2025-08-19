import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Loader from './components/loader'
import Timeline from './components/Schedule'
import { events } from './utils/utils'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/schedule" element={<Timeline events={events} />} />
      </Routes>
    </Router>  
  )
}

export default App

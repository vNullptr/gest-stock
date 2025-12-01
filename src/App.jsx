import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>

    </Router>
  )
}

export default App
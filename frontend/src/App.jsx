import React from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import api from './api/axios'
import {useNavigate} from 'react-router-dom'

const App = () => {

  return (
    <Router>

      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Main/>}></Route>
      </Routes>

    </Router>
  )
}

export default App
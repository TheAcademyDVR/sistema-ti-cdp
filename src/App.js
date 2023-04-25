import React from "react"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from "./login/login"
import Signup from "./register/signup"
import Home from "./home/home"
import Dashboard from "./dashboard.js/dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

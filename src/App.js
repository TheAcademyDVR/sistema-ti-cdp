import React from "react"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from "./login/login"
import Signup from "./register/signup"
import Home from "./home/home"
import Dashboard from "./dashboard.js/dashboard"
import Users from "./user/users"
import Profile from "./user/profile"
import UsersAdd from "./user/usersAdd"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Dashboard />}>
          <Route path='' element={<Home />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/create' element={<UsersAdd />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

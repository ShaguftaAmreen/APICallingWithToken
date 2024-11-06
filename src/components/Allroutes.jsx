import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'
import Profile from './Profile'
import Home from './Home'
const Allroutes = () => {
  return (
    <div>
      <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/login' element={<Login />} />
     <Route path='/getData' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default Allroutes;

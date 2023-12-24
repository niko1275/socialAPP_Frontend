

import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'

export const AuthRouter = () => {
  return (

    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='*' element={<Navigate to='/login'/>} />
    </Routes>
  )
}

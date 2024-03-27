import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/User.js'

function Login() {
    const dispatch = useDispatch()

  return (
    <div>
    <button onClick={() => {dispatch(login({name: "Iggi", age: 22, email: "Iggi@gmail.com"}))
    }}>Login</button>
    <button onClick={() => {dispatch(logout())}}>Logout</button>
    </div>
  )
}

export default Login
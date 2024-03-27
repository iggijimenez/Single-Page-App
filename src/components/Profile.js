import React from 'react'
import { useSelector } from 'react-redux'
// import { userSlice } from '../features/User'

function Profile() {
    const user = useSelector((state) => state.user.value)
    const themeColor = useSelector((state) => state.theme.value)

  return (
    <div style={{color: themeColor}}>
    <h1> Home page</h1>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile;
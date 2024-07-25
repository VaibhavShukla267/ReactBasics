import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user}=useContext(UserContext)
  
    if(!user) return <div>Please Login</div>

    return( <>
    <div>Welcome {user.Username}</div>
    <div>Your College is {user.College}</div>
    <div>Your Branch is {user.Branch}</div>
    </>
    )
    
   
  
}

export default Profile
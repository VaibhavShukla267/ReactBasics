import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [Username,setUsername]=useState("")
    const [Password,setPassword]=useState("")

    const [College,setCollege]=useState("")
    const [Branch,setBranch]=useState("")


    const {setUser}=useContext(UserContext)


    const handleclick=(e)=>{
        e.preventDefault()
        setUser({Username,Password,College,Branch})
        

    }

  return (
    <>
    <h2>Login</h2>
    <div style={{display:'flex'}}>
    <input
    placeholder='Enter Your Name' 
    type='text'
    value={Username}
    onChange={(e)=>{setUsername(e.target.value)}}
    style={{padding:'22px', margin:'29px'}}
    ></input>
    <input
    style={{padding:'22px', margin:'29px'}}
    placeholder='Enter Your Password' 
    type='text'
    value={Password}
    onChange={(e)=>{setPassword(e.target.value)}}
    ></input>
    <input
    style={{padding:'22px', margin:'29px'}}
    placeholder='Enter Your College Name' 
    type='text'
    value={College}
    onChange={(e)=>{setCollege(e.target.value)}}
    ></input>
    <input
    style={{padding:'22px', margin:'29px'}}
    placeholder='Enter Your Branch' 
    type='text'
    value={Branch}
    onChange={(e)=>{setBranch(e.target.value)}}
    ></input>

</div>
<button
   style={{padding:'22px', margin:'29px'}}
onClick={handleclick}
>SUBMIT</button>
    
   

</>

  )
}

export default Login
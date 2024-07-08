import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {




   const data= useLoaderData()







    // const [data,setData]=useState([])
    // useEffect(()=>{
        // fetch('https://api.github.com/users/VaibhavShukla267')
        // .then(response=>response.json())
        // .then(data=>{
        //     console.log(data)
        //     setData(data)
        // })
    // },[])
  return (
<div className='flex  flex-col items-center text-center text-xl'>
    <h1>GitHub LoginName:{data.login}</h1>
    <h1>GitHub Following:{data.following}</h1>
    <h1>GitHub Repositories:{data.public_repos}</h1>
    <img
    src='https://avatars.githubusercontent.com/u/111300116?v=4' alt='Vaibhav Shukla'height={50} width={300}></img>
    
    
    
    
    </div>
  )
}

export default GitHub


export const gitdataLoader=async()=>{
   const response= await fetch('https://api.github.com/users/VaibhavShukla267')
   return response.json()
}
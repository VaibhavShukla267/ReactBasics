/* eslint-disable no-unused-vars */
import React from 'react'

function Header() {
  return (
   <div className="Header h-[10rem] w-full bg-zinc-800  text-zinc-400" >
    <ul className='flex flex-row justify-end md:ml-[20%] pt-16  text-3xl'>
      <li  
      className='p-3 border-b-4'
      ><a href='/' className='text-zinc-400 hover:text-zinc-200'>Home</a></li>
      <li  
      className='p-3 border-b-4'
      ><a href='/' className='text-zinc-400 hover:text-zinc-200'>AboutUs</a></li>
      <li  
      className='p-3 border-b-4'
      ><a href='/' className='text-zinc-400 hover:text-zinc-200'>ContactUs</a></li>
    </ul>
    
   </div>
  )
}

export default Header
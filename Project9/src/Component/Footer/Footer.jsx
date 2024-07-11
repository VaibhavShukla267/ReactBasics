/* eslint-disable no-unused-vars */
import React from 'react'

function Footer() {
  return (
    <div className="Footer h-[10rem] w-full bg-zinc-800 mt-auto border-b-4 text-zinc-400" >
        <h2>
        <a href='/' className='text-zinc-400 hover:text-zinc-200'>CopyRightsReserved2024@VaibhavShukla</a>
        </h2>
    <ul className='flex flex-col ml-[80%] pt-[2%] border-l-4  text-sm'>
    
      <li className='p-1 w-full'><a href='/' className='text-zinc-400 hover:text-zinc-200'>Home</a></li>



      <li className='p-1 w-full'><a href='/' className='text-zinc-400 hover:text-zinc-200'>AboutUS</a></li>



      <li className='p-1 w-full'><a href='/' className='text-zinc-400 hover:text-zinc-200'>ContactUs</a></li>



    </ul>
    
   </div>
  )
}

export default Footer
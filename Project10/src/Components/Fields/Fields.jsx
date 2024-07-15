import React from 'react'
// import DeleteForeverIcon from '@mui/icons-material DeleteForever';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

const Fields=({name,email,index,remove})=>{




  return (
    <div className='Data flex justify-center p-6'>
    <div className='flex justify-between bg-slate-400 w-[60%] rounded-[1rem] max-w-xl '>
    
      <h1 className='pl-[2rem] m-4 p-4'>{name}</h1>
      <h1 className='pl-[2rem] m-4 p-4 '>{email}</h1>
      <Button
      onClick={remove}
      
      variant="contained" color="warning" startIcon={<DeleteIcon />} 
      style={{backgroundColor:'red'}}
      >
      </Button>

      </div>
  </div>


)
}

export default Fields
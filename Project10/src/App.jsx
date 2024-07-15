

import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';



function App() {

  // const [name,setName]=useState("");
  // const [email,setEmail]=useState("");
  // If We have  more input fields then what?

  const[form,setForm]=useState({});
  const [data,setData]=useState([]);
 



  const addData=()=>{
    setData([...data,form]);
    setForm({name:'',email:''})
  }


  const remove=(index)=>{
    let arr=[...data];
    arr.splice(index,1)
    setData(arr)
  }
    

  return (
    <div className=' bg-zinc-800 h-screen w-screen'>
  
    <Header />
   <div className='flex items-center justify-center  mt-15 p-7'  >
  
   <TextField
   className='Text bg-zinc-400'  
   value={form.name}
   onChange={(e)=>
    setForm({...form,name:e.target.value})}
   id="outlined-basic" label="NAME" variant="outlined"
   style={{width:'12rem',height:'3rem',borderRadius:'2rem'}} />
  
   <TextField
   className='Text bg-zinc-400'  
   value={form.email}
   onChange={(e)=>
    setForm({...form ,email:e.target.value})}
   id="outlined-basic" label="EMAIL" variant="outlined"
   style={{width:'12rem',height:'3rem',borderRadius:'2rem',margin:"23px"}} />
    <Button
    onClick={addData}
    style={{width:'5rem',height:'3rem',borderRadius:'1rem',padding:'1rem'}}
     variant="contained"
     color="warning"><AddIcon /></Button>
     
    
    </div>
      
    <div className='Data flex justify-center'>
      <div className='flex justify-center bg-slate-400 w-[60%] rounded-[1rem] max-w-xl '>
       
        <h1 className='m-4 p-4'>Name</h1>
        <h1 className='pl-[10%] m-4 p-4 '>Email</h1>
        <h1 className='pl-[20%] m-4 p-4 '>Remove</h1>       
        
        </div>
    </div>
{
  data.map((element,index)=>{
    return(

      <div key={index}>
        <div className='Data flex justify-center p-6'>
    <div className='flex justify-between bg-slate-400 w-[60%] rounded-[1rem] max-w-xl '>
    
      <h1 className='pl-[2rem] m-4 p-4'>{element.name}</h1>
      <h1 className='pl-[2rem] m-4 p-4 '>{element.email}</h1>
      <Button
      onClick={()=>remove(index)}
      
      variant="contained" color="warning" startIcon={<DeleteIcon />} 
      style={{backgroundColor:'red'}}
      >
      </Button>

      </div>
  </div>
      

      </div>
     
    )
    


  })
}




    </div>
  )
}

export default App

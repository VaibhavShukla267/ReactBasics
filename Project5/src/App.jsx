import { useState,useCallback,useEffect, useRef } from 'react'


function App() {
  const [length,setLength]=useState(8)
  const[numbers,setNumber]=useState(false)
  const[character,setCharacter]=useState(false)
  const[password,setPassword]=useState("")


  // ref hook 
  const passwordRef=useRef(null)







// agar ham useCallBack ka istemaal ni krenge to react ko bahut sare renders krne padenge joki vo support ni krta 



const passGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz"
  if(numbers)str+="0123456789"
  if(character)str+="~!@#$%^&*()_+`{}[]"
  for (let i = 1; i <=length; i++) {
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char) 
    // passGenerator()
    // ye loop hamara 8 baar chalega in default case ,char me 8 characters ayenge after 8 iterations,har baar jo bhi value aygi usko ham pass variable me dalte rahenge
  }
  setPassword(pass)
},[length,numbers,character,setPassword])



// iski dependicies ka mtalb hai hai inn values ko optimize kro aur yaha setPassword ka mtlab hai ki password jo aya hai usko bhi cache me store krke rakho
// If we try to call passGenerator here then it will not work because we have used useCallBack here in this function 


const CopyPaswordToClipboard=useCallback(()=>{
  // Kyuki ham react pe hai isiliye seedha windows use kr paa rahe hai but in nextjs there we use server side rendering

  // here we did'nt used useRef lets see how we write it more optimized form
  // window.navigator.clipboard.writeText(password) ===>first way
  // now copy function works !!  but here we can't see if it copied or not like it highlights the text
  // but we need to optimize more

  passwordRef.current?.select();
  // more optimized form
  passwordRef.current?.setSelectionRange(0,99)
  window.navigator.clipboard.writeText(password) 
},[password])




useEffect(()=>{
  passGenerator()
},[length,numbers,character,passGenerator])


// Iski dependencies ka mtlab isme kuch bhi ched chad ho to dubara se run kro
    
  return (
    <div className='w-full h-40 max-w-xl mx-auto shadow-md rounded-md px-4 my-4 text-orange-400 bg-gray-700 '>
      <h1 className=" text-white text-center my-12">PasswordGenerator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input 
    type="text"
    value={password}
    className="outline-none w-full py-3 px-2"
    placeholder="Password"
    ref={passwordRef}
    readOnly />
    <button
    onClick={CopyPaswordToClipboard}
    className=" bg-blue-600 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>


      <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
      <label>Length:{length}</label>
      </div>



      <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={numbers}
      id="SetNumber"
      onChange={()=>{
        setNumber((prev)=>!prev)
      }}
      />
      <label>Number </label>
      </div>



      <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={character}
      id='SetCharacter'
      onChange={()=>{
        setCharacter((prev)=>!prev)
      }}
      />
      <label>Character</label>
        {/* // Iss call back me hame previous value ka access milta hai aur fir ! laga ke ham prev value opposite kr sakte hai
        AB hame koi method chahiye jiski madad se ham copy krva sake*/}
     
    
      
     

          
        </div>
      </div>


   </div> 

  )
  }


export default App

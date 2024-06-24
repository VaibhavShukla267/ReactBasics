import { useEffect,useCallback, useState,useRef } from "react";


function App(){
    const [length,setLength]=useState(6)
    const [NumberAllowed,setNumberAllowed]=useState(false)
    const [CharacterAllowed,setCharacterAllowed]=useState(false)
    const [password,setPassword]=useState("")

    const passwordRef=useRef(null)
    // null ko string mt bnaao bhai!!


    const PasswordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMOPQRSTUVWXYZasdfghjklqwertyuiopzxcvbnm"
        if(NumberAllowed)str+="1234567890"
        if(CharacterAllowed)str+="~!@#$%^&*()_+`{}[]"

        for(let i=1;i<=length;i++){
            let char=Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char)

        }
        setPassword(pass)

    }
    ,[length,NumberAllowed,CharacterAllowed,setPassword])

    
    
    const CopyToClipBoard=useCallback(()=>{
        passwordRef.current.select();
        passwordRef.current?.setSelectionRange(0,20)
        window.navigator.clipboard.writeText(password) 
    }
    // spelling to sahi kr le

    ,[password])
    
    useEffect(()=>{
        PasswordGenerator()

    },[length,CharacterAllowed,NumberAllowed,setPassword])

    return(
        <div className='w-full h-40 max-w-xl mx-auto shadow-md rounded-md px-4 my-4 text-orange-400 bg-gray-700 '>
        <h1 className=" text-white text-center my-12">PasswordGenerator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type="text"
        value={password}
        className="outline-none w-full py-3 px-2"
        placeholder="Password"
        readOnly
        ref={passwordRef}
        ></input>
        <button
        onClick={CopyToClipBoard}
        className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">Copy</button>

        </div>
        <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
        <input
        type="range"
        value={length}
        min={6}
        max={100}
        className="cursor-slider"
        onChange={(e)=>{setLength(e.target.value)}}
        ></input>
        <label>Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
      
        defaultChecked={NumberAllowed}
        id="SetnumberAllowed"
        onChange={()=>{
            setNumberAllowed((prev)=>!prev)
        }}
        ></input>
        <label>Number</label>
        </div>

        <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={CharacterAllowed}
        id="SetCharacterAllowed"
        onChange={()=>{
            setCharacterAllowed((prev)=>!prev)
        }}
        ></input>
        <label>Character</label>
        </div>

        
       </div>
       </div>
    
    )


}


export default App

import { useEffect,useCallback, useState,useRef } from "react";


function App(){

    const [length,setLength]=useState(6)
    const [NumberAllowed,setNumberAllowed]=useState(false)
    const [CharacterAllowed,setCharacterAllowed]=useState(false)
    const[password,setPassword]=useState("")

    const passRef=useRef(null)





    const PasswordGenerator=useCallback(()=>{
        let pass=""
        let str="asdfghjklqwertyuiopzxcvbnmASDFGHJKLQWERTYUIOPZXCVBNM"
        if(NumberAllowed)str+="1234567890"
        if(CharacterAllowed)str+="~!@#$%^&*()_+`[]{}"
            for(let i=1;i<=length;i++){
                let char=Math.floor(Math.random()*str.length+1)
                pass+=str.charAt(char)
            }
            setPassword(pass)

    },[length,NumberAllowed,CharacterAllowed,setPassword])


    useEffect(()=>{
        PasswordGenerator()
    },[length,NumberAllowed,CharacterAllowed,setPassword])


    const CopyPasswordToClipborad=useCallback(()=>{
        passRef.current?.select();
        passRef.current?.setSelectionRange(0,20)
        window.navigator.clipboard.writeText(password)

    },[password])


    return(
        <div className='w-full h-40 max-w-xl mx-auto shadow-md rounded-md px-4 my-4 text-orange-400 bg-gray-700 '>
        <h1 className=" text-white text-center my-12">PasswordGenerator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passRef} />
            <button 
            onClick={CopyPasswordToClipborad}
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
            onChange={(e)=>setLength(e.target.value)} /> 
            {/* you forgot */}
            <label>length:{length}</label>

        </div>

        <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={NumberAllowed}
            id="setNumberAllowed"
            onChange={()=>{
                setNumberAllowed((prev)=>!prev)
            }} />
            <label>Number</label>

        </div>

        <div className="flex items-center gap-x-1">
               <input
            type="checkbox"
            defaultChecked={CharacterAllowed}
            id="setCharacterAllowed"
            onChange={()=>{
                setCharacterAllowed((prev)=>!prev)
            }} />
            <label>character</label>
        </div>

        
       </div>
       </div>
    
    )


}


export default App

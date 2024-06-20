import {useState} from 'react';
import './App.css'

// We have to show how react its UI state.
// Here we have seen how we changed one variable 'counter' and how it reflects in each components where it is used 


function App(){
  
  let [counter,setCounter]=useState(15)

  const addValue=()=>{
    counter=counter+1
    setCounter(counter)
  }

  const delValue=()=>{
    counter=counter-1
    setCounter(counter)
  }

  return(
    <>
    <h1>Learning React Using Hooks</h1>
    <h2>Counter Count:{counter}</h2>
    <button 
    onClick={addValue}>Add Value:{counter}</button>
    <br />
    <br />
    <button
    onClick={delValue}>Reduce Value:{counter}</button>
    <p>footer:{counter}</p>
    
    
    </>
  )
}

export default App

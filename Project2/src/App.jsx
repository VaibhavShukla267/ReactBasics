import {useState} from 'react';
import './App.css'

// We have to show how react its UI state.
// Here we have seen how we changed one variable 'counter' and how it reflects in each components where it is used 


function App(){

let [Counter,SetCounter]=useState(15)
const addValue=()=>{
  // Interview question in counter.....that what happens if we dulpicate the below setCounter 
  // Counter=Counter+1;
  SetCounter(Counter+1)
  // SetCounter(Counter+1)
  // SetCounter(Counter+1)
  // SetCounter(Counter+1)
  // SetCounter(Counter+1)
  // Answer is : isme setCounter ka batch ban jyga aur ke hi kaam ko repeat krta hai so no effect 

  SetCounter(prevCounter=>prevCounter+1)
  SetCounter(prevCounter=>prevCounter+1)
  SetCounter(prevCounter=>prevCounter+1)
  SetCounter(prevCounter=>prevCounter+1)


  // Isme hamra previous state ata hai 
  // Ab jab ham click krenge button me to value +4 add hogi aur value-4 Delete hogi
  // so kya kuch aesa ho skata hai jisme 
  // Note:> SetCounter ke andar hame basically call back milta hai
  
}
const delValue=()=>{
  // Counter=Counter-1;
  SetCounter(Counter-1)
  SetCounter(prevCounter=>prevCounter-1)
  SetCounter(prevCounter=>prevCounter-1)
  SetCounter(prevCounter=>prevCounter-1)
  SetCounter(prevCounter=>prevCounter-1)
}


  return(
    <>
    <h1>React And Hooks</h1>
    <h2>Counter Count:{Counter}</h2>
    <button 
    onClick={addValue}>Add Value:{Counter}</button>
    <br />
    <br />
    <button
    onClick={delValue}>Delete Value:{Counter}</button>
    <p>Footer : {Counter}</p>
    </>
  )
}
export default App

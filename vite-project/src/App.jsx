import React from "react"
import ReactDOM from 'react-dom/client'
import Vaibhav from "./New"
import Vaibhav2  from "./New2"


function App(){
  const username="The Vaibhav Shukla"

 

  return (

    // its rule in react that we can only use element 
    // If We want one element we can wrap it in one div or in react div is <> called fragments
    <>

    

     <h1>Hey this is react</h1>
    {/* // why we deleted above its because of jsx
    // In jsx rule is that we can return only one element due to which cannot take any html tag or any other import variable */}
    <Vaibhav/>
       <Vaibhav2 />
  {/* // This will also show error  now after using div it will not show error  */}
{/*     
Syntax write variable in react  */}
      <h1> Welcome {username} </h1>
      <p>Test para</p>



    </>
      
  )
}

export default App

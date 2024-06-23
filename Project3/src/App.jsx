// import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {

// Passing One value to other components
  // let obj={
  //   username:"Vaibhav",
  //   Age:22
  // }
  // let Arr=[1,23,4]



  return ( 
<>

  <h1 className='bg-blue-400 text-black rounded-xl mb-3 p-3'>Tailwind In React</h1>
  {/* /* <Card Username="MyName" someObj={Arr} /> */ }
  <Card Username="MyName" btnName="Click Explore More" />
  <Card Username="Vaibhav" btnName="Click Here To See Me"/>
  
   {/* Yaha pe har card apni ek alag value rakhega uska intezam props se hota hai */}


</>
  ) 

}

export default App

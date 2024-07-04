/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react'
import Body from './components/background'
import Foreground from './components/foreground'
import Card from './components/card'
import Card1 from './components/card1'



function App() {
  const [count, setCount] = useState(0)

  return (
 <>
<div className='relative w-full h-screen bg-zinc-700'>
 


  <Body />

  <div className='fore'>
<Foreground />

  {/* <Card /> */}
  
    


  </div>
    
</div>
  
    
 </>
  )
}

export default App

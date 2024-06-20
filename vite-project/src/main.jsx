import React from 'react'
import ReactDOM from 'react-dom/client'


// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'CLick Me To Visit Google'
// }
// The above objects shows error because this type syntax is not expected by the react always convert it to tree form but the above synatax of ReactELement cannot be injected in the tree lets create another one

// const NewELement=(

//   <a href='https://google.com'target='_blank'>Visit Google</a>
// )

// Not optimized step for jsx


// function MyApp(){
//   return(
//     <h1>React Is Love</h1>
//   )
// }

// Kya ham reactElement ko .render jo ki main.jsx me hota usme <reactElement /> krke likh sakte hai ? kyuki atlast jo function MyApp() hota hai vo bhi key pairs ke form me convert hojata hai
// Now we will see which type of react asks for 



import App from './App.jsx'




const anotherElement='Hey there welcome to react';

const NewElement=React.createElement(
  'a',/*this is a link so we need use'a' here*/
  { href: 'https://amazon.com', target: '_blank' },
  'Click here visit Amazon',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // ReactElement,it can only accepts one argument at a time
  
 
    NewElement /*Its not coming as link*/ 

 
  
    // <App /> 
  
  
    // {/* <MyApp /> */}
    // {/* < reactElement /> this is an objects type not a function */}
    
)


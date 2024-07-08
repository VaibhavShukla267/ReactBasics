import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './Components/Home/Home'
import About from './Components/AboutUs/AboutUS'
import ContactUs from './Components/ContactUs/ContactUs'
import User from './Components/User/User'

import GitHub , { gitdataLoader } from './Components/GitHub/GitHub'



// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {path:"",
//         element:<Home/>
//       },
//       {
//         path:"AboutUs",
//         element:<About/>
//       },
//       {
//         path:"ContactUs",
//         element:<ContactUs/>
//       }
//     ]
//     }  ]
//   )


// Other way to do above method method

const router=createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/'element= {<Layout/>}>
      <Route path=''element= {<Home/>}/>
      <Route path='AboutUs'element= {<About/>}/>
      <Route path='ContactUs'element= {<ContactUs/>}/>
      <Route path='user/:userid'element= {<User/>}/>
     
      <Route loader={gitdataLoader}
      path='github'
      element={<GitHub />}/>



     


    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

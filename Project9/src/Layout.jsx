/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import  Movies  from './Component/Card/Movies'
import Movies1 from './Movies.json'
function Layout() {
  console.log('Movies',Movies1)
  return (
    <>
   
    <Header />
    <div className='flex flex-row p-3 m-3 flex-wrap justify-between'>

  {

    Movies1.map((element,index)=> {
     
      return(
        <Movies 
        key={index}
          title={element.Title}
          year={element.Year}
          img={element.Poster}
         />
      )
      

    })
    }
     




    </div>
    
    <Footer />
    </>
  )
}

export default Layout
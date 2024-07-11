
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Movies  from './Component/Card/Movies'
import Movies1 from './Movies.json'






function App() {
 

  return (
       <>
   
    <Header />
    <div className='flex flex-row p-3 m-3 flex-wrap justify-between'>

  {

    Movies1.map((element,index)=> {
     console.log('Movie data',element)
      return(
        <Movies 
        key={index}
          title={element.Title}
          year={element.Year}
          img={element.Images}
         />
      )
      

    })
}

</div>
    
    <Footer />
    </>
  )
}


export default App

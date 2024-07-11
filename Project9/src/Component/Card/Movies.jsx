/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function Movies(props){


  return (
  
    
    
  <div  className='movie m-2 w-[10rem] border-blue-300'>
    
  <img src={props.img} alt={props.img} />
  <p>{props.title}</p>
  <p>Year:{props.year}</p>

</div>
  )
}
export default Movies

Movies.propTypes={
  img:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  year:PropTypes.string.isRequired,
};

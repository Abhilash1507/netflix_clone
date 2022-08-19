import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import {API_KEY,imageUrl} from "../../Constants/Constants"
function Banner() {
   
  const [movie, setMovie] = useState()
  useEffect(() => {
    
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
       console.log(response.data.results[6]);
       setMovie(response.data.results.sort(function(first,second){
             return 0.5-Math.random()
       })[0]);
    })
     
  }, [])
  

  return (
    <div style={{ backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='Banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title :""}</h1>
        <div className='banner_Buttons'>
          <button className='button'>play</button>
          <button className='button'>my List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner


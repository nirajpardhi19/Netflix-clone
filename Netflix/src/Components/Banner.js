import React from 'react'
import Axios from "axios"
import { API_KEY } from "../API"
import { imageUrl } from '../API'
import "../App.css"

import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
//https://api.themoviedb.org/3/discover/tv/?api_key=3df97bd1e5e9c545b1a1d13a906d79e1&with_network=123

export default function Banner() {

    const [movies, setMovies] = React.useState([])

   const movie = movies[Math.floor(Math.random() * movies.length)]

    React.useEffect(function()
    {

        Axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then(function(output)
        {
            setMovies(output.data.results)
        })
        .catch(function(error)
        {
           console.log(error)
        })
    }, [])

    
  return (
    <div className="w-full h-[550px] text-white">
       <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
       
       <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
           <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5"> Play</button>
           <button className="border text-white border-gray-300 py-2 px-5"> Watch Later</button>
          </div>
          <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%]lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{movie?.overview}</p>
       </div>
       </div>
    </div>
  )
}



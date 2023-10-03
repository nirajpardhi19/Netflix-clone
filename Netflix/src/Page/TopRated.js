import React from 'react'
import Axios from "axios"
import { API_KEY } from "../API"
import { imageUrl } from '../API'
import "../App.css"

import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
//https://api.themoviedb.org/3/discover/tv/?api_key=3df97bd1e5e9c545b1a1d13a906d79e1&with_network=123

export default function TopRated() {

    const [originalsData, setOriginalsData] = React.useState([])

   const [myId , setMyId] = React.useState("") 

    React.useEffect(function()
    {

        Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`)
        .then(function(output)
        {
            setOriginalsData(output.data.results)
        })
        .catch(function(error)
        {
           console.log(error)
        })
    }, [])

    function handleClick(movieData)
    {
        const movieName = movieData.name

        movieTrailer(movieName)
        .then(function(output)
        {
         setMyId(new URLSearchParams(new URL(output).search).get("v"))
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }
    
  return (
    <div>
        <h2 className="text-white font-bold md:text-xl p-4">TOP RATED</h2>
    <div className='allImages'>
        {
            originalsData.map(function(info,i)
            {
                //console.log(info)
               // console.log(imageUrl+info.poster_path)
               return <img alt='' key={i} width="250px" height="250px" src={imageUrl+info.poster_path} onClick={()=>handleClick(info)}/>
            })
        }
 
    </div>
   {myId ? <Youtube videoId={myId}/> : null}
    </div>
  )
}



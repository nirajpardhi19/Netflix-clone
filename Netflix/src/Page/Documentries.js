import React from 'react'
import Axios from "axios"
import { API_KEY } from "../API"
import { imageUrl } from '../API'
import "../App.css"

//https://api.themoviedb.org/3/discover/tv/?api_key=3df97bd1e5e9c545b1a1d13a906d79e1&with_network=123

export default function Documentries() {

    const [originalsData, setOriginalsData] = React.useState([])

    React.useEffect(function()
    {

        Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`)
        .then(function(output)
        {
            setOriginalsData(output.data.results)
        })
        .catch(function(error)
        {
           console.log(error)
        })
    }, [])
    
  return (
    <div>
       <h2 className="text-white font-bold md:text-xl p-4">DOCUMENTRIES</h2>
    <div className='allImages'>
        {
            originalsData.map(function(info,i)
            {
                //console.log(info)
               // console.log(imageUrl+info.poster_path)
               return <img alt='' key={i} width="250px" height="250px" src={imageUrl+info.poster_path}/>
            })
        }

    </div>
    </div>
  )
}

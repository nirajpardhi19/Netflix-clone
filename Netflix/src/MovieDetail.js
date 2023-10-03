import React from 'react'
import NetflixOriginals from './Page/NetflixOriginals'
import Comedy from './Page/Comedy'
import Action from './Page/Action'
import Horror from './Page/Horror'
import Romance from './Page/Romance'
import Trending from './Page/Trending'
import TopRated from './Page/TopRated'
import Documentries from './Page/Documentries'
import Banner from './Components/Banner'
export default function MovieDetail() {
  return (
    <div>
      <Banner/>
      <NetflixOriginals/>
      <Trending/>
      <TopRated/>
      <Comedy/>
      <Action/>
      <Horror/>
      <Romance/>
      <Documentries/>
    </div>
  )
}

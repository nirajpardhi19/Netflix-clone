import React from 'react'
import{BrowserRouter, Link, Route, Routes} from "react-router-dom"
import "../App.css"
import Login from './Login'
import MovieDetail from '../MovieDetail'


export default function Navbar(props)
 {

 

  function pleaseLogout()
  {
   window.location.pathname = "/login"
  }

  return (

    <BrowserRouter>    
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">

          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>

       {props.initial  ?  <div >
       <button className="text-white pr-4" onClick={pleaseLogout}>Logout</button>
        
           <div className='link'> 
            <Link to="/home" class="navbar-brand"></Link>
         </div> 
         
      </div>
        :  <div className="text-white pr-4" >
            <Link to="/login" >Login</Link>
           </div>}
     
     </div>

     <Routes>
          <Route path="/home" element={<MovieDetail/>}></Route>
          <Route path="/login" element={<Login info= {props.data}/>}></Route>
      </Routes>
       
    </BrowserRouter>

  )
}



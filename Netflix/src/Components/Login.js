import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'


export default function Login(props)
 {
    const navigate = useNavigate()


    function pleaseLogin()
    {
        //Display the popup
        signInWithPopup(auth, provider)
        .then(function()
        {
            // it means the user is logged in
            props.info(true)

            
            const userName = auth.currentUser.displayName
            const email = auth.currentUser.email
            console.log(userName, email)

            navigate("/home")

        })
        .catch(function(error)
        {
           console.log(error)
        })
    }
  return (
    <div className="flex items-center  px-4 py-20 z-[100] w-full absolute">
      <button className="bg-red-600  px-6 py-2 rounded cursor-pointer text-white" onClick={pleaseLogin}>Login With Google</button>
    </div>
  )
}

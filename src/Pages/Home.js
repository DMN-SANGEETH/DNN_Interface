import React from 'react'
import Login from '../components/Login.js'
import heart_img from "./heart.jpg"



export default function Home() {
  return (



    <div>
       <img src={heart_img} alt="heart" className="heart"/>
        <h1> Home Page</h1>
         
         <Login/>
         <Signup/>
         
    </div>
  )
}
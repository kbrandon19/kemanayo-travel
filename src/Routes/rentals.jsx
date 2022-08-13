import React from 'react'
import Background from '../Components/Background/Background'
import Navigation from '../Components/Navigation/Navigation'
import "../Routes/routes.css"

function rentals() {
  return (
    <>
    <Background/>
  <Navigation/>
   <div className="container">
     <div><h1>Rentals</h1></div>
   </div>
  </>
 
  )
}

export default rentals
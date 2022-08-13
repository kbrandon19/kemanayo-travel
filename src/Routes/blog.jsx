/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Background from '../Components/Background/Background'
import Navigation from '../Components/Navigation/Navigation'
import "../Routes/routes.css"


function blog() {
  return (
    <>
      <Background/>
    <Navigation/>
     <div className="container">
       <div>
       <h1>blog</h1>
       <h4>Travel inspires life, life inspires travel.</h4>
       </div>

       <div className="blog-wrap">
        <div className="blog-thumb">
        <div className="blog-thumb-img"></div>
          <p>Text to draw you in</p>
          <a href="">Link</a>
        </div>
        <div className="blog-thumb">
        <div className="blog-thumb-img"></div>
          <p>Text to draw you in</p>
          <a href="">Link</a>
        </div>
        <div className="blog-thumb">
        <div className="blog-thumb-img"></div>
          <p>Text to draw you in</p>
          <a href="">Link</a>
        </div>
       </div>
     </div>
    </>
   
  )
}

export default blog
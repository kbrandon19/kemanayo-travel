/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Background from '../Components/Background/Background'
import Navigation from '../Components/Navigation/Navigation'
import "../Routes/routes.css"

import PostImage from '../assets/blog.jpg'


function blog() {
  return (
    <>
      <Background/>
    <Navigation/>
     <div className="main-container">
     <div className="blog-container">
       <div className="post-highlight">
       <div className="post-image">
       <PostImage />
       </div>
        <div className="post-info">postinfo
        <h3></h3>
        <div className="post-author"></div>
        </div>
       </div>
        <div className="blog-posts"></div>
     </div>


     </div>
    </>
   
  )
}

export default blog
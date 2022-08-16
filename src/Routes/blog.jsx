/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import Background from '../Components/Background/Background'
import Navigation from '../Components/Navigation/Navigation';

import "../Routes/routes.css"

// this will be the object data for the blog posts
const data = [
  {
    id:1,
    image:"",
    title:"",
    excerpt:"",
  }
]



function blog() {
  return (
    <>
      {/* <Background/> */}
    <Navigation />
     <div className="main-container">
     <div className="blog-container">
   <div className="section-title"><h4>Featured Post</h4><hr /></div>
       <div className="blog-feat">
       <div className="blog-feat-image">
       
       </div>
        <div className="blog-feat-info">
        <h1>Places Less Traveled Are The Most Memorable</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem debitis eveniet fugit? Tenetur, quaerat doloremque. Lorem ipsum dolor sit amet.</p>
        <a href="#" id="blog-link">Read More</a>
  
        <div className="post-author">
          <div className="post-name">
            <div className="profile-avi"></div>
            <p>Jason Fletcher</p>
          </div>
          <span id="auth-date">29, April 2014</span>

        </div>
        </div>
       </div>
     </div>
     </div>
    </>
   
  )
}

export default blog
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import Background from '../Components/Background/Background'
import Navigation from '../Components/Navigation/Navigation';

import "../Routes/routes.css"





function blog() {
  return (
    <>
      {/* <Background/> */}
    <Navigation />
     <div className="main-container">
     <div className="blog-container">
       <div className="post-highlight">
       <div className="post-image">
       
       </div>
        <div className="post-info">
        <h1>Places Less Traveled Are The Most Memorable</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem debitis eveniet fugit? Tenetur, quaerat doloremque. Lorem ipsum dolor sit amet. <a href="#" id="blog-link">Read More</a></p>
  
        <div className="post-author">
          <div className="post-name">
            <div className="profile-avi"></div>
            <p>Jason Fletcher</p>
          </div>
          <span id="auth-date">29, April 2014</span>

        </div>
        </div>
       </div>

       <div className="blog-post">
        <div className="post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veritatis dolorum repudiandae! Et distinctio doloribus aut quaerat eum nobis consequatur, ex itaque sit obcaecati assumenda placeat culpa earum omnis natus?</div>
        <div className="post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veritatis dolorum repudiandae! Et distinctio doloribus aut quaerat eum nobis consequatur, ex itaque sit obcaecati assumenda placeat culpa earum omnis natus?</div>
       </div>
     </div>
     </div>
    </>
   
  )
}

export default blog
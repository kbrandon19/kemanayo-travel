import React from "react";
import "./FeaturedBlog.css";
export default function FeaturedBlog() {
  return (
    <>
      <div className="blog-container">
        <div className="blog-feat">
          <div className="blog-feat-image"></div>
          <div className="blog-feat-info">
            <h1>Places Less Traveled Are The Most Memorable</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem debitis eveniet fugit? Tenetur, quaerat doloremque.
              Lorem ipsum dolor sit amet.
            </p>
            <a href=" " id="blog-link">
              Read More
            </a>

            <div className="post-author">
              <div className="post-name">
                {/* <div className="profile-avi"></div> */}
                <p>Jason Fletcher</p>
              </div>
              <span id="auth-date">29, April 2014</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

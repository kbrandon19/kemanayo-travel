
import React,{useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../client'
import Navigation from '../Navigation/Navigation'
import FeaturedBlog from './FeaturedBlog';


import "./AllPosts.css"

export default function AllPosts() {
    // eslint-disable-next-line no-unused-vars
    const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
      sanityClient.fetch(
          `*[_type == "post"]{
          title,
          slug,
          tags,
          mainImage{
            asset -> {
            _id,
            url
          }
        }
      }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, []);
    
  return (
    <>
    <Navigation/> 
    <div className='main-container'>
     <FeaturedBlog />
      <div className="blog-lib">
      <span id="section-tag">Past Posts</span>
        <div className="blog-post">
          <div className="blog-image">
      
          </div>
          <div className="blog-info">
          <span id="post-date">July 12, 2022</span>
            <h2>Places Less Traveled Are The Most Memorable</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem debitis eveniet fugit? Tenetur, quaerat doloremque.
              Lorem ipsum dolor sit amet.
            </p>

          </div>
        </div>



        {/* <div>
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span key={index}>
                  <img src={post.mainImage.asset.url} alt="" />
                  <span>
                    <h2>{post.title}</h2>
                  </span>
                </span>
              </Link>
            ))}
        </div> */}
      </div>
   
    </div>
        

    </>
    
  )
}

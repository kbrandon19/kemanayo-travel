
import React,{useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '@sanity/client'
import Navigation from '../Navigation/Navigation'

import "../../Routes/routes.css"

export default function AllPosts() {
    const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
      sanityClient.fetch(
          `*[_type == "post"]{
          title,
          slug,
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
    <div>
      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
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
      </div>
    </div>
        

    </>
    
  )
}

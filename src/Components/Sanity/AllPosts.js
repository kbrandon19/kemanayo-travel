import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import Navigation from "../Navigation/Navigation";
import FeaturedBlog from "./FeaturedBlog";
import imageUrlBuilder from "@sanity/image-url";

import "./AllPosts.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          tags,
          mainImage{
            asset -> {
            _id,
            url
          }
        },"name":author->name
      }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Navigation />
      <div className="main-container">
        <FeaturedBlog />
        <div className="blog-lib">
          {/* <div className="blog-post">
            <div className="blog-image"></div>
            <div className="blog-info">
              <span id="post-author">Pierre</span>
              <span id="post-date">July 12, 2022</span>
              <h2>Places Less Traveled Are The Most Memorable</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem debitis eveniet fugit? Tenetur, quaerat doloremque.
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div> */}

          {allPostsData &&
            allPostsData.map((post, index) => (
              <div className="blog-post">
                <Link to={"/" + post.slug.current} key={post.slug.current}>
                  <div className="blog-image">
                    <img
                      src={urlFor(post.mainImage).url()}
                      alt="post graphic"
                    />
                  </div>
                  <div className="blog-info">
                    <span id="post-author">{post.name}</span>
                    <span id="post-date">July 12, 2022</span>
                    <h2>{post.title}</h2>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

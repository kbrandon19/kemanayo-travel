import sanityClient from "../../client";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import "./BlogFeatured.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function FeaturedBlog() {
  const [allPostsData, setAllPosts] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt asc)[0]{
    _id,
    slug,
    title,
    name,
    body,
    _createdAt,
    mainImage{
            asset -> {
            _id,
            url
          }
        }
    "name": author -> name,
    "authorImage":author -> image
  }`
      )
      .then((data) => setAllPosts(data[0]))
      .catch(console.error);
  }, [slug]);

  if(!allPostsData) return <div>Loading...</div>;
  return (
    <>
      <div className="blog-feat-container">
        <div className="blog-feat">
          <div className="blog-feat-image"></div>
          <div className="blog-feat-info">
            <h1>{allPostsData.title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem debitis eveniet fugit? Tenetur, quaerat doloremque.
              Lorem ipsum dolor sit amet.
            </p>
            <a href=" " id="blog-link">
              Read More
            </a>

            {/* <div className="blog-feat-author">
              <div className="blog-feat-name">
                <div className="blog-feat-avi"></div>
                <p>{allPostsData.name}</p>
              </div>
              <span id="auth-date">29, April 2014</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

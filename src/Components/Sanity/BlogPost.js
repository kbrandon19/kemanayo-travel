import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Navigation from "../Navigation/Navigation";

import "./BlogPost.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function DefaultPost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug ]{
          title,
          slug,
          publishedAt,
          _createdAt,
          mainImage{
            asset -> {
            _id,
            url
          }
        },
        body,
        "name":author->name,
        "authorImage":author->image
      }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="blog-post-container">
          <div className="blog-post-info">
            <h1>{postData.title}</h1>
            <div className="blog-post-author">
              <div className="blog-post-author-profile">
                <img
                  id="profile"
                  src={urlFor(postData.authorImage).width(200).url()}
                  alt="blog post author"
                />
                <span>{postData.name}</span>
              </div>

              <span id="auth-date">{postData._createdAt}</span>
            </div>
          </div>

          <div className="blog-post-content">
            <div className="blog-post-mainImage">
              <img
                id="main-image"
                src={urlFor(postData.mainImage).url()}
                alt="post graphic"
              />
            </div>
            {
              <PortableText
                value={postData.body}
                projectId="f30bvj7t"
                dataset="production"
              />
            }
          </div>
        </div>
        {/* <div>
        <h2>{postData.title}</h2>
        <div>
            <img src={urlFor(postData.authorImage).width(200).url()} alt="blog post author" />
            <h4>{postData.name}</h4>
        </div>
         </div>
         <img src={urlFor(postData.mainImage).width(200).url()} alt="post graphic" />
     

        <div>
        {  
            <PortableText 
            value={postData.body} 
            projectId="f30bvj7t"
            dataset="production" 
            />
        }
        </div> */}
      </div>
    </>
  );
}

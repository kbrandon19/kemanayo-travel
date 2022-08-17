import React from 'react';
import { useEffect,useState } from 'react';
import Navigation from '../Navigation/Navigation'

function AllPosts() {

const [allPostsData, setAllPosts] = useState(null);

  return (
    <>
        <Navigation />
    <h1>Does this work?</h1>
    </>
  )
}

export default AllPosts
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Background from '../Components/Background/Background'
import Navigation from '../Components/Navigation/Navigation';

import "../Routes/routes.css"

//Sanity posts
import AllPosts from '../Components/Sanity/AllPosts';
import DefaultPost from '../Components/Sanity/DefaultPost';




function blog() {
  return (
    <>
      <Background/>
    <Navigation />
    <h1>Does this work?</h1>
   
    </>
   
  )
}

export default blog
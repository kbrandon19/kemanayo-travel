import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './App.css';
import './styleReset.css';
import Background from './Components/Background/Background'
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Amenities from './Components/Amenities/Amenities'

function App() {


  return (
    <> 

    <Background />
    <Navigation />
    <Hero />
    <Amenities />

    </>
       
  );
}

export default App;

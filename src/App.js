import React from 'react'

import './App.css';
import './styleReset.css';
import Background from './Components/Background/Background'
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Amenities from './Components/Amenities/Amenities'
import TabsDemo from './Components/Radix/Portal';

function App() {


  return (
    <> 

    <Background />
    <Navigation />
    <Hero />
    <Amenities />
    <TabsDemo/>

    </>
       
  );
}

export default App;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'

function Hero() {
  return (
    <>
      <main>
        <div className="hero">
          <div className="hero-content">
            <h1>Beragam Tujuan Menarik</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit dicta.
            </p>
            <div className="search-bar">
              <input type="text" name="location" id="location-name" placeholder="Trips, places and activities"/>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>
          </div>
          <div className="location-carousel"><h1>Swiper JS</h1></div>
        </div>
      </main>
    </>
  )
}

export default Hero
import React from 'react';
import Carousel from './Carousel';
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <>
      <main>
        <div className="hero">
          <div className="hero-content">
            <h1>Beragam Tujuan Menarik</h1>
            <p>
            Dengan kemanayo, tenukan momen spesial dan berkesan di setiap perjalananmu
            </p>
            <div className="search-bar">
              <form action="#">
                <input type="text" name="location" id="location-name" placeholder="Trips, places and activities..."/>
                <div className="search-icon">
<FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </form>
            
            </div>
          </div>
          <div className="location-carousel">
            <Carousel />
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
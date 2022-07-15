import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Hero.css'

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
                <input type="text" name="location" id="location-name" placeholder="Trips, places and activities"/>
                <div className="search-icon">
<FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </form>
            
            </div>
          </div>
          <div className="location-carousel">
          <h1>Swiper JS</h1>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
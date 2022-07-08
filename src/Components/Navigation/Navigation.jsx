import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass,faSuitcase, faTicket, faCar, faCircleUser, faBell } from '@fortawesome/free-solid-svg-icons'

import './Navigation.css'

function Navigation() {
  return (

  //  MOBILE FIRST 

  <>
  <header>
    <nav className="nav">
      <div className="mobileNav">
        <div className="notification">
        <div className="logo">kemanayo</div>
        <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="mobile-links">
         <div className="link-icon" id="explore">
         <FontAwesomeIcon icon={faCompass} />
          <a href="https//kbrandon19.github.io">Explore</a>
          
         </div>
         <div className="link-icon" id="trips">
         <FontAwesomeIcon icon={faSuitcase} />
          <a href="https//kbrandon19.github.io">Trips</a>
          </div>
{/* Button wrapped in anchor tag - test */}
          {/* <a href="https//kbrandon19.github.io">
          <button>
          <FontAwesomeIcon icon={faSuitcase} />
          Trips
          </button>
          </a>
         */}

         
     
         <div className="link-icon" id="events">
         <FontAwesomeIcon icon={faTicket} />
         <a href="https//kbrandon19.github.io">Events</a>
         
         </div>
         <div className="link-icon" id="rentals">
          <FontAwesomeIcon icon={faCar} />
         <a href="https//kbrandon19.github.io">Rentals</a>
        
         </div>
         <div className="link-icon" id="login">
         <FontAwesomeIcon icon={faCircleUser} />
         <a href="https//kbrandon19.github.io">Login</a>
         
         </div>
        </div>
      </div>

      <div className="desktopNav"></div>
    </nav>
  </header>
  </>
  )
}

export default Navigation;
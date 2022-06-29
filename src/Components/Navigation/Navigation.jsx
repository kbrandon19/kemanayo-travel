import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass,faSuitcase, faTicket, faCar, faCircleUser } from '@fortawesome/free-solid-svg-icons'

import './Navigation.css'

function Navigation() {
  return (

  //  MOBILE FIRST 

  <>
  <header>
    <nav className="nav">
      <div className="mobileNav">
        <div className="notification"></div>
        <div className="mobile-links">
         <div className="link-icon" id="explore">
          <p>Explore</p>
          <FontAwesomeIcon icon={faCompass} />
         </div>
         <div className="link-icon" id="trips">
         <p>Trips</p>
         <FontAwesomeIcon icon={faSuitcase} /></div>
         <div className="link-icon" id="events">
         <p>Events</p>
         <FontAwesomeIcon icon={faTicket} />
         </div>
         <div className="link-icon" id="rentals">
         <p>Rentals</p>
         <FontAwesomeIcon icon={faCar} />
         </div>
         <div className="link-icon" id="login">
         <p>Login</p>
         <FontAwesomeIcon icon={faCircleUser} /></div>
        </div>
      </div>
    </nav>
  </header>
  </>
  )
}

export default Navigation;
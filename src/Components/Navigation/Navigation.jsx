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

        <a href="https://github.com/kbrandon19/kemanayo-travel">
        <button className="inactive">
        <FontAwesomeIcon icon={faCompass} className="inactive" size="lg"/>
        <p>Explore</p>
        </button>
        </a>

        <a href="https://github.com/kbrandon19/kemanayo-travel">
        <button className="inactive"> 
        <FontAwesomeIcon icon={faSuitcase} className="inactive" size="lg"/>
        <p>Trips</p>
        </button>
        </a>

        <a href="https://github.com/kbrandon19/kemanayo-travel">
        <button>
        <FontAwesomeIcon icon={faTicket} className="active" size="lg"/>
        <p>Events</p>
        </button>
        </a>

        <a href="https://github.com/kbrandon19/kemanayo-travel">
        <button className="inactive">
        <FontAwesomeIcon icon={faCar} className="inactive" size="lg"/>
        <p>Rentals</p>
        </button>
        </a>

        <a href="https://github.com/kbrandon19/kemanayo-travel">
        <button className="inactive">
        <FontAwesomeIcon icon={faCircleUser} className="inactive" size="lg"/>
        <p>Login</p>
        </button>
        </a>


        </div>
      </div>

      <div className="desktopNav"></div>
    </nav>
  </header>
  </>
  )
}

export default Navigation;
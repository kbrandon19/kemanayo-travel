/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
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
        <button className="active">
        <FontAwesomeIcon icon={faCompass} className="fa active" size="lg"/>
        <p>Explore</p>
        </button>
        </a>

        <a href="https://github.com/kbrandon19/kemanayo-travel">
        <button className="inactive"> 
        <FontAwesomeIcon icon={faSuitcase} className=" fa inactive" size="lg"/>
        <p>Trips</p>
        </button>
        </a>

        <a href="https://github.com/kbrandon19/kemanayo-travel">
        <button className="inactive">
        <FontAwesomeIcon icon={faTicket} className="fa inactive" size="lg"/>
        <p>Events</p>
        </button>
        </a>

        <a href="https://github.com/kbrandon19/kemanayo-travel">
        <button className="inactive">
        <FontAwesomeIcon icon={faCar} className="fa inactive" size="lg"/>
        <p>Rentals</p>
        </button>
        </a>

        <a href="https://github.com/kbrandon19/kemanayo-travel">
        <button className="inactive">
        <FontAwesomeIcon icon={faCircleUser} className="fa inactive" size="lg"/>
        <p>Login</p>
        </button>
        </a>


        </div>
      </div>

      <div className="desktopNav">

        <div className="logo">kemanayo</div>

        <div className="desktop-links">
      <ul>
        <li><a href="">Trips</a></li>
        <li><a href="">Rentals</a></li>
        <li><a href="">Events</a></li>
        <li><a href="">Blogs</a></li>
      </ul>
        </div>

        <div className="user-access">

          <ul>
          <li><a href="" id="login">Login</a></li>
          <li><a href="" id="sign-up">Sign Up</a></li>
          </ul>

        </div>

      </div>
    </nav>
  </header>
  </>
  )
}

export default Navigation;
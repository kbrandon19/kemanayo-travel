/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass,faSuitcase, faTicket, faCar, faCircleUser, faBell } from '@fortawesome/free-solid-svg-icons'

import './Navigation.css'

import { Outlet, Link } from 'react-router-dom'

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

        
        <Link to="/">
          <button className="active">
          <FontAwesomeIcon icon={faCompass} className="fa active" size="lg"/>
          <p>Explore</p>
          </button>
        </Link>
        

       
        <Link to="/trips">
          <button className="inactive">
          <FontAwesomeIcon icon={faSuitcase} className=" fa inactive" size="lg"/>
          <p>Trips</p>
          </button>
        </Link>
        

        <Link to="/events">
        
          <button className="inactive">
          <FontAwesomeIcon icon={faTicket} className="fa inactive" size="lg"/>
          <p>Events</p>
          </button>
          
        </Link>

        
        <Link to="/blog">
          <button className="inactive">
          <FontAwesomeIcon icon={faCar} className="fa inactive" size="lg"/>
          <p>Rentals</p>
          </button>
        </Link>
        

        
        <Link to="/login">
          <button className="inactive">
          <FontAwesomeIcon icon={faCircleUser} className="fa inactive" size="lg"/>
          <p>Login</p>
          </button>
        </Link>
        


        </div>
      </div>

      <div className="desktopNav">

        <div className="logo"><Link to="/">kemanayo</Link></div>

        <div className="desktop-links">
      <ul>
        <li><Link to="/trips">trips</Link></li>
        <li><Link to="/rentals">rentals</Link></li>
        <li><Link to="/events">events</Link></li>
        <li><Link to="/blog">blog</Link></li>
   
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
    <Outlet/>
  </header>

  </>
  )
}

export default Navigation;
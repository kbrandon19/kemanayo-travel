
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './Amenities.css';

function Amenities() {
  return (
    <>
    <div><h1>Amenities</h1></div>

   <div className="icons">
    <FontAwesomeIcon icon ={faCoffee} />
   </div>
   </>
  )
}

export default Amenities



import React from 'react';
import './Amenities.css';
import {FaConciergeBell, FaSuitcase} from 'react-icons/fa';
import {MdTravelExplore, MdPayments} from 'react-icons/md';

function Amenities() {
  return (
    <>
    <div className="container">
      <div className="amen-text">
        <h2><span>Kemanayo</span> is Your Personal Travel Assistant</h2>
      </div>
      <div className="amen-list">
        <div>
        <FaConciergeBell id="icon bell" size={30}/>
          <p>Liburan gak hanya sekedar wacana</p>
        </div>
        <div>
        <FaSuitcase id="icon suitcase"size={30}/>
          <p>Pelayanan terbaik untuk anda</p>
        </div>
        <div>
        <MdTravelExplore id="icon explore" size={30}/>
          <p>Kemudahan akses website dan apps</p>
        </div>
        <div>
        <MdPayments id="icon payment" size={30}/>
          <p>Pembayaran yang cepat dan aman</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default Amenities


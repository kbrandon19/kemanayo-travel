
import React from 'react';
import './Amenities.css';
import {FaConciergeBell, FaSuitcase} from 'react-icons/fa';
import {MdTravelExplore, MdPayments} from 'react-icons/md';

function Amenities() {
  return (
    <>
    <div className="amenities">
      <div className="amen-text">
        <h2><span>Kemanayo</span> is Your Personal <br/>Travel Assistant</h2>
      </div>
      <div className="amen-list">
        <div className='amen-list__label'>
        <div className="icon">
          <FaConciergeBell color="#6BD0D6" id="icon bell" size={30}/>
        </div>
        <p>Liburan gak hanya sekedar wacana</p>
      </div>
      <div className='amen-list__label'>
        <div className="icon">
          <FaSuitcase color="#6BD0D6" id="icon bell" size={30}/>
        </div>
        <p>Pelayanan terbaik <br></br>untuk anda</p>
      </div>
      <div className='amen-list__label'>
        <div className="icon">
          <MdTravelExplore color="#6BD0D6" id="icon bell" size={30}/>
        </div>
        <p>Kemudahan akses website dan apps</p>
      </div>
      <div className='amen-list__label'>
        <div className="icon">
          <MdPayments color="#6BD0D6" id="icon bell" size={30}/>
        </div>
        <p>Pembayaran yang cepat dan aman</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Amenities

/*




*/
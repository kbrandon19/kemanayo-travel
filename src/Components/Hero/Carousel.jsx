import React from 'react';
import {Pagination, Keyboard} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import { IoLocationSharp } from "react-icons/io5";
import 'swiper/css/bundle';
import './Hero.css';
import Bali from '../../assets/bali.jpg';
// import Yogyakarta from '../../assets/yogyakarta.jpg';
import Phuket from '../../assets/phuket.jpg';
import Jatiluwuh from '../../assets/jatiluwuh.jpg';
import PhiPhi from '../../assets/phiphi.jpg';


function Carousel() {
  return (
    <>
<Swiper 
modules={[Pagination,Keyboard]}
spaceBetween={40}
slidesPerView={'auto'}
centeredSlides={'false'}
draggable={true}
pagination={{clickable:true}}

breakpoints={{
//when window width is  >= 1280px
    1280:{  
    spaceBetween:80,
    slidesPerView:1,
}
}}
>
 
    <SwiperSlide>
    <img class='destination-img' src={PhiPhi} alt="" />
    <div className="local-display">
        <IoLocationSharp id="pin" size={30}/>
        <p id="name">Phi Phi Islands</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <img class='destination-img' src={Jatiluwuh} alt="" />
    <div className="local-display">
        <IoLocationSharp id="pin" size={30}/>
        <p id="name">Jatiluwuh</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <img class='destination-img' src={Bali} alt="" />
    <div className="local-display">
        <IoLocationSharp id="pin" size={30}/>
        <p id="name">Bali</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <img class='destination-img' src={Phuket} alt="" />
    <div className="local-display">
        <IoLocationSharp id="pin" size={30}/>
        <p id="name">Phuket</p>
    </div>
    </SwiperSlide>
</Swiper>
    </>
  )
}

export default Carousel
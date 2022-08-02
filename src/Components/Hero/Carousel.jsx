import React from 'react';
import {Navigation,Pagination, Keyboard} from 'swiper';
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
modules={[Navigation,Pagination,Keyboard]}
spaceBetween={40}
slidesPerView={'auto'}
centeredSlides={'true'}
navigation={{clickable:true}}
draggable={true}
grabCursor={true}
pagination={{clickable:true}}

breakpoints={{
//when window width is  >= 1280px
    1280:{  
        pagination:false,
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev'
            },
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
import React from 'react';
import {Pagination, Keyboard} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './Hero.css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

import Bali from '../../assets/bali.jpg';
import Yogyakarta from '../../assets/yogyakarta.jpg';
import Phuket from '../../assets/phuket.jpg';


function Carousel() {
  return (
    <>
<Swiper 
modules={[Pagination,Keyboard]}
spaceBetween={20}
slidesPerView={'auto'}
centeredSlides={true}
pagination={{clickable:true}}
>
    <SwiperSlide>
    <img class='destination-img' src={Bali} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img class='destination-img' src={Yogyakarta} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img class='destination-img' src={Phuket} alt="" />
    </SwiperSlide>
</Swiper>
    </>
  )
}

export default Carousel
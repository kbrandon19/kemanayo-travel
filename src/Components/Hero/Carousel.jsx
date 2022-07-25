import React from 'react';
import {Pagination, Keyboard} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
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
centeredSlides={true}
draggable={true}
pagination={{clickable:true}}
>
 
    <SwiperSlide>
    <img class='destination-img' src={PhiPhi} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img class='destination-img' src={Jatiluwuh} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img class='destination-img' src={Bali} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img class='destination-img' src={Phuket} alt="" />
    </SwiperSlide>
</Swiper>
    </>
  )
}

export default Carousel
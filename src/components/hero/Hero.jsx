import React from "react";
import { Link } from "react-scroll";

import "./hero.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Hero = () => {
  return (
    <div className="hero-container">
      
     


        
      {/* <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="" style={{width:"100%"}}>
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/ba5790ef-6bfe-427c-8b13-739320e1cba11652015668956-Kurtas---Sets_Desk.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
    


    <div className="hero-details">

        <h1>REDUX BEST SELLING</h1>
        <h3>UNIQUE PRODUCTS BY WORLD'S TOP DESIGNER</h3>
        <Link
          to="prod-section"
          activeClass="active"
          offset={-80}
        >
          <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

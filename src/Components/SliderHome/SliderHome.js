import React from 'react'
import Slider from "react-slick";
import {sliderData} from "../../data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderHome.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function SliderHome() {
  AOS.init();
    const settings = {
     
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: 1,
      autoplaySpeed: 2000,
      lazyLoad: true,

      };
  return (
    <>
<section data-aos="fade-up" data-aos-duration="3000">
<div className=" m-auto w-full  overflow-hidden home">
<Slider className='header-slide relative' {...settings}>
     { sliderData.map(slider =>{
        return(
            <div key={slider.id} >
           
            <div className='slider-item-content items-center  absolute top-48 container m-auto text-center text-orange-300 md:pl-28 xl:pl-36 z-10'>
          <h1 className='text-2xl sm:text-5xl  tracking-wide '>{slider.title}</h1>
          <p className='md:text-2xl p '>{slider.text}</p>
      </div>
      <div className='slider-item '>
            <img src={slider.image} alt={slider.text} className='w-full h-[550px] brightness-50'/>
            </div>
        </div>
          
     )})}
      </Slider>
</div>
</section>
    </>
  )
}

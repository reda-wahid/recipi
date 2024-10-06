import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { allData } from "../../data";
import "./Meal.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Meal() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  AOS.init();
  return (
    <>
     <section id="meal">
     <div className="container m-auto p-10 meal">
        <div className="text-center p-16" data-aos="fade-up" data-aos-duration="3000">
          <h3 className="text-orange-300 text-2xl">choose a Meal</h3>
          <h1 className="text-5xl max-sm:text-4xl max-sm:w-full font-sans">
            Resipi Food
          </h1>
        </div>
        <div className="m m-2 gap-5" data-aos="fade-up" data-aos-duration="3000">
          <Slider {...settings} className="">
            {allData[1].data.map((item, i) => {
              return (
                <div key={i} className="w-screen md-text-2xl ">
                  <Link to={`recipi/slidedetails/id/${item.id}/${item.useid}`}>
                    <div className=" w-full relative">
                      <div>
                        <img
                          className="a rounded-full relative"
                          src={item.image}
                          alt={item.type}
                        />
                     
                      <div className="flex justify-center items-center hover:-translate-y-1 hover:scale-150 duration-300 absolute top-20 left-20 sm:top-24 sm:left-24 min-[350px]:top-[42%] min-[350px]:left-[40%] md:left-20 md:top-20  lg:left-20 lg:top-20 xl:top-[110px] xl:left-[105px]">
                        <p className="type bg-white .background-text h-20 w-20  rounded-full flex justify-center items-center  text-center  absloute top-52 ">
                          {item.type}
                        </p>
                      </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
     </section>
    </>
  );
}

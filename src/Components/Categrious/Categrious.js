import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { allData } from "../../data";
import "./Categrious.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Categrious() {
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
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
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
      <section className="" >
        <div className=" m-auto  categrios " >
          <div className="text-center p-16" data-aos="fade-up" data-aos-duration="3000">
            <h3 className="text-orange-300 text-2xl">choose a categrios</h3>
            <h1 className="text-5xl max-sm:text-4xl max-sm:w-full font-sans animate__animated animate__bounce animate__delay-2s">
              Resipi Food
            </h1>
          </div>

          <div className=" w-full slide" data-aos="fade-up" data-aos-duration="3000">
            <Slider {...settings}>
              {allData[0].data.map((item, i) => {
                return (
                  <div
                    key={item.type}
                    className="md-text-2xl hover:-translate-y-1 hover:scale-110 duration-300 "
                  >
                    <Link
                      to={`recipi/slidedetails/id/${item.id}/${item.useid}`}
                    >
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.type}
                        />
                        <div>
                          <p className="type text-center  w-full text-3xl text-white  ">
                            {item.type}
                          </p>
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

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { allData } from "../data";
import  wave  from "../Assets/images/wave-haikei.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SlideDetails() {
  AOS.init();
  var { userId } = useParams();
  var { useid } = useParams();

  const id = ++userId - 1;
  const iduse = ++useid - 1;

  const dd = allData.find((item) => item.id === iduse);

  const data = dd.data.find((item) => {
    return item.id === id;
  });

  return (
    <>
      <section data-aos="fade-up" data-aos-duration="3000">
      <img src={wave} alt="" className=" absolute h-[490px] shadow-2xl w-full z-0"/>
        <div className=" m-auto w-full  overflow-hidden container mt-15">
          
          {
            <div className=" flex justify-between max-md:justify-center max-md:flex-wrap gap-8 mt-10">
              <img
                src={data.image}
                alt={data.title}
                className= "w-90 h-[450px] max-[550px]:h-80 contrast-125  border-solid border-4  border-l-rose-950 rounded-full brightness-50 hover:brightness-100 hover:shadow-md shadow-2xl"
              />

              <div className="background-text content-center z-10 ">
                <h1 className="text-4xl text-orange-400  max-sm:w-full">
                  {data.type}
                </h1>
                <p className=" max-sm:w-full ">{data.title}</p>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
}

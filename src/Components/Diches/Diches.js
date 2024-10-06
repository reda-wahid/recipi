import React from "react";
import { allData } from "../../data";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Diches() {
  AOS.init();
  return (
    <>
     <section>
     <div className="container m-auto">
        <div className="text-center p-16" data-aos="fade-up" data-aos-duration="3000">
          <h3 className="text-orange-300 text-2xl">choose a Diches</h3>
          <h1 className="text-5xl max-sm:text-4xl max-sm:w-full font-sans">
            Resipi Food
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm gap-10 text-white ">
          {allData[2].data.map((item) => (
            <div key={item.id} data-aos="fade-up" data-aos-duration="3000">
              <div className=" w-full relative hover:-translate-y-1 hover:scale-110 duration-300" >
                <Link to={`recipi/slidedetails/id/${item.id}/${item.useid}`}>
                  <div>
                    <img src={item.image} alt={item.type} className="full" />
                  </div>
                  <p className=" absolute top-6 md:-left-5  max-sm:w-52 background p-2 opacity-65">
                    {item.type}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
     </section>
    </>
  );
}

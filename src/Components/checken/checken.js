import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./checken.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/chickenSlice";
import { IoIosAddCircle } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Checken() {
  const { meal } = useSelector((state) => state.recipi);

  const dispatch = useDispatch();
  AOS.init();

  return (
    <>
      <section >
        <div className="container m-auto p-10 ">
          <div className="text-center p-16" data-aos="fade-up" data-aos-duration="3000">
            <h3 className="text-orange-300 text-2xl">choose a dinner</h3>
            <h1 className="text-5xl max-sm:text-4xl max-sm:w-full font-sans">
              Resipi Food
            </h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm gap-10 text-white" >
            {meal.map((item) => (
              <div key={item.id} className="la" data-aos="fade-up" data-aos-duration="3000">
                <div className=" w-full relative    overflow-hidden  ">
                  <div className="">
                    <div className="img h-72  ">
                      <Link to={`recipi/details/id/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full  h-full rounded-xl"
                        />
                      </Link>
                    </div>
                    <button
                      className="  w-fit  text-3xl  "
                      onClick={() =>
                        dispatch(
                          addtocart({
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            price: 225,
                            qty: 1,
                          })
                        )
                      }
                    >
                      <IoIosAddCircle className="bttn background-text" />
                    </button>
                  </div>
                  <div className="info p-2  w-full ">
                    <div>
                      <p className="mb-3  background-text w-full">
                        {item.title}
                      </p>
                    </div>
                    <Link to={`recipi/allfood`}>
                      <button className="w-full text-white bg-orange-400 hover:bg-slate-500 p-2 rounded-xl">
                        Full Recipes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

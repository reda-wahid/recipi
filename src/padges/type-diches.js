import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { allData } from "../data";
import { useParams } from "react-router-dom";
import SlideDetails from "./SlideDetails";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/chickenSlice";
import { IoIosAddCircle } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TypeDiches() {
  AOS.init();
  const dispatch = useDispatch();

  var { userId } = useParams();
  var { useid } = useParams();

  const iduse = ++useid - 1;
  const id = ++userId - 1;

  const dd = allData.find((item) => item.id === iduse);
  const data = dd.data.find((item) => {
    return item.id === id;
  });

  return (
    <>
      <section>
        {<SlideDetails />}
        <div className=" container m-auto p-10 ">
          <div className="grid grid-cols-1   xl:grid-cols-3 sm:grid-cols-2 min-sm gap-10 text-white overflow-hidden">
            {data.detailes.map((item) => (
              <div key={item.id} data-aos="fade-up" data-aos-duration="3000">
                <div className="la w-full  relative  content-between border-2 border-orange-400 hover:border-slate-500 overflow-hidden rounded-md ">
                  <Link
                    to={`/recipi/details/id/${item.id}/${data.useid}/${data.id}`}
                  >
                    <div className="hover:-translate-y-1 hover:scale-110 hover:rotate-3 duration-300">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img w-full h-60"
                      />
                    </div>
                  </Link>
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
                  <div className="grid content-between w-full">
                    <div>
                      <h1 className="text-orange-400 text-2xl ">{item.name}</h1>
                      <p className=" background-text w-full h-32 p-2">
                        {item.title}
                      </p>
                    </div>

                    <div>
                      <button
                        className="btn w-full text-white bg-orange-400 hover:bg-slate-500 p-2  text-center"
                        onClick={() =>
                          dispatch(
                            addtocart({
                              id: item.id,
                              name: item.name,
                              image: item.image,
                              price: item.price,
                              qty: 1,
                            })
                          )
                        }
                      >
                        Add To Cart
                      </button>
                    </div>
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

import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import { decrement, deletecart, increment } from "../redux/chickenSlice";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CartItem() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    click ? setClick(false) : setClick(true);
  };

  const cart = useSelector((state) => state.recipi.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <section className="relative">
        <div onClick={handleClick}>
          <IoCart className=" size-10 p-2 re text-slate-50 rounded-full cursor-pointer  hover:text-red-600 shadow-xl border-orange-400 border-2 hover:border-white hover:shadow-sm hover:shadow-white" />
        </div>
        <p className="absolute -top-1 -right-1 text-white">{cart.length}</p>
        <div className="cla z-20  ">
          {click ? (
            <div className="absolute -left-[272px] top-[97px] scroll-smooth  background w-96 h-fit z-20 p-4 ">
              {cart.length ? (
                cart?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex content-center justify-between gap-5 bg-white mb-5 z-20 rounded-md p-2 relative "
                    >
                      <div
                        onClick={() => dispatch(deletecart(item))}
                        className=" absolute -top-2 -right-2  border-red-500 border-2 rounded-full  text-2xl cursor-pointer"
                      >
                        <RiCloseFill />
                      </div>
                      <div className="flex background-text">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-full w-20 h-20"
                        />
                        {item.name || <p>meals</p>}
                      </div>
                      <div>
                        <div className="flex   text-2xl text-white bg-gray-600 rounded-lg">
                          <button
                            className="pr-1 pl-1 border-2"
                            onClick={() => dispatch(decrement(item))}
                          >
                            {" "}
                            <FiMinus />{" "}
                          </button>
                          <input
                            type="text"
                            className="w-8 bg-gray-600 text-center outline-none"
                            value={item.qty}
                          />
                          <button
                            className=" pr-1 pl-1  border-2"
                            onClick={() => dispatch(increment(item))}
                          >
                            {" "}
                            <BsPlusLg />{" "}
                          </button>
                        </div>
                        <small className="text-red-600">{item.price}$</small>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-white text-center m-10 text-5xl">
                  add meals
                </p>
              )}
              <div>
                <div className="flex justify-between text-white">
                  <p>Total price</p>
                  <small className="text-red-600">{totalPrice}$</small>
                </div>
                <Link to="/">
                  <div className="bg-orange-300 p-2 text-center text-white rounded-lg cursor-pointer hover:bg-orange-400">
                    Sheck Out
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}

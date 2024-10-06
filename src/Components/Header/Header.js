import React from "react";
import logo from "../../Assets/images/logo.png";
import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import CartItem from "../../padges/CartItem";

export default function Header({ handledata }) {
  return (
    <>
      <header>
        <div className=" w-full ">
          <div className="banner flex sm:justify-center h-11 m-6">
            <img src={logo} alt="img" />
            <p className="text-4xl ">
              find<span className="text-orange-300 ">recipe</span>
            </p>
          </div>

          <div className="background w-full p-3 ">
            <div className=" flex justify-between gap-1 ">
              <p className="text-white text-2xl p-1">
                RE<span className="text-orange-300">DA</span>
              </p>

              <div className="flex gap-1 ml-3 mb-2 border-2 rounded-full overflow-hidden  bg-white">
                <input
                  className="p-1 pl-4 pr-4 outline-none h-10 max-sm:w-28 text-orange-400 shadow-sm shadow-white"
                  type="text"
                  placeholder="search recipi here"
                  onChange={handledata}
                />
                <Link to="recipi/allfood">
                  <IoMdSearch
                    onClick={() => handledata}
                    className=" size-10 p-2   cursor-pointer  hover:text-red-600 shadow-sm shadow-white"
                  />
                </Link>
              </div>
              <div className="flex gap-5">
                <CartItem />
                <IoPersonOutline className=" size-10 p-2  text-slate-50 rounded-full cursor-pointer  hover:text-red-600 shadow-xl border-orange-400 border-2 hover:border-white hover:shadow-sm hover:shadow-white" />
              </div>
            </div>

            <div className="">
              <ul className="flex justify-center sm:gap-5 text-white">
                <NavLink to="/">
                  <li>Home</li>
                </NavLink>
                <NavLink to="recipi/type/111">
                  <li>Categrious</li>
                </NavLink>
                <NavLink to="recipi/allfood">
                  <li>AllFood</li>
                </NavLink>
                <NavLink to="recipi/type/333">
                  <li>Diches</li>
                </NavLink>
                <NavLink to="recipi/type/222">
                  <li>Meals</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

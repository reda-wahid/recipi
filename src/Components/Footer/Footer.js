import React from "react";
import logo from "../../Assets/images/logo.png";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { LuInstagram } from "react-icons/lu";

export default function Footer() {
  return (
    <>
      <footer>
      <div className="background m-0 leading-10 pt-8">
        <div className="banner flex sm:justify-center h-11">
          <img src={logo} alt="img" />
          <p className="text-4xl ">
            find<span className="text-orange-500 ">recipe</span>
          </p>
        </div>
        <div className=" text-white ">
          <ul className="flex gap-5 justify-center">
            <li>Recipe Glossary</li>
            <li>Press & Media</li>
            <li>Privacy Policy</li>
            <li>Termes Conditions</li>
          </ul>
        </div>

        <div>
          <ul className="flex justify-center gap-5 text-3xl text-white">
            <li>
              <TiSocialFacebookCircular />
            </li>
            <li>
              <TiSocialLinkedinCircular />
            </li>
            <li>
              <LuInstagram />
            </li>
            <li>
              <TiSocialTwitterCircular />
            </li>
          </ul>
        </div>
      </div>
      </footer>
    </>
  );
}

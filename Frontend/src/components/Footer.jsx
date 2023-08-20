import React from "react";
import { NavLink } from "react-router-dom";
import logowhite from "../img/logowhite.svg";
import facebook from "../img/icon-facebook.svg";
import xing from "../img/logo-xing.svg";
import linkedin from "../img/linkedin.svg";
import instagram from "../img/icon-instagram.svg";
import github from "../img/github.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col justify-between mx-auto md:px-8 space-y-8 py-10  lg:flex-row  md:space-y-0  ">
          {/* logo container  */}
          <div className="flex flex-col space-y-12 md:mb-8">
            <img src={logowhite} alt="" className="lg:h-8 " />
            <div className="flex justify-center space-x-4 ">
              <a href="" className="hover:scale-125 " target="_blank">
                <img
                  src={facebook}
                  alt="facebook"
                  className="h-8  rounded-md hover:bg-black"
                />
              </a>
              <a
                href="https://www.xing.com/profile/Adnan_hanif5/cv"
                className="hover:scale-125 bg-white rounded-md"
                target="_blank"
              >
                <img src={xing} alt="" className="h-8 " />
              </a>
              <a
                href="https://github.com/adhanif"
                className="hover:scale-125 bg-white rounded"
                target="_blank"
              >
                <img src={github} alt="" className="h-8 rounded-md" />
              </a>
              <a
                href="https://www.linkedin.com/in/adnan-hanif/"
                className="hover:scale-125 bg-white rounded-md"
                target="_blank"
              >
                <img src={linkedin} alt="" className="h-8 " />
              </a>
              <a
                href="https://www.instagram.com/danilonewarrior/"
                className="hover:scale-125"
                target="_blank"
              >
                <img src={instagram} alt="" className="h-8" />
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-around space-x-40 ">
            <div className="flex flex-col space-y-3 text-white ">
              <NavLink to="/" className="hover:text-brightRed hover:scale-110">
                {" "}
                Home
              </NavLink>

              <div className="flex flex-col space-y-3 text-white ">
                <NavLink
                  to="/about"
                  className="hover:text-brightRed hover:scale-110"
                >
                  {" "}
                  About me
                </NavLink>
                <NavLink
                  to="/skills"
                  className="hover:text-brightRed hover:scale-110"
                >
                  {" "}
                  Skills
                </NavLink>
                <NavLink
                  to="/contact"
                  className="hover:text-brightRed hover:scale-110"
                >
                  {" "}
                  Contact
                </NavLink>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col space-y-3 text-white  md:mb-20">
              <NavLink
                to="/Portfolio"
                className="hover:text-brightRed hover:scale-110"
              >
                Projects
              </NavLink>

              <a href="" className="hover:text-brightRed hover:scale-110">
                Privacy Policy
              </a>
            </div>
          </div>
          {/* searchbar+copyright container */}
          <div className="flex flex-col items-center space-y-12 ">
            <div className="flex space-x-3 ">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Subscribe "
              />
              <button className="px-6 py-2 text-white rounded-full bg-red-900 hover:bg-orange-500 focus:outline-none hover:scale-110">
                Go
              </button>
            </div>
            <div className="text-white text-center">
              Copyright &copy; 2023, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

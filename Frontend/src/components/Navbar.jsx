import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Bars3Icon, BeakerIcon, XMarkIcon } from "@heroicons/react/24/solid";

import logo from "../img/logo.svg";

export default function Navbar() {
  const [isDiplayed, setIsDiplayed] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    { Home: "/" },
    { About: "about" },
    { Skills: "skills" },
    { Portfolio: "Portfolio" },
  ];

  function handleClick() {
    setIsDiplayed(!isDiplayed);
  }

  return (
    <>
      <nav className="relative container  mx-auto p-8 text-black">
        {/* Flex container  */}
        <div className="flex flex-col md:flex-row   justify-between md:items-center">
          {/* Logo */}
          <div className="pt-2">
            <img src={logo} alt="" />
          </div>

          {/* Menu icons  */}
          <div
            onClick={handleClick}
            className="absolute right-8 cursor-pointer md:hidden "
          >
            {isDiplayed ? (
              <XMarkIcon className="h-7 w-7 text-black" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-black" />
            )}
          </div>

          <div
            className={`flex flex-col md:flex-row md:space-x-6 lg:space-x-10 translate-all  Z-[-1] md:Z-auto duration-700 ease-in ${
              !isDiplayed ? "top-12 hidden md:flex" : "top-[-490px]"
            }`}
          >
            {menuItems.map((item) => {
              const key = Object.keys(item)[0];
              return (
                <div className="my-5 lg:my-0 md:pl-0 hover:scale-110" key={key}>
                  <NavLink
                    to={Object.values(item)[0]}
                    className="hover:text-orange-500 hover:scale-110 font-bold text-xl  "
                  >
                    {Object.keys(item)[0]}
                    {/* {item} */}
                  </NavLink>
                </div>
              );
            })}
          </div>
          <button
            className="hidden   md:block p-2 px-4  text-white bg-red-900 hover:bg-orange-500  rounded-full text-center  hover:bg-brightRedLigh focus:outline-none hover:scale-110"
            onClick={() => {
              navigate("/contact");
            }}
          >
            {" "}
            Contact me
          </button>
        </div>
      </nav>
    </>
  );
}

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Bars3Icon, BeakerIcon, XMarkIcon } from "@heroicons/react/24/solid";


export default function Navbar() {
  const [isDiplayed, setIsDiplayed] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 90) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

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
      <nav
        className={`fixed z-50 px-8 py-4 md:py-2 lg:py-4  text-white w-screen ${
          navbarColor
            ? " bg-white text-black border-b-2  shadow-lg "
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row   justify-between md:items-center">
            <div className="">
              <h1
                className={`font-bold text-xl lg:text-3xl ${
                  navbarColor ? " text-black  " : " text-white"
                }`}
              >
                Adnan <span className="text-orange-500">Hanif</span>
              </h1>
            </div>

            {/* Menu icons  */}
            <div
              onClick={handleClick}
              className="absolute right-8 cursor-pointer md:hidden "
            >
              {isDiplayed ? (
                <XMarkIcon className="h-7 w-7 text-white" />
              ) : (
                <Bars3Icon className="h-7 w-7 text-white" />
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
                  <div
                    className="my-5 lg:my-0 md:pl-0 hover:scale-110"
                    key={key}
                  >
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
              className="hidden   md:block p-2 px-4  text-white bg-red-900 hover:bg-orange-500  rounded-md text-center  hover:bg-brightRedLigh focus:outline-none hover:scale-110"
              onClick={() => {
                navigate("/contact");
              }}
            >
              {" "}
              Contact me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

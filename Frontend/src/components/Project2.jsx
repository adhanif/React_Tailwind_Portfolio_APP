import React from "react";
import project2 from "../img/project2.jpg";
import github from "../img/github.png";
import projectLink from "../img/external-link.svg";

export default function Project2() {
  return (
    <>
      <h1 className="mt-20 text-3xl md:text-5xl font-bold text-center mb-20  md:mb-40 underline underline-offset-8 decoration-red-900">
        Project Details
      </h1>
      <div className="sm:container px-5 md:px-0 mx-auto flex flex-col-reverse lg:flex-row lg:space-x-5 ">
        <div className="w-full  lg:w-[60%]  mt-5 lg:mt-0 flex flex-col justify-start space-y-20 md:space-y-40 ">
          <img
            src={project2}
            alt=""
            className="w-full h-[230px] md:h-[500px] object-fill rounded-lg shadow-lg "
          />
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10 ">
            <a href="https://github.com/adhanif/mapReact" target="_blank">
              <button
                className="w-full md:w-auto flex items-center  justify-center space-x-3 p-2 px-4  text-white bg-green-900 hover:bg-green-300  rounded-full text-center  hover:text-black focus:outline-none hover:scale-110"
                href="www.google.com"
              >
                {" "}
                <img src={github} alt="" className="h-8 " />
                <p className="font-semibold">Github Link</p>
              </button>
            </a>
            <a href="https://whatsyourip.netlify.app/" target="_blank">
              <button
                className="w-full md:w-auto flex items-center justify-center space-x-3 p-2 px-4  text-white bg-green-900 hover:bg-green-300  rounded-full text-center  hover:text-black focus:outline-none hover:scale-110"
                href="www.google.com"
              >
                {" "}
                <img src={projectLink} alt="" className="h-8 " />
                <p className="font-semibold">Show Demo</p>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full  lg:w-[40%]">
          <div className="bg-white shadow-lg p-8 md:p-10 rounded-lg hover:scale-95">
            <h1 className="text-2xl font-bold mb-5 text-center ">
              IP Address Geolocation Viewer
            </h1>
            <p className="text-justify">
              IP Address Geolocation Viewer is a web application built using
              React, Leaflet, and other technologies, allowing users to discover
              information about their IP address and its geographical location.{" "}
            </p>
          </div>
          <div className="bg-white shadow-lg  mt-5 p-8 md:p-10 rounded-lg hover:scale-95">
            <h1 className="font-bold text-2xl mb-5 text-center">
              Project information
            </h1>
            <p className="font-semibold text-lg mb-2">Technologies</p>
            <div className="pl-6 mb-2">
              {" "}
              <ul className="list-disc text-base">
                <li> React, HTML, Bootstrap, CSS, Javascript ES6</li>
                <li> Node.js, Axios</li>
                <li>React-Leaflet</li>
              </ul>
            </div>
            <p className="font-semibold text-lg mb-2"> Functionalities:</p>
            <div className="pl-6 mb-2">
              {" "}
              <ul className="list-disc text-base">
                <li>Fetch and present user's IP address and location map </li>
                <li>
                  Show country, state, city, coordinates, ISP, and continent
                </li>
                <li>Visualize country flag for better context</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

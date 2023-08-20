import React from "react";
import image from "../img/gif.gif";
import github from "../img/github.png";
import projectLink from "../img/external-link.svg";

export default function FinalProject() {
  return (
    <>
      <h1 className="mt-20 text-3xl md:text-5xl font-bold text-center mb-20  md:mb-40 underline underline-offset-8 decoration-red-900">
        Project Details
      </h1>
      <div className="sm:container px-5 md:px-0 mx-auto flex flex-col-reverse lg:flex-row lg:space-x-5 ">
        <div className="w-full  lg:w-[60%]  mt-5 lg:mt-0 flex flex-col justify-start space-y-20 md:space-y-40 ">
          <img
            src={image}
            alt=""
            className="w-full h-[230px] md:h-[500px] object-cover rounded-lg shadow-lg hover:scale-95"
          />
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10 ">
            <a
              href="https://github.com/adhanif/MERN_Stack_Diabetes_APP"
              target="_blank"
            >
              <button
                className="w-full md:w-auto flex items-center  justify-center space-x-3 p-2 px-4  text-white bg-green-900 hover:bg-green-300  rounded-full text-center  hover:text-black focus:outline-none hover:scale-110"
                href="www.google.com"
              >
                {" "}
                <img src={github} alt="" className="h-8 " />
                <p className="font-semibold">Github Link</p>
              </button>
            </a>
            <a
              href="https://mern-stack-diabetes-app.onrender.com/"
              target="_blank"
            >
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
              TypeOne Diabetes App
            </h1>
            <p className="text-justify">
              TypeOne is a web application designed to empower individuals with
              diabetes by providing valuable educational resources and fostering
              connections within the diabetes community. TypeOne allows
              registered users to access informative articles about diabetes and
              discover nearby events. The application is built using modern web
              technologies, including the{" "}
              <span className="font-semibold">
                MERN stack (MongoDB, Express.js, React, and Node.js)
              </span>{" "}
              for the backend and frontend development.
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
                <li>HTML, Tailwind, CSS, Javascript ES6</li>
                <li>Express.js, MongoDB, Node.js</li>
                <li>React-Leaflet, React-Hook-Form, geoCoder</li>
              </ul>
            </div>
            <p className="font-semibold text-lg mb-2"> Functionalities:</p>
            <div className="pl-6 mb-2">
              {" "}
              <ul className="list-disc text-base">
                <li>User registration, Login & logout </li>
                <li>Creating events and showing on the map</li>
                <li>Events Pagination (Server side)</li>
                <li>
                  Events filteration based on Distance, City, Categories,
                  Keyword and Date (Server side)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

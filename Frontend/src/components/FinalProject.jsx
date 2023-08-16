import React from "react";
// import image from "../img/diabetes.avif";
import image from "../img/gif.gif";

export default function FinalProject() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 mb-20">
        PROJECT DETAILS
      </h1>
      <div className="container mx-auto flex flex-col lg:flex-row space-x-5">
        <div className="w-[70%] ">
          <img src={image} alt="" className="w-full h-[500px] object-cover" />
        </div>
        <div className="w-[30%]">
          <div>
            <h1 className="text-2xl font-bold mb-5 ">TypeOne Diabetes App</h1>
            <p className="break-all">
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
          <div className="bg-white shadow-lg rounded mt-5 p-5">
            <h1 className="font-bold text-2xl mb-5">Project information</h1>
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

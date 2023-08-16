import React from "react";
// import image from "../img/diabetes.avif";
import image from "../img/gif.gif";

export default function FinalProject() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-5 mb-10">
        PROJECT DETAILS
      </h1>
      <div className="container mx-auto flex flex-col lg:flex-row space-x-5">
        <div className="w-[70%] ">
          <img src={image} alt="" className="w-full h-[500px] object-cover" />
        </div>
        <div className="w-[30%]">
          <h1 className="text-2xl font-bold mb-5">TypeOne Diabetes App</h1>
          <p>
            TypeOne is a web application designed to empower individuals with
            diabetes by providing valuable educational resources and fostering
            connections within the diabetes community. With a focus on knowledge
            enhancement and community building, TypeOne allows registered users
            to access informative articles about diabetes and discover nearby
            events where they can connect with others sharing a similar journey.
            The application is built using modern web technologies, including
            the MERN stack (MongoDB, Express.js, React, and Node.js) for the
            backend and frontend development.
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import image from "../img/diabetes.avif";
import map from "../img/maps.jpg";

export default function Portfolio() {
  return (
    <>
      <h1 className=" mt-10 md:mt-20 font-bold text-3xl md:text-6xl text-center underline underline-offset-8 decoration-red-900 ">
        Projects
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row md:space-x-5 justify-center items-center mt-20">
        <NavLink to="/finalProject">
          <ProjectCard heading={"TypeOne Diabetes App"} img={image} />
        </NavLink>
        <NavLink to="/project2">
          <ProjectCard heading={"IP Address Geolocation"} img={map} />
        </NavLink>
      </div>
    </>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import image from "../img/diabetes.avif";

export default function Portfolio() {
  return (
    <>
      <h1 className=" mt-10 md:mt-20 font-bold text-4xl md:text-6xl text-center underline underline-offset-8 decoration-red-900 ">
        Projects
      </h1>
      <div className="container mx-auto flex flex-col justify-items-center items-center mt-20">
        <NavLink to="/finalProject">
          <ProjectCard heading={"TypeOne Diabetes App"} img={image} />
        </NavLink>
      </div>
    </>
  );
}

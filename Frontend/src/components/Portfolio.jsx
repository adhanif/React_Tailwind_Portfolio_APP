import React from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import image from "../img/diabetes.avif";

export default function Portfolio() {
  return (
    <>
      <div className="container mx-auto flex flex-col  items-center mt-20">
        <NavLink to="/finalProject">
          <ProjectCard heading={"TypeOne Diabetes App"} img={image} />
        </NavLink>
      </div>
    </>
  );
}

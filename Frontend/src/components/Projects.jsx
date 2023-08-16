import React from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import image from "../img/diabetes.avif";
export default function Projects() {
  return (
    <>
      <NavLink
        to="/finalProject"
        className="container mx-auto flex flex-col  items-center mt-10"
      >
        <ProjectCard heading={"TypeOne Diabetes App"} img={image} />
      </NavLink>
    </>
  );
}

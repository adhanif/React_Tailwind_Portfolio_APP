import React from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import image from "../img/diabetes.avif";
import map from "../img/maps.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Portfolio() {
  return (
    <>
      <h1 className=" mt-10 md:mt-20 font-bold text-3xl md:text-6xl text-center underline underline-offset-8 decoration-red-900 ">
        Projects
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-5 justify-center items-center mt-20">
        <AnimationOnScroll animateIn="animate__zoomIn " duration={2}>
          <ProjectCard heading={"TypeOne Diabetes App"} img={image} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__zoomIn " duration={2}>
          <ProjectCard heading={"IP Address Geolocation"} img={map} />
        </AnimationOnScroll>
      </div>
    </>
  );
}

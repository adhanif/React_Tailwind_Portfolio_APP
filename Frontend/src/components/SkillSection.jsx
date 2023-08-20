import React from "react";
import html5 from "../img/html5.svg";
import css3 from "../img/css3.svg";
import javascript from "../img/javascript-1.svg";
import react from "../img/react.svg";
import expressJS from "../img/expressJS.svg";
import tailwindcss from "../img/tailwindcss.svg";
import bootstrap from "../img/bootstrap.svg";
import materialUI from "../img/material-ui.svg";
import mongodb from "../img/mongodb.svg";
import SkillsCard from "./SkillsCard";

export default function SkillSection() {
  return (
    <>
      <h1 className="mt-10 md:mt-40 font-bold text-3xl md:text-6xl mb-2 text-center underline underline-offset-8 decoration-red-900 ">
        Skills
      </h1>
      <div className="container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
        {/* 1st card  */}
        <SkillsCard logo={html5} heading={"HTML 5"} />

        {/* 2nd card  */}
        <SkillsCard logo={css3} heading={"CSS3 Styling"} />

        {/* 3rd card  */}
        <SkillsCard logo={javascript} heading={"Javascript"} />

        {/* 4th card  */}
        <SkillsCard logo={react} heading={"React"} />

        {/* 5th card  */}
        <SkillsCard logo={expressJS} heading={"ExpressJs"} />

        {/* 6th card  */}
        <SkillsCard logo={tailwindcss} heading={"Tailwindcss"} />

        {/* 7th card  */}
        <SkillsCard logo={bootstrap} heading={"Bootstrap"} />

        {/* 8th card  */}
        <SkillsCard logo={materialUI} heading={"Material UI"} />

        {/* 9th card  */}
        <SkillsCard logo={mongodb} heading={"Mongodb"} />
      </div>
    </>
  );
}

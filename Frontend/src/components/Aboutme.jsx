import React from "react";
import portrait from "../img/portrait.jpg";
import JobCard from "./JobCard";
import portfolioImage from "../img/portfolio.jpeg";
import Typewriter from "typewriter-effect";

export default function Aboutme() {
  return (
    <>
      <div
        className="relative overflow-hidden  bg-no-repeat bg-right-bottom md:bg-center bg-cover  h-[300px] md:h-[700px]  md:bg-fixed"
        style={{
          backgroundImage: `url(${portfolioImage})`,
        }}
      >
        <div
          className="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-opacity-50   "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <h1 className="text-white font-medium text-4xl md:text-8xl text-center">
            I am Adnan Hanif
          </h1>
          <span className="text-white mt-10 font-medium text-2xl md:text-5xl">
            {" "}
            <Typewriter
              options={{
                strings: ["Full-Stack Web-Developer", "Front-end Focus"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>

      <div className="container flex flex-col  justify-between px-8   mx-auto mt-4  space-y-12 md:py-10  md:space-y-0">
        <div className="mb-12">
          <h1 className="text-center lg:text-left text-4xl md:text-6xl font-semibold mb-7 mt-5">
            About <span className="text-orange-500">me</span>
          </h1>
          <p className="p-4 bg-slate-300 rounded bg-opacity-50 text-base mx-auto lg:mx-0 w-full text-center md:text-2xl lg:text-left md:max-w-xl ">
            Let me tell you few things...
          </p>
        </div>

        <div className="flex flex-col  lg:flex-row md:space-x-12 xs:space-y-10 lg:space-y-0 items-center lg:items-start ">
          <div className=" md:w-1/3">
            <img
              src={portrait}
              alt=""
              className=" object-contain rounded-full border-4 border-orange-500 "
            />
          </div>
          <div className=" md:w-full ">
            <p className="text-base md:text-2xl  text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              quaerat, cum quibusdam tenetur quasi explicabo dolor, illo, natus
              a deleniti enim optio assumenda fugiat dicta totam ad expedita
              alias. Quasi. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Iste, maxime. Asperiores adipisci quas dignissimos. Non nisi
              aliquam ducimus corporis deleniti voluptatibus pariatur quas unde
              animi itaque quod, a totam quibusdam.Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Iste, maxime. Asperiores adipisci
              quas dignissimos. Non nisi aliquam ducimus corporis deleniti
              voluptatibus pariatur quas.
            </p>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-6 gap-10  items-center px-8 mx-auto mt-20 mb-10 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
        {/* 1st card  */}
        <JobCard
          job={"Freelancer"}
          position={"Full Stack Developer"}
          detail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.`}
        />

        {/* 2nd card  */}
        <JobCard
          job={"Designer ABC"}
          position={"Front End Developer"}
          detail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.`}
        />

        {/* 3rd card  */}
        <JobCard
          job={"Webworks"}
          position={"Back End Developer"}
          detail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.`}
        />
      </div>
    </>
  );
}

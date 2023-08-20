import React from "react";
import portrait from "../img/portrait4.jpg";
import JobCard from "./JobCard";
import Typewriter from "typewriter-effect";

export default function Aboutme() {
  return (
    <>
      <div className="container flex flex-col  justify-between md:px-8   mx-auto mt-4  space-y-12 md:py-10  md:space-y-0">
        <div className="mb-12">
          <h1 className="text-center lg:text-left text-3xl md:text-6xl font-semibold mb-7 mt-5">
            About <span className="text-orange-500">me</span>
          </h1>
          <p className="p-4 bg-slate-300 rounded bg-opacity-50 text-base mx-auto lg:mx-0 w-full text-center md:text-2xl lg:text-left md:max-w-xl md:mb-10">
            <span>
              <Typewriter
                options={{
                  strings: ["Let me tell you few things about me..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
        </div>
        <div className="grid place-items-center ">
          <img
            src={portrait}
            alt=""
            className=" w-[350px] h-[300px]   delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0 md:mb-20"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="flex flex-col  lg:flex-row md:space-x-12 xs:space-y-10 lg:space-y-0 items-center lg:items-start ">
          <div className=" md:w-full " data-taos-offset="400">
            <p className="text-base md:text-xl  text-justify px-0 md:px-8 lg:px-0   ">
              Hi, I am Adnan. I am a highly motivated and enthusiastic Junior
              Web Developer with a background in engineering, bringing a unique
              perspective to the world of web development. Throughout my
              education and working experience, I've been somehow connected with
              technology, and always been passionate about building things. In
              my previous professional role, while working on a task, I
              discovered my true passion and decided to change my career to a
              new path. Since I believe you should never stop learning, So
              recently I completed my 15 weeks Full-Stack Web Development
              Bootcamp at the esteemed WBS Coding School Berlin.
              <br />
              <br />
              This intensive boot-camp has provided me with a solid foundation
              in the building blocks of modern web applications. Now, coding is
              my playground, and I'm excited to keep learning. I'm not just
              learning to code, I'm passionate about it, and I'm here to shape
              the digital world in my unique way. With my strong analytical
              abilities, attention to detail, and a natural thirst for
              continuous learning, I am ready to contribute to your team's
              success. I am constantly looking for new opportunities in the
              field of web development.
            </p>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-6 gap-10  items-center justify-items-center md:px-8 mx-auto mt-20 mb-10 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
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

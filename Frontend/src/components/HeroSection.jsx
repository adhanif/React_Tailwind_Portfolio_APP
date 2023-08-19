import React from "react";
import hero from "../img/hero.jpg";
import portfolioImage from "../img/portfolio.jpeg";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
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
          <h1 className="text-white font-medium text-4xl md:text-6xl lg:text-8xl text-center">
            I am Adnan Hanif
          </h1>
          <span className="text-white mt-10 font-medium text-2xl md:text-xl lg:text-5xl">
            {" "}
            <Typewriter
              options={{
                strings: ["Full-Stack Web Developer", "Front-end Focus"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>

      <div className="container flex flex-col-reverse items-center  text-center px-8 mx-auto mt-10 space-y-8  lg:flex-row md:space-y-0 ">
        <div className="flex flex-col  text-center  space-y-12 pr-0 md:pr-5 lg:w-1/2  md:mt-10">
          <h1 className=" text-3xl font-bold text-center  md:text-5xl  md:text-left  sm:text-4xl ">
            Render ideas to perfection and make visible what yet to come
          </h1>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            non dolorum fugiat magnam quasi modi illum sequi commodi officiis
            corporis officia, fugit dolores suscipit. Illum mollitia sint
            sapiente facilis quae. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sapiente non dolorum fugiat magnam quasi modi
            illum sequi commodi officiis corporis officia, fugit dolores
            suscipit. Illum mollitia sint sapiente facilis quae. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Sapiente non dolorum
            fugiat magnam quasi modi illum sequi commodi officiis corporis
            officia.
          </p>
          <div className="text-center ">
            <button className="p-3 w-32 pt-2   text-white bg-red-900 rounded-full  hover:bg-brightRedLight  hover:scale-110 ">
              {" "}
              Read more
            </button>
          </div>
        </div>

        {/* image  */}
        <div className=" sm:w-1/2  md:w-full lg:w-full ">
          <img src={hero} alt="" className="w-full mb-6 md:mb-0 md:w-full " />
        </div>
      </div>
    </>
  );
}

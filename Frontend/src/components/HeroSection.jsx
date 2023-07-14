import React from "react";
import hero from "../img/hero.jpg";
export default function HeroSection() {
  return (
    <>
      <div className="container flex flex-col-reverse items-center item px-8 mx-auto mt-10 space-y-0  lg:flex-row md:space-y-0 ">
        <div className="flex flex-col  mr-11 space-y-12  lg:w-1/2  md:mt-10">
          <h1 className="max-w-2xl text-5xl font-bold text-center md:text-5xl  md:text-left  sm:text-4xl sm:mt-4 sm:text-center md:mt-0">
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
          <img src={hero} alt="" className="w-full  md:w-full " />
        </div>
      </div>
    </>
  );
}

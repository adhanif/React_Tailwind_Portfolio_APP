import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="container flex flex-col-reverse items-center  px-8 mx-auto mt-40 space-y-0 sm:flex-row md:space-y-0 ">
        <div className="flex flex-col  mr-11 space-y-12 md:w-1/2 ">
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
          <div className="text-center">
            <button className="p-3 w-32 pt-2   text-white bg-red-900 rounded-full  hover:bg-brightRedLight ">
              {" "}
              Read more
            </button>
          </div>
        </div>

        {/* image  */}
        <div className="md:w-1/2 sm:w-1/2 md:columns-1">
          <img src="src/img/hero.jpg" alt="" className="" />
        </div>
      </div>
    </>
  );
}

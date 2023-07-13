import React from "react";

export default function SkillSection() {
  return (
    <>
      <h1 className="mt-40 font-bold text-6xl mb-2 text-center underline underline-offset-8 decoration-red-900 ">
        Skills
      </h1>
      <div className="container grid grid-cols-6 gap-5 space-y-8   items-center px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:">
        {/* 1st card  */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 p-5 md:w-100"
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src="src/img/html5.svg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 mt-5">
            <div className="font-bold text-2xl mb-2 text-center">HTML 5</div>
            <p className="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* 2nd card  */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 p-5 md:w-100"
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src="src/img/css3.svg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">
              CSS3 Styling
            </div>
            <p className="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* 3rd card  */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 p-5 md:w-100"
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src="src/img/javascript-1.svg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">
              Javascript
            </div>
            <p className="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* 4th card  */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 p-5 md:w-100"
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src="src/img/react.svg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">React</div>
            <p className="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* 5th card  */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 p-5 md:w-100"
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src="src/img/node-js.svg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">ExpressJs</div>
            <p className="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* 6th card  */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 p-5 md:w-100 "
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src="src/img/tailwindcss.svg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">
              Tailwindcss
            </div>
            <p className="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

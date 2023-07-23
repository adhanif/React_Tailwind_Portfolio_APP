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

export default function SkillSection() {
  return (
    <>
      <h1 className="mt-40 font-bold text-6xl mb-2 text-center underline underline-offset-8 decoration-red-900 ">
        Skills
      </h1>
      <div className="container grid grid-cols-6 gap-10    items-center px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
        {/* 1st card  */}
        {/* bg-slate-50 */}
        <div
          className="max-w-sm   rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75  p-5  duration-300 ease-in-out hover:scale-110 md:w-100 "
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src={html5}
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
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75  p-5 duration-300 ease-in-out hover:scale-110 md:w-100"
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src={css3}
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
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75  p-5 duration-300 ease-in-out hover:scale-110 md:w-100"
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src={javascript}
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
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75  p-5 duration-300 ease-in-out hover:scale-110 md:w-100"
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src={react}
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
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75  p-5 duration-300 ease-in-out hover:scale-110 md:w-100"
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src={expressJS}
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
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75  p-5 duration-300 ease-in-out hover:scale-110 md:w-100 "
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src={tailwindcss}
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

        {/* 7th card  */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75  p-5 duration-300 ease-in-out hover:scale-110 md:w-100 "
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src={bootstrap}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">Bootstrap</div>
            <p className="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* 8th card  */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75  p-5 duration-300 ease-in-out hover:scale-110 md:w-100 "
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src={materialUI}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">
              Material UI
            </div>
            <p className="text-gray-700 text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* 8th card  */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75 p-5 duration-300 ease-in-out hover:scale-110 md:w-100 "
          style={{ height: "100%" }}
        >
          <img
            className="w-full h-24 pt-5"
            src={mongodb}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">Mongodb</div>
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

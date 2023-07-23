import React from "react";

export default function SkillsCard({ logo, heading }) {
  return (
    <>
      <div
        className="max-w-sm   rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75  p-5  duration-300 ease-in-out hover:scale-110 md:w-100 "
        style={{ height: "100%" }}
      >
        <img
          className="w-full h-24 pt-5"
          src={logo}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 mt-5">
          <div className="font-bold text-2xl mb-2 text-center">{heading}</div>
          <p className="text-gray-700 text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function SkillsCard({ logo, heading }) {
  return (
    <>
      <div
        className="max-w-sm   rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-75  p-5  duration-300 ease-in-out hover:scale-110 "
        style={{ height: "100%" }}
      >
        <img className="w-full h-24 pt-5" src={logo} alt="" />
        <div className="lg:px-6 lg:py-4 mt-5">
          <div className="font-bold text-2xl mb-2 text-center">{heading}</div>
          <p className="text-gray-700 text-base text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </>
  );
}

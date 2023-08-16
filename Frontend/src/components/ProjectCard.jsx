import React from "react";

export default function ProjectCard({ heading, img }) {
  return (
    <div
      className="max-w-sm   rounded overflow-hidden shadow-lg bg-slate-100 bg-opacity-75  duration-300 ease-in-out  md:w-100 cursor-pointer "
      style={{ height: "100%" }}
    >
      <div className="w-full  overflow-hidden">
        <img
          className="w-full  transform transition duration-1000 hover:scale-125  "
          src={img}
          alt=""
        />
      </div>
      <h1 className="font-bold text-2xl p-5 text-center">{heading}</h1>
    </div>
  );
}

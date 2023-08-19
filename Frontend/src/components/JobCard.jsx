import React from "react";

export default function JobCard({ job, position, detail }) {
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-75 duration-300 ease-in-out hover:scale-110">
        <div className="px-6 py-4 text-center md:text-left">
          <h1 className="font-bold text-2xl mb-4">{job}</h1>
          <p className="mb-6 font-bold text-sm text-gray-700">{position}</p>
          <p className="text-gray-700 text-base">{detail}</p>
        </div>
      </div>
    </>
  );
}

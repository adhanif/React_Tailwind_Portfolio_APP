import React from "react";

export default function CtaSection() {
  return (
    <>
      <section className="bg-red-900">
        {/* flex-container  */}
        <div className="container flex flex-col items-center justify-between px-8  py-24 mx-auto mt-40  space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h1 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Team Work makes dream work
          </h1>
          <button className="p-3 w-32 pt-2   text-red-900 bg-white rounded-full  hover:bg-red-100 ">
            {" "}
            Read more
          </button>
        </div>
      </section>
    </>
  );
}

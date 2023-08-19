import React from "react";

export default function CtaSection() {
  return (
    <>
      <section className="bg-red-900 ">
        {/* flex-container  */}
        <div className="container flex flex-col items-center justify-between md:px-8  py-12 mx-auto mt-40  space-y-12 md:py-16 md:flex-row md:space-y-0">
          <h1 className="text-3xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Team Work makes dream work
          </h1>
          <button className="p-3 w-32 pt-2   text-red-900 bg-white rounded-full font-medium hover:bg-red-100 hover:scale-110">
            {" "}
            Read more
          </button>
        </div>
      </section>
    </>
  );
}

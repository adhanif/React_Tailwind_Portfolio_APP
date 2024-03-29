import React from 'react';

export default function SkillsCard({ logo, heading }) {
  return (
    <>
      <div className='max-w-sm  rounded-full overflow-hidden shadow-lg bg-white bg-opacity-75  p-5  duration-300 ease-in-out hover:scale-110 '>
        <img className='w-20 h-20' src={logo} alt='' />
      </div>
      <div className='font-bold text-md mt-3 text-center'>{heading}</div>
    </>
  );
}

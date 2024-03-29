import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

export default function ProjectCard({
  heading,
  img,
  projetDetail,
  demo,
  git,
  extraClass,
}) {
  return (
    <div
      className='max-w-sm   rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-75  duration-300 ease-in-out  md:w-100 
       '
    >
      <div className='w-full relative group overflow-hidden '>
        <img className='w-full' src={img} alt='' />
        <div className='flex flex-col space-y-5 opacity-0 group-hover:opacity-100 backdrop-filter backdrop-blur duration-300 absolute inset-x-0 bottom-0 justify-center text-xl  font-semibold h-full  p-8  hover:backdrop-grayscale-[4]'>
          {/* hover:backdrop-blur-[100px] */}
          <p className={`text-sm text-justify ${extraClass}`}>
            {' '}
            {projetDetail}{' '}
          </p>
          {/* text-slate-900 */}
          <div className='flex justify-center space-x-10'>
            <a href={git} target='_blank' className='flex hover:scale-110'>
              <FaGithub
                className={`w-[3rem] h-[35px] hover:scale-110 ${extraClass}`}
              />
              <p className={`text-md font-extrabold ${extraClass}`}>Code</p>
            </a>
            <a href={demo} target='_blank' className='flex hover:scale-110'>
              <FaLink
                className={`w-[3rem] h-[30px] hover:scale-110 ${extraClass}`}
              />
              <p className={`text-md font-extrabold  ${extraClass}`}>Demo</p>
            </a>
          </div>
        </div>
      </div>
      <h1 className='font-bold    md:text-lg lg:text-xl p-5 text-center'>
        {heading}
      </h1>
    </div>
  );
}

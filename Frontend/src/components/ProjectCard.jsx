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
    <div className='max-w-screen-2xl  rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-75  duration-300 ease-in-out'>
      <div className=' relative group'>
        <img className='w-screen h-[15rem]' src={img} alt='' />
        <div className='flex h-full flex-col space-y-5 opacity-0 group-hover:opacity-100 backdrop-filter backdrop-blur duration-300 absolute inset-x-0 bottom-0 justify-center text-xl  font-semibold  p-8  hover:backdrop-grayscale-[4]'>
          <p className={`text-sm text-justify ${extraClass}`}>
            {' '}
            {projetDetail}{' '}
          </p>

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

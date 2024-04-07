import React from 'react';
import ProjectCard from './ProjectCard';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Projects } from '../../src/data/data';

export default function Portfolio() {
  return (
    <div id='projects'>
      <h1 className=' mt-10 md:mt-20 font-bold text-3xl md:text-6xl text-center underline underline-offset-8 decoration-red-900 '>
        Projects
      </h1>
      <div className='sm:container mx-auto grid grid-cols-3 gap-10 justify-items-center  px-8  xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mt-20'>
        {Projects.map((project, i) => {
          return (
            <div key={i}>
              {/* <AnimationOnScroll animateIn='animate__zoomIn ' duration={2}> */}
              <ProjectCard
                heading={project.title}
                img={project.img}
                projetDetail={project.detail}
                demo={project.demo}
                git={project.git}
                extraClass={project.className}
              />
              {/* </AnimationOnScroll> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

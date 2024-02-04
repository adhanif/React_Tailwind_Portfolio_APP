import React from 'react';
import ProjectCard from './ProjectCard';
import image from '../img/diabetes.avif';
import map from '../img/maps.jpg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Projects } from '../../src/data/data';

export default function Portfolio() {
  return (
    <>
      <h1 className=' mt-10 md:mt-20 font-bold text-3xl md:text-6xl text-center underline underline-offset-8 decoration-red-900 '>
        Projects
      </h1>
      <div className='container mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-5 justify-center items-center mt-20'>
        {Projects.map((project) => {
          return (
            <div key={project.id}>
              <AnimationOnScroll animateIn='animate__zoomIn ' duration={2}>
                <ProjectCard
                  heading={project.title}
                  img={project.img}
                  projetDetail={project.detail}
                  demo={project.demo}
                  git={project.git}
                  extraClass={project.className}
                />
              </AnimationOnScroll>
            </div>
          );
        })}

        {/* <AnimationOnScroll animateIn="animate__zoomIn " duration={2}>
          <ProjectCard
            heading={"TypeOne Diabetes App"}
            img={image}
            projetDetail={
              "This is a full-stack App that uses ReactJS, Tailwind CSS, ExpressJS, MongoDB, React-Leaflet, React-Hook-Form and geoCoder. The application features user authentication and enables users to create, edit, and delete their own events, as well as view events created by others. Events filteration is based on Distance, City, Categories,  Keyword and Date."
            }
          />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__zoomIn " duration={2}>
          <ProjectCard heading={"IP Address Geolocation"} img={map} />
        </AnimationOnScroll> */}
      </div>
    </>
  );
}

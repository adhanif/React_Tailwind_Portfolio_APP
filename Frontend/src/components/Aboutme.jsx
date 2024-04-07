import React from 'react';
import Typewriter from 'typewriter-effect';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Aboutme() {
  return (
    <>
      <div id="about"  className='container flex flex-col  justify-between md:px-8   mx-auto mt-4  space-y-12 md:py-10  md:space-y-0'>
        <div className='mb-12'>
          <h1 className='text-center lg:text-left text-3xl md:text-6xl font-semibold mb-7 mt-5'>
            About <span className='text-orange-500'>me</span>
          </h1>
          <div className='p-4 bg-slate-300 rounded bg-opacity-50 text-base mx-auto lg:mx-0 w-full text-center md:text-2xl lg:text-left md:max-w-xl md:mb-10'>
            <Typewriter
              options={{
                strings: ['Let me tell you few things about me...'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        <div className='flex flex-col  lg:flex-row md:space-x-12 xs:space-y-10 lg:space-y-0 items-center lg:items-start '>
          <div className=' md:w-full '>
            <AnimationOnScroll animateIn='animate__zoomIn' delay={200}>
              <p className='text-base md:text-xl  text-justify px-0 md:px-8 lg:px-0'>
                I am a highly motivated and enthusiastic Full-Stack Web
                Developer with a background in engineering, bringing a unique
                perspective to the world of web development. Throughout my
                education and working experience, I've been somehow connected
                with technology, and always been passionate about building
                things. In my previous professional role, while working on a
                task, I discovered my true passion and decided to change my
                career to a new path.
              </p>
            </AnimationOnScroll>

            <br />
            <br />
            <AnimationOnScroll animateIn='animate__zoomIn' delay={300}>
              <p className='text-base md:text-xl  text-justify px-0 md:px-8 lg:px-0'>
                Now, coding is my playground, and I'm excited to keep learning.
                I'm not just learning to code; I'm passionate about it and here
                to shape the digital world with creativity and innovation,
                creating a better world. With my strong analytical abilities,
                attention to detail, and a natural thirst for continuous
                learning, I am ready to contribute to your team's success. I am
                constantly looking for new opportunities in the field of web
                development.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
     
    </>
  );
}

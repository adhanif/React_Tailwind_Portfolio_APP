import React from 'react';
import SkillsCard from './SkillsCard';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { skillData } from '../data/skillData';

export default function SkillSection() {
  return (
    <div id='skills'>
      <h1 className='mt-10 md:mt-20 font-bold text-3xl md:text-6xl mb-2 text-center underline underline-offset-8 decoration-red-900 '>
        Skills
      </h1>
      <div className='container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 '>
        {skillData.map((skill, i) => (
          <AnimationOnScroll animateIn='animate__fadeInUp' duration={1} key={i}>
            <SkillsCard logo={skill.logo} heading={skill.heading} />
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
}

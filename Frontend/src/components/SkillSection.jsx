import React from 'react';
import html5 from '../img/html5.svg';
import css3 from '../img/css3.svg';
import javascript from '../img/javascript-1.svg';
import react from '../img/react.svg';
import expressJS from '../img/expressJS.svg';
import tailwindcss from '../img/tailwindcss.svg';
import bootstrap from '../img/bootstrap.svg';
import materialUI from '../img/material-ui.svg';
import mongodb from '../img/mongodb.svg';
import SkillsCard from './SkillsCard';
import nodeJs from '../img/nodejs.svg';
import sql from '../img/sql.svg';
import python from '../img/python.svg';
import git from '../img/git.svg';
import figma from '../img/figma.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function SkillSection() {
  return (
    <div id='skills'>
      <h1 className='mt-10 md:mt-20 font-bold text-3xl md:text-6xl mb-2 text-center underline underline-offset-8 decoration-red-900 '>
        Skills
      </h1>
      <div className='container grid grid-cols-6 gap-10   justify-items-center md:px-8 mx-auto mt-20 mb-20 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 '>
        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={html5} heading={'HTML5'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={css3} heading={'CSS3'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={javascript} heading={'JAVASCRIPT'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={python} heading={'PYTHON'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={react} heading={'REACT'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={expressJS} heading={'EXPRESS.JS'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={nodeJs} heading={'NODE.JS'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={tailwindcss} heading={'TAILWINDCSS'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={bootstrap} heading={'BOOTSTRAP'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={materialUI} heading={'MATERIAL UI'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={mongodb} heading={'MONGODB'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={sql} heading={'SQL'} />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInUp' duration={1}>
          <SkillsCard logo={figma} heading={'FIGMA'} />
        </AnimationOnScroll>
      </div>
    </div>
  );
}

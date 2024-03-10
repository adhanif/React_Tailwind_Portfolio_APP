import diabetes from '../img/diabetes.avif';
import map from '../img/maps.jpg';
import hero from '../img/hero.jpg';

import facebook from '../img/facebook.svg';
import xing from '../img/logo-xing.svg';
import linkedin from '../img/linkedin.svg';
import instagram from '../img/instagram.svg';
import github from '../img/github.svg';

export const Projects = [
  {
    id: 1,
    img: diabetes,
    detail:
      'This is a full-stack App that uses ReactJS, Tailwind CSS, ExpressJS, MongoDB, React-Leaflet, React-Hook-Form and geoCoder. The application features user authentication and enables users to create, edit, and delete their own events, as well as view events created by others.',
    title: 'TypeOne Diabetes App',
    demo: 'https://mern-stack-diabetes-app.onrender.com/',
    git: 'https://github.com/adhanif/MERN_Stack_Diabetes_APP',
    className: 'text-gray-900',
  },
  {
    id: 2,
    img: map,
    detail:
      'IP Address Geolocation Viewer is a web application built using React, Leaflet, and other technologies, allowing users to discover information about their IP address and its geographical location.',
    title: 'IP Address  Viewer',
    demo: 'https://whatsyourip.netlify.app/',
    git: 'https://github.com/adhanif/mapReact',
    className: 'text-white',
  },
  {
    id: 3,
    img: hero,
    detail:
      'Personalized Weather Station (PWS) is a full-stack web application that visually represents weather for your favorite locations. Whether you are a weather enthusiast or curious about conditions elsewhere, PWS offers an interactive tracking experience.',
    title: 'Personalized Weather Station',
    demo: 'https://personal-weather-station.netlify.app/',
    git: 'https://github.com/husham007/personalized-weather-station',
    className: 'text-white',
  },
];

export const iconsData = [
  {
    src: facebook,
    href: '#',
  },
  {
    src: xing,
    href: 'https://www.xing.com/profile/Adnan_hanif5/cv',
  },
  {
    src: github,
    href: 'https://github.com/adhanif',
  },
  {
    src: linkedin,
    href: 'https://www.linkedin.com/in/adnan-hanif/',
  },
  {
    src: instagram,
    href: 'https://www.instagram.com/danilonewarrior/',
  },
];

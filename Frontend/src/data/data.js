import diabetes from "../img/diabetes.avif";
import map from "../img/maps.jpg";

export const Projects = [
  {
    id: 1,
    img: diabetes,
    detail:
      "This is a full-stack App that uses ReactJS, Tailwind CSS, ExpressJS, MongoDB, React-Leaflet, React-Hook-Form and geoCoder. The application features user authentication and enables users to create, edit, and delete their own events, as well as view events created by others. Events filteration is based on Distance, City, Categories,  Keyword and Date.",
    title: "TypeOne Diabetes App",
    demo: "https://mern-stack-diabetes-app.onrender.com/",
    git: "https://github.com/adhanif/MERN_Stack_Diabetes_APP",
  },
  {
    id: 2,
    img: map,
    detail:
      "IP Address Geolocation Viewer is a web application built using React, Leaflet, and other technologies, allowing users to discover information about their IP address and its geographical location.",
    title: "IP Address  Viewer",
    demo: "https://whatsyourip.netlify.app/",
    git: "https://github.com/adhanif/mapReact",
  },
];

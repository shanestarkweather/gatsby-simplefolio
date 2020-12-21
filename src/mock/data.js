import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shane Starkweather | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi. I'm`,
  name: 'Shane Starkweather.',
  subtitle: `I'm a full stack developer.`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I am a full stack software engineer. I have a background in which the only way to survive was to figure things out with the resources at hand, and not always necessarily with any budget. That has created in me a strong sense of how to succeed despite not always having tools, but the ability and desire to find and use the needed tools. That background, in management in my family’s business, made me aware of all the working pieces of teams and business affording me a more complete picture in many situations and challenges.`,
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1ET0riA3-MHdD8a5fB-CdeQuHD_Kp3Ez3/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'AllTheFeels.png',
    title: 'All The Feels - Full Stack Group Project',
    info:
      'This was a group project I completed with three other people as part of the software engineering immersive I completed at General Assembly',
    info2: 'React, Node, Express, MongoDB, ',
    url: 'https://all-the-feels-fe.herokuapp.com/',
    repo: 'https://github.com/Kid-Then-Kid-Now/front-end', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'WhatsShakin.png',
    title: `What's Shakin'?`,
    info: 'This React app connects to a U.S. Geological Survey API to gather data on earthquakes.',
    info2: 'React, CSS',
    url: 'https://whats-shakin.herokuapp.com/',
    repo: 'https://github.com/shanestarkweather/earthquake', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DroneLog.png',
    title: 'Drone Log',
    info:
      'A full stack app I developed myself with user authorization to create and store flight logs for drone pilots.',
    info2: 'React, Django, Python, PostgreSQL',
    url: 'https://drone-log.herokuapp.com/',
    repo: 'https://github.com/shanestarkweather/droneappfe', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'shane@shanestarkweather.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shanestarkweather/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shanestarkweather',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

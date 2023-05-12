import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  caseware,
  rbc,
  centerline,
  tenaciousTanks,
  superSmashBros,
  infected,
  superMarioBros,
  personalWebsite,
  camFinder,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Engineer",
    icon: backend,
  },
  {
    title: "Entrepreneur",
    icon: creator,
  },
  {
    title: "Leader",
    icon: mobile,
  },
];

const technologiess = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const technologies = {
  typescript: {
    name: "TypeScript",
    textCol: "#FFFFFF",
    backCol: "#007ACC",
  },
  angular: {
    name: "Angular",
    textCol: "#FFFFFF",
    backCol: "#DD1B16",
  },
  githubActions: {
    name: "GitHub Actions",
    textCol: "#FFFFFF",
    backCol: "#171515",
  },
  nestjs: {
    name: "NestJS",
    textCol: "#FFFFFF",
    backCol: "#E0234E",
  },
  html: {
    name: "HTML",
    textCol: "#FFFFFF",
    backCol: "#f06529",
  },
  css: {
    name: "CSS",
    textCol: "#FFFFFF",
    backCol: "#264DE4",
  },
  javascript: {
    name: "JavaScript",
    textCol: "#FFFFFF",
    backCol: "#F0DB4F",
  },
  bootstrap: {
    name: "Bootstrap",
    textCol: "#FFFFFF",
    backCol: "#563D7C",
  },
  react: {
    name: "React",
    textCol: "#FFFFFF",
    backCol: "#61DBFB",
  },
  visualBasic: {
    name: "Visual Basic",
    textCol: "#FFFFFF",
    backCol: "#136099",
  },
  msSql: {
    name: "MS SQL",
    textCol: "#FFFFFF",
    backCol: "#A91D22",
  },
  aws: {
    name: "AWS",
    textCol: "#FFFFFF",
    backCol: "#FF9900",
  },
};

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Caseware",
    company_link: "https://www.caseware.com/",
    icon: caseware,
    iconBg: "#E6DEDD", // #383E56
    date: "September 2022 - August 2023",
    points: [
      "Developed a repo-wide full stack feature flag application using Angular, NestJS and AWS, which gave developers a fast and simple way to deploy code, test it and release hotfixes or updates as required.",
      "Modified workflow files to optimize GitHub CI/CD pipelines, resulting in increased developer productivity and lower operating costs.",
      "Developed scripts for Windows and Mac to streamline local developer environment setup, reducing onboarding time from hours to minutes.",
      "Debugged, updated and tested Caseware's proprietary UI component library – Nova.",
    ],
    technologies: [
      technologies.typescript,
      technologies.angular,
      technologies.nestjs,
      technologies.aws,
      technologies.githubActions,
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Royal Bank of Canada",
    company_link: "https://www.rbc.com/",
    icon: rbc,
    iconBg: "#E6DEDD", // #383E56
    date: "May 2022 - August 2022",
    points: [
      "Developed and implemented front-end web components using HTML, CSS, and Bootstrap.",
      "Redesigned full stack features using JavaScript and jQuery to improve navigation and accessibility of internal & external websites generating over 1000 & 3000 daily page views.",
      "Modified back-end process which reduced developers time in half for article posting and other duties.",
    ],
    technologies: [
      technologies.javascript,
      technologies.html,
      technologies.css,
      technologies.bootstrap,
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "CenterLine",
    company_link: "https://www.cntrline.com/",
    icon: centerline,
    iconBg: "#E6DEDD", // #383E56
    date: "May 2021 - August 2021",
    points: [
      "Created ASP.NET web applications using React, Typescript, HTML/CSS and ASP.NET to enhance internal company practices, including user experience, user interface, and access control using Visual Studio.",
      "Reduced the wait time of user requests from hours to seconds by editing back-end processes to increase efficiency while stopping unnecessary processing.",
      "Developed REST APIs to interface with websites and retrieve data from MS SQL Server in an efficient manner.",
    ],
    technologies: [
      technologies.typescript,
      technologies.react,
      technologies.visualBasic,
      technologies.msSql,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tenacious Tanks",
    description:
      "A two-player turn-based strategy game inspired by the classic arcade game 'Scorched Earth'. With every match featuring a randomly generated terrain, no two battles are ever the same.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "swing",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
    ],
    image: tenaciousTanks,
    source_code_link: "https://github.com/CameronBeneteau/Tenacious_Tanks",
  },
  {
    name: "Super Smash Bros",
    description:
      "A two-player remake of the classic fighting game 'Super Smash Bros'. Players can choose their favorite character and battle on famous maps. Made during Massey Hacks IV.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "swing",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
      {
        name: "hackathon",
        color: "green-text-gradient",
      },
    ],
    image: superSmashBros,
    source_code_link: "https://github.com/CameronBeneteau/Super_Smash_Bros",
  },
  {
    name: "Infected",
    description:
      "A turn-based strategy game inspired by the arcade game 'Chain Reaction'. Success demands careful planning and calculated moves to outsmart your opponents. Made during Massey Hacks III.",
    tags: [
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "pygame",
        color: "lime-text-gradient",
      },
      {
        name: "hackathon",
        color: "green-text-gradient",
      },
    ],
    image: infected,
    source_code_link: "https://github.com/CameronBeneteau/Infected",
  },
  {
    name: "Super Mario Bros",
    description:
      "A single-player platforming game inspired by the famous arcade game 'Super Mario Bros'. Features multiple levels filled with challenging obstacles and exciting collectibles.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "swing",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
    ],
    image: superMarioBros,
    source_code_link: "https://github.com/CameronBeneteau/Super_Mario_Bros",
  },
  {
    name: "Personal Website",
    description:
      "A personal portfolio showcasing my skills, work experience, projects, and more. This responsive website includes fun animations and various 3D models that bring the page to life.",
    tags: [
      {
        name: "react",
        color: "light-blue-text-gradient",
      },
      {
        name: "threejs",
        color: "grey-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: personalWebsite,
    source_code_link:
      "https://github.com/CameronBeneteau/cameronbeneteau.github.io",
  },
  {
    name: "CamFinder",
    description:
      "An automation tool used to submit business proposals to potential clients on LinkedIn. With over 2000 proposals sent to date, the tool has lead to new clients and and saved over 24 hours of manual work.",
    // description: "An automation tool used to submit business proposals to prospective clients on LinkedIn. Since creation, over 2000 proposals have been sent, resulting in clients landed and saving over 24 hours of manual work.",
    tags: [
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "linkedin",
        color: "blue-text-gradient",
      },
    ],
    image: camFinder,
    source_code_link: "https://github.com/CameronBeneteau/CamFinder",
  },
];

const links = {
  github: "https://github.com/CameronBeneteau",
  linkedin: "https://www.linkedin.com/in/cameronbeneteau/",
  resume:
    "https://drive.google.com/file/d/1Wr_j08V27YnbeqgQ2-0m9rDk0eR4o7fI/view?usp=sharing",
  personalEmail: "cameron.bellewood@gmail.com",
  schoolEmail: "beneteac@mcmaster.ca",
};

export {
  services,
  technologiess as technologies,
  experiences,
  testimonials,
  projects,
  links,
};

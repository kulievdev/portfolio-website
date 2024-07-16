import projectifyLogo from "../../assets/Images/ProjectifyApp/projectify-logo.png";
import projectify1 from "../../assets/Images/ProjectifyApp/projectify1.webp";
import projectify2 from "../../assets/Images/ProjectifyApp/projectify2.webp";
import projectify3 from "../../assets/Images/ProjectifyApp/projectify3.webp";
import projectify4 from "../../assets/Images/ProjectifyApp/projectify4.webp";
import projectify5 from "../../assets/Images/ProjectifyApp/projectify5.webp";
import projectify6 from "../../assets/Images/ProjectifyApp/projectify6.webp";
import projectify7 from "../../assets/Images/ProjectifyApp/projectify7.webp";

import luceLogo from "../../assets/Images/LuceNotte/luce-logo.png";
import luce1 from "../../assets/Images/LuceNotte/luce1.webp";
import luce2 from "../../assets/Images/LuceNotte/luce2.webp";
import luce3 from "../../assets/Images/LuceNotte/luce3.webp";
import luce4 from "../../assets/Images/LuceNotte/luce4.webp";

import infinitaLogo from "../../assets/Images/Infinita/infinita-logo.png";
import infinita1 from "../../assets/Images/Infinita/infinita1.webp";
import infinita2 from "../../assets/Images/Infinita/infinita2.webp";
import infinita3 from "../../assets/Images/Infinita/infinita3.webp";
import infinita4 from "../../assets/Images/Infinita/infinita4.webp";

import portfolioLogo from "../../assets/Images/Portfolio/portfolio-logo.png";
import portfolio1 from "../../assets/Images/Portfolio/portfolio1.webp";
import portfolio2 from "../../assets/Images/Portfolio/portfolio2.webp";
import portfolio3 from "../../assets/Images/Portfolio/portfolio3.webp";
import portfolio4 from "../../assets/Images/Portfolio/portfolio4.webp";

import moveLogo from "../../assets/Images/MoveCareers/move-logo.png";
import move1 from "../../assets/Images/MoveCareers/move1.webp";
import move2 from "../../assets/Images/MoveCareers/move2.webp";
import move3 from "../../assets/Images/MoveCareers/move3.webp";
import move4 from "../../assets/Images/MoveCareers/move4.webp";

import socialMediaLogo from "../../assets/Images/SocialMediaApp/social-media-logo.png";
import social1 from "../../assets/Images/SocialMediaApp/social-media1.webp";
import social2 from "../../assets/Images/SocialMediaApp/social-media2.webp";
import social3 from "../../assets/Images/SocialMediaApp/social-media3.webp";
import social4 from "../../assets/Images/SocialMediaApp/social-media4.webp";
import social5 from "../../assets/Images/SocialMediaApp/social-media5.webp";

import hyggeLogo from "../../assets/Images/Hygge/hygge-logo.png";
import hygge1 from "../../assets/Images/Hygge/hygge1.webp";
import hygge2 from "../../assets/Images/Hygge/hygge2.webp";
import hygge3 from "../../assets/Images/Hygge/hygge3.webp";
import hygge4 from "../../assets/Images/Hygge/hygge4.webp";
import hygge5 from "../../assets/Images/Hygge/hygge5.webp";
import hygge6 from "../../assets/Images/Hygge/hygge6.webp";
import hygge7 from "../../assets/Images/Hygge/hygge7.webp";
import hygge8 from "../../assets/Images/Hygge/hygge8.webp";
import hygge9 from "../../assets/Images/Hygge/hygge9.webp";
import hygge10 from "../../assets/Images/Hygge/hygge10.webp";
import hygge11 from "../../assets/Images/Hygge/hygge11.webp";
import hygge12 from "../../assets/Images/Hygge/hygge12.webp";
import hygge13 from "../../assets/Images/Hygge/hygge13.webp";
import hygge14 from "../../assets/Images/Hygge/hygge14.webp";

import htmlLogo from "../../assets/TechStackIcons/html5.svg";
import cssLogo from "../../assets/TechStackIcons/css3.svg";

import reactLogo from "../../assets/TechStackIcons/reactjs.svg";
import typescriptLogo from "../../assets/TechStackIcons/typescript.svg";
import nodeLogo from "../../assets/TechStackIcons/nodejs.svg";
import expressLogo from "../../assets/TechStackIcons/expressjs.svg";
import mongoDB from "../../assets/TechStackIcons/mongodb.svg";
import javascriptLogo from "../../assets/TechStackIcons/javascript.svg";
import styledComp from "../../assets/TechStackIcons/styled-components.svg";
import tailwindLogo from "../../assets/TechStackIcons/tailwindcss.svg";
import nextjsLogo from "../../assets/TechStackIcons/nextjs.svg";
import prismaLogo from "../../assets/TechStackIcons/prisma.svg";

const myProjects = [
  {
    projectName: "Projectify App",
    category: "Full-Stack",
    github: "https://github.com/kulievdev/projectify-app-ui",
    website: "https://projectify.tech/",
    images: [
      { url: projectify1, alt: "Projectify App Image" },
      { url: projectify2, alt: "Projectify App  Image" },
      { url: projectify3, alt: "Projectify App  Image" },
      { url: projectify4, alt: "Projectify App  Image" },
      { url: projectify5, alt: "Projectify App  Image" },
      { url: projectify6, alt: "Projectify App  Image" },
      { url: projectify7, alt: "Projectify App  Image" },
    ],
    logo: projectifyLogo,
    description:
      "A project management app that is built for developers and designers. It was inspired by apps like Jira. Projectify offers a comprehensive set of features designed to enhance productivity, foster collaboration, and streamline project management processes.",
    stacks: [
      reactLogo,
      typescriptLogo,
      styledComp,
      nodeLogo,
      expressLogo,
      mongoDB,
    ],
  },
  {
    projectName: "Luce Notte Restaurant",
    category: "Front-End",
    github: "https://github.com/kulievdev/restaurant-website-react",
    website: "https://lucenotte.com/",
    images: [
      { url: luce1, alt: "Restaurant Website Image" },
      { url: luce2, alt: "Restaurant Website Image" },
      { url: luce3, alt: "Restaurant Website Image" },
      { url: luce4, alt: "Restaurant Website Image" },
    ],
    logo: luceLogo,
    description:
      "The Luce Notte Restaurant website is a gateway to a culinary journey like no other. Embark on a captivating journey where each page unfolds a tale through flavors, where the essence of Italian cuisine comes alive, merging passion with tradition in every pixel.",
    stacks: [reactLogo, javascriptLogo, styledComp],
  },
  {
    projectName: "Infinita Furniture",
    category: "Landing-Page",
    github: "https://github.com/kulievdev/furniture-website-react",
    website: "https://infinitafurniture.com/",
    images: [
      { url: infinita1, alt: "Furniture Website Image" },
      { url: infinita2, alt: "Furniture Website Image" },
      { url: infinita3, alt: "Furniture Website Image" },
      { url: infinita4, alt: "Furniture Website Image" },
    ],
    logo: infinitaLogo,
    description:
      "A furniture website landing page is an online platform that offers users the opportunity to explore and browse a wide range of furniture products for their homes, offices, or other spaces. This digital platform provides a convenient and comprehensive shopping experience, allowing users to discover furniture items and compare prices and styles from the comfort of their own homes.",
    stacks: [reactLogo, javascriptLogo, styledComp],
  },
  {
    projectName: "Portfolio Website",
    category: "Front-End",
    github: "https://github.com/kulievdev/portfolio-website",
    website: "https://www.kuliev.dev/",
    images: [
      { url: portfolio1, alt: "Portfolio Website Image" },
      { url: portfolio2, alt: "Portfolio Website Image" },
      { url: portfolio3, alt: "Portfolio Website Image" },
      { url: portfolio4, alt: "Portfolio Website Image" },
    ],
    logo: portfolioLogo,
    description:
      "A minimalist portfolio website serves as a sleek and efficient showcase of my skills and expertise. Through clean design and intuitive navigation, visitors can explore my work and accomplishments with ease. My portfolio offers a concise yet comprehensive overview of my capabilities, allowing potential employers or collaborators to gain insight into my proficiency and style.",
    stacks: [tailwindLogo, typescriptLogo, reactLogo],
  },
  {
    projectName: "Connectify",
    category: "Back-End",
    github: "https://github.com/kulievdev/social-media-app",
    website: "https://www.kuliev.dev/",
    images: [
      { url: social1, alt: "Social Media App Backend Image" },
      { url: social2, alt: "Social Media App Backend Image" },
      { url: social3, alt: "Social Media App Backend Image" },
      { url: social4, alt: "Social Media App Backend Image" },
      { url: social5, alt: "Social Media App Backend Image" },
    ],
    logo: socialMediaLogo,
    description:
      "A social media app called Connectify where a user can sign-up, login or reset password. In addition, a user can: update their profile, send/accept/reject/cancel/unfriend other user, see the information of all friends or a single friend, change password, create/update/delete/view a post or all posts. This portion of the website, is solely the backend.",
    stacks: [nodeLogo, mongoDB, expressLogo, javascriptLogo, prismaLogo],
  },
  {
    projectName: "Hygge (Coming Soon)",
    category: "Full-Stack",
    github: "https://www.kuliev.dev/",
    website: "https://www.kuliev.dev/",
    images: [
      { url: hygge1, alt: "Hygge Website Image" },
      { url: hygge2, alt: "Hygge Website Image" },
      { url: hygge3, alt: "Hygge Website Image" },
      { url: hygge4, alt: "Hygge Website Image" },
      { url: hygge5, alt: "Hygge Website Image" },
      { url: hygge6, alt: "Hygge Website Image" },
      { url: hygge7, alt: "Hygge Website Image" },
      { url: hygge8, alt: "Hygge Website Image" },
      { url: hygge9, alt: "Hygge Website Image" },
      { url: hygge10, alt: "Hygge Website Image" },
      { url: hygge11, alt: "Hygge Website Image" },
      { url: hygge12, alt: "Hygge Website Image" },
      { url: hygge13, alt: "Hygge Website Image" },
      { url: hygge14, alt: "Hygge Website Image" },
    ],
    logo: hyggeLogo,
    description:
      "An e-commerce website dedicated to skincare offers users a robust platform to explore and purchase a diverse range of products tailored to skincare needs. This digital hub provides a seamless and informative shopping experience, empowering users to discover skincare solutions and compare options from the comfort of their homes. With an array of offerings for various skin types and concerns, the platform serves as a comprehensive resource for individuals seeking effective and reliable skincare solutions.",
    stacks: [
      nextjsLogo,
      typescriptLogo,
      reactLogo,
      styledComp,
      nodeLogo,
      expressLogo,
      mongoDB,
    ],
  },
  {
    projectName: "Move Careers",
    category: "Landing-Page",
    github: "https://github.com/kulievdev/career-website",
    website: "https://move-careers.onrender.com/",
    images: [
      { url: move1, alt: "Move Careers Website Image" },
      { url: move2, alt: "Move Careers Website Image" },
      { url: move3, alt: "Move Careers Website Image" },
      { url: move4, alt: "Move Careers Website Image" },
    ],
    logo: moveLogo,
    description:
      "A job search website landing page showcases job opportunities across various industries. It allows users to explore listings and get an overview of available positions from home. The page highlights features like personalized job recommendations, resume uploads, and real-time notifications. Designed for a seamless job-hunting experience, this project demonstrates my ability to create compelling and informative web interfaces.",
    stacks: [htmlLogo, cssLogo],
  },
];

export default myProjects;

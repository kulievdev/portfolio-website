import html from "../../assets/TechStackIcons/html5.svg";
import css from "../../assets/TechStackIcons/css3.svg";
import figma from "../../assets/TechStackIcons/figma.svg";
import git from "../../assets/TechStackIcons/git.svg";
import github from "../../assets/TechStackIcons/github.svg";
import chakra from "../../assets/TechStackIcons/chakraui.svg";
import javascript from "../../assets/TechStackIcons/javascript.svg";
import typescript from "../../assets/TechStackIcons/typescript.svg";
import mongodb from "../../assets/TechStackIcons/mongodb.svg";
import nodejs from "../../assets/TechStackIcons/nodejs.svg";
import postman from "../../assets/TechStackIcons/postman.svg";
import primsa from "../../assets/TechStackIcons/prisma.svg";
import expressjs from "../../assets//TechStackIcons/expressjs.svg";
import react from "../../assets/TechStackIcons/reactjs.svg";
import tailwind from "../../assets/TechStackIcons/tailwindcss.svg";
import vite from "../../assets/TechStackIcons/vitejs.svg";
import vscode from "../../assets/TechStackIcons/vscode.svg";

const myFrontEndStack = [
  {
    name: "HTML",
    imgSrc: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    imgSrc: css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind",
    imgSrc: tailwind,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Figma",
    imgSrc: figma,
    link: "https://www.figma.com/",
  },
  {
    name: "React",
    imgSrc: react,
    link: "https://react.dev/",
  },
  {
    name: "Vite",
    imgSrc: vite,
    link: "https://vitejs.dev/",
  },
  {
    name: "ChakraUI",
    imgSrc: chakra,
    link: "https://chakra-ui.com/",
  },
];

const myBackEndStack = [
  {
    name: "MongoDB",
    imgSrc: mongodb,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Prisma",
    imgSrc: primsa,
    link: "https://www.prisma.io/",
  },
  {
    name: "Node",
    imgSrc: nodejs,
    link: "https://nodejs.org/en",
  },
  {
    name: "Postman",
    imgSrc: postman,
    link: "https://www.postman.com/",
  },
  {
    name: "Express",
    imgSrc: expressjs,
    link: "https://expressjs.com/",
  },
];

const myOverLapStack = [
  {
    name: "Javascript",
    imgSrc: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Git",
    imgSrc: git,
    link: "https://git-scm.com/",
  },
  {
    name: "Github",
    imgSrc: github,
    link: "https://docs.github.com/en",
  },
  {
    name: "Typescript",
    imgSrc: typescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Vscode",
    imgSrc: vscode,
    link: "https://code.visualstudio.com/",
  },
];

export { myFrontEndStack, myBackEndStack, myOverLapStack };

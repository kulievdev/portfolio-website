import React from "react";
import Cta from "../../Components/Cta";
import { motion } from "framer-motion";

type ProjectProps = {
  projectName: string;
  imageSrc: string;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

const Project: React.FC<ProjectProps> = ({ projectName, imageSrc, index }) => {
  const Component = window.innerWidth > 435 ? motion.div : "div";

  return (
    <Component
      className="flex-1 rounded-[2rem] border border-secondary-300 bg-white p-6 text-center"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className="flex flex-row flex-wrap justify-around gap-10">
        <img
          src={imageSrc}
          alt={projectName}
          className="h-[90%] w-[90%] flex-1 rounded-[2rem]"
        />
      </div>
      <h2 className="m-4 mb-8 text-2xl font-semibold text-black desktop:text-3xl bigDesktop:text-4xl">
        Project One
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Cta type="project cta" projectCtaText="Github" />
        <Cta type="project cta" projectCtaText="Demo" />
        <Cta type="project cta" projectCtaText="Info" />
      </div>
    </Component>
  );
};

export default Project;

import React from "react";
import Cta from "../../Components/Cta";
import { motion } from "framer-motion";
import fadeInAnimationVariants from "../../utils/fadeAnimationVariants";

type ProjectProps = {
  name: string;
  imageSrc: string;
  index: number;
};

const Project: React.FC<ProjectProps> = ({ name, imageSrc, index }) => {
  const Component = window.innerWidth > 435 ? motion.div : "div";

  return (
    <Component
      className="flex-1 rounded-[2rem] border border-secondary-300 p-6 text-center"
      variants={fadeInAnimationVariants(0.2, 100)}
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
          alt={name}
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

import React from "react";
import Cta from "../../Components/Cta";
import { motion } from "framer-motion";
import fadeInAnimationVariants from "../../utils/fadeAnimationVariants";
import ImageSlider from "./ImageSlider";

type Image = {
  url: string;
  alt: string;
};

type ProjectProps = {
  name: string;
  images: Image[];
  index: number;
};

const Project: React.FC<ProjectProps> = ({ name, images, index }) => {
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
      <div className="mb-10 flex flex-row flex-wrap justify-around gap-10">
        <ImageSlider images={images} />
      </div>
      <h2 className="m-4 mb-8 text-2xl font-semibold text-black desktop:text-3xl bigDesktop:text-4xl">
        {name}
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

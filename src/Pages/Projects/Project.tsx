import React, { useState } from "react";
import Cta from "../../Components/Cta";
import { motion } from "framer-motion";
import fadeInAnimationVariants from "../../utils/fadeAnimationVariants";
import ImageSlider from "./ImageSlider";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

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

  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  return (
    <Component
      className="flex-1 rounded-[2rem] border border-gray-300 p-6 text-center"
      variants={fadeInAnimationVariants(0.2, 100)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className="mb-4 flex flex-row flex-wrap justify-around gap-10">
        <ImageSlider images={images} imageIndex={imageIndex} />
      </div>
      <div className="flex items-center justify-around">
        <button
          className="focus-visible:animate-squish hover:animate-squish block cursor-pointer rounded-full p-4 transition duration-300 ease-in-out hover:bg-[#00000033] focus-visible:bg-[#00000033] focus-visible:outline"
          onClick={showPrevImage}
          aria-label="View Previous Image"
        >
          <ArrowBigLeft
            aria-hidden
            className="h-8 w-8 fill-gray-700 stroke-white"
          />
        </button>
        <div className="flex gap-1">
          {images.map((_, index) => (
            <button
              className="block h-4 w-4 cursor-pointer transition duration-300 ease-in-out hover:scale-150 focus-visible:scale-150 focus-visible:outline"
              key={index}
              onClick={() => setImageIndex(index)}
              aria-label={`View Image ${index + 1}`}
            >
              {index === imageIndex ? (
                <CircleDot
                  aria-hidden
                  className="h-full w-full fill-gray-700 stroke-white"
                />
              ) : (
                <Circle
                  aria-hidden
                  className="h-full w-full fill-gray-700 stroke-white "
                />
              )}
            </button>
          ))}
        </div>
        <button
          className="focus-visible:animate-squish hover:animate-squish block cursor-pointer rounded-full p-4 transition duration-300 ease-in-out hover:bg-[#00000033] focus-visible:bg-[#00000033] focus-visible:outline"
          onClick={showNextImage}
          aria-label="View Next Image"
        >
          <ArrowBigRight
            aria-hidden
            className="h-8 w-8 fill-gray-700 stroke-white"
          />
        </button>
      </div>
      <h2 className="m-4 mb-8 text-2xl font-semibold text-gray-700 desktop:text-3xl bigDesktop:text-4xl">
        {name}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Cta type="project cta" projectCtaText="Github" />
        <Cta type="project cta" projectCtaText="Live Demo" />
        <Cta type="project cta" projectCtaText="Info" />
      </div>
    </Component>
  );
};

export default Project;

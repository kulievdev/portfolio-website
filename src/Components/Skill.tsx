import React from "react";
import { motion } from "framer-motion";

type SkillProps = {
  imgSrc: string;
  name: string;
  link: () => void;
};

const Skill: React.FC<SkillProps> = ({ imgSrc, name, link }) => {
  return (
    <motion.div
      onClick={link}
      className="flex flex-1 transform cursor-pointer flex-col items-center hover:scale-125 hover:animate-pulse hover:transition hover:duration-300 hover:ease-in sm:hover:-translate-y-4 sm:hover:scale-100"
    >
      <img
        src={imgSrc}
        className="mb-3 h-6 w-6 rounded-lg xs:h-8 xs:w-8 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 bigDesktop:h-14 bigDesktop:w-14"
      />
      <p className="text-sm font-bold text-gray-800 sm:text-lg sm:font-extrabold desktop:text-xl">
        {name}
      </p>
    </motion.div>
  );
};

export default Skill;

import React from "react";
import arrow from "../assets/Images/arrow.png";

interface ArrowIconProps {
  href: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ href }) => {
  return (
    <a href={href}>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon bottom-5 hidden laptop:absolute laptop:right-[0.7rem] laptop:inline-block desktop:bottom-10 desktop:right-[2rem]"
      />
    </a>
  );
};

export default ArrowIcon;

import React from "react";

type MiniMainHeadingProps = {
  text: string | React.ReactNode;
};

const MiniMainHeading: React.FC<MiniMainHeadingProps> = ({ text }) => {
  return (
    <p className="bigDesktop:text-2xl mb-6 text-center text-sm font-bold sm:text-xl">
      {text}
    </p>
  );
};

export default MiniMainHeading;

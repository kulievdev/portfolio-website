import React from "react";

type MainHeadingProps = {
  text: string | React.ReactNode;
};

const MainHeading: React.FC<MainHeadingProps> = ({ text }) => {
  return (
    <h1 className="xs:text-3xl xs:mb-4 bigDesktop:text-5xl mb-3 text-center text-2xl font-bold sm:mb-10 sm:text-4xl desktop:mb-16">
      {text}
    </h1>
  );
};

export default MainHeading;

import React from "react";

type MainHeadingProps = {
  text: string | React.ReactNode;
};

const MainHeading: React.FC<MainHeadingProps> = ({ text }) => {
  return (
    <h1 className="mb-10 text-center text-2xl font-bold xs:text-3xl  sm:text-4xl desktop:mb-16 bigDesktop:text-5xl">
      {text}
    </h1>
  );
};

export default MainHeading;

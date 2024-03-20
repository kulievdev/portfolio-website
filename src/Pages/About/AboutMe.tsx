import React from "react";

type AboutMeProps = {
  imgSrc: string;
  title: string;
  text: string;
  backgroundColor: string;
};

const AboutMe: React.FC<AboutMeProps> = ({
  imgSrc,
  text,
  title,
  backgroundColor,
}) => {
  return (
    <div
      className={`flex gap-4 rounded-3xl px-2 py-4 sm:p-6 ${backgroundColor}`}
    >
      <img
        src={imgSrc}
        alt={title}
        className="mb-2 inline-block h-10 laptop:h-12 desktop:h-16"
      />
      <div>
        <h3 className="mb-2 mt-1 text-base font-bold md:text-lg desktop:text-xl">
          {title}
        </h3>
        <p className="text-base md:text-lg desktop:text-xl">{text}</p>
      </div>
    </div>
  );
};

export default AboutMe;

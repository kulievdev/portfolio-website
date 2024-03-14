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
      <img src={imgSrc} className="xs:h-8 mb-2 inline-block h-6 desktop:h-16" />
      <div>
        <h3 className="mb-2 mt-1 text-sm font-bold lg:text-lg desktop:text-xl">
          {title}
        </h3>
        <p className="text-xs lg:text-sm desktop:text-base">{text}</p>
      </div>
    </div>
  );
};

export default AboutMe;

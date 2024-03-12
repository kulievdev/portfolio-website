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
      className={`xs:p-6 flex gap-4 rounded-3xl px-2 py-4 ${backgroundColor}`}
    >
      <img src={imgSrc} className="mb-4 inline-block h-16" />
      <div>
        <h3 className="mb-2 mt-1 text-xl font-bold">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutMe;

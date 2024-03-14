import React from "react";

import Cta from "../../Components/Cta";

type ProjectProps = {
  projectName: string;
  imageSrc: string;
};

const Project: React.FC<ProjectProps> = ({ projectName, imageSrc }) => {
  return (
    <div className="flex-1 rounded-[2rem] border border-secondary-300 bg-white p-6 text-center">
      <div className="flex flex-row flex-wrap justify-around gap-10">
        <img
          src={imageSrc}
          alt={projectName}
          className="h-[90%] w-[90%] flex-1 rounded-[2rem]"
        />
      </div>
      <h2 className="m-4 mb-8 text-2xl font-semibold text-black desktop:text-4xl">
        Project One
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Cta type="project cta" projectCtaText="Github" />
        <Cta type="project cta" projectCtaText="Demo" />
        <Cta type="project cta" projectCtaText="Info" />
      </div>
    </div>
  );
};

export default Project;

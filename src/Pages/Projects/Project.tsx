import React from "react";
import Cta from "../../Components/Cta";

type ProjectProps = {
  projectName: string;
  imageSrc: string;
};

const Project: React.FC<ProjectProps> = ({ projectName, imageSrc }) => {
  return (
    <div className="flex-1 rounded-[2rem] border border-secondary-300 bg-white p-6 text-center">
      <div className="flex flex-wrap justify-around gap-10 text-justify">
        <img
          src={imageSrc}
          alt={projectName}
          className="h-[80%] w-[90%] rounded-[2rem]"
        />
      </div>
      <h2 className=" m-4 mb-8 text-3xl font-semibold text-black">
        {projectName}
      </h2>
      <div className="flex justify-center gap-4">
        <Cta type="project cta" projectCtaText="Github" />
        <Cta type="project cta" projectCtaText="Live Demo" />
        <Cta type="project cta" projectCtaText="Info" />
      </div>
    </div>
  );
};

export default Project;

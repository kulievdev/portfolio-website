import React from "react";
import Cta from "../../Components/Cta";

type ProjectProps = {
  projectName: string;
  imageSrc: string;
};

const Project: React.FC<ProjectProps> = ({ projectName, imageSrc }) => {
  return (
    <div className="rounded-[2rem] border border-secondary-300 bg-white p-6 text-center">
      <div className="flex justify-around gap-10 text-justify">
        <img
          src={imageSrc}
          alt={projectName}
          className="rounded-[2rem] object-cover laptop:h-80 laptop:w-80 desktop:h-96 desktop:w-96"
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

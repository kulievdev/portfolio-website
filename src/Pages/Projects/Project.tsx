import React from "react";
import Cta from "../../Components/Cta";

type ProjectProps = {
  projectName: string;
  imageSrc: string;
};

const Project: React.FC<ProjectProps> = ({ projectName, imageSrc }) => {
  return (
    <div className="rounded-[2rem] border border-secondary-300 bg-white p-6 text-center">
      <div className="flex justify-around text-justify">
        <img
          src={imageSrc}
          alt={projectName}
          className="xs:h-72 xs:w-80 h-52 w-64 rounded-[2rem] object-cover sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem] laptop:h-[22rem] laptop:w-[22rem] desktop:h-[28rem] desktop:w-[28rem]"
        />
      </div>
      <h2 className=" m-4 mb-8 text-3xl font-semibold text-black">
        {projectName}
      </h2>
      <div className="flex flex-col gap-6 sm:flex sm:flex-row sm:justify-center sm:gap-4">
        <Cta type="project cta" projectCtaText="Github" />
        <Cta type="project cta" projectCtaText="Live Demo" />
        <Cta type="project cta" projectCtaText="Info" />
      </div>
    </div>
  );
};

export default Project;

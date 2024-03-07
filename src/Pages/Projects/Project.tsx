import React from "react";

type ProjectProps = {
    projectName: string;
    imageSrc: string;
};

const Project: React.FC<ProjectProps> = ({ projectName, imageSrc }) => {
    return (
        <div className="p-6 flex-1 bg-white rounded-[2rem] border border-secondary-300 text-center">
            <div className="flex text-justify flex-wrap flex-row gap-10 justify-around">
                <img
                    src={imageSrc}
                    alt={projectName}
                    className="rounded-[2rem] w-[90%] h-[90%]"
                />
            </div>
            <h2 className=" font-semibold text-3xl mb-8 m-4 text-black">
                {projectName}
            </h2>
            <div className="flex justify-center gap-4">
                <button className="py-2 px-6 text-lg font-semibold rounded-xl border-2 border-secondary-300 hover:bg-gray-700 hover:text-white hover:border-gray-700 ">
                    Github
                </button>
                <button className="py-2 px-6 text-lg font-semibold rounded-xl border-2 border-secondary-300 hover:bg-gray-700 hover:text-white hover:border-gray-700 ">
                    Live Demo
                </button>
                <button className="py-2 px-6 text-lg font-semibold rounded-xl border-2 border-secondary-300 hover:bg-gray-700 hover:text-white hover:border-gray-700 ">
                    Info
                </button>
            </div>
        </div>
    );
};

export default Project;

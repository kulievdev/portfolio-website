import React from "react";

type SkillProps = {
    imgSrc: string;
    name: string;
};

const Skill: React.FC<SkillProps> = ({ imgSrc, name }) => {
    return (
        <div className="flex flex-col items-center cursor-pointer transform transition duration-300 ease-in hover:-translate-y-4">
            <img src={imgSrc} className="h-14 w-14 rounded-lg mb-3" />
            <p className="font-extrabold text-gray-800">{name}</p>
        </div>
    );
};

export default Skill;

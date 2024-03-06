import React from "react";

type AboutMeProps = {
    imgSrc: string;
    altText: string;
    title: string;
    description: string;
};

const AboutMe: React.FC<AboutMeProps> = ({
    imgSrc,
    altText,
    title,
    description
}) => {
    return (
        <div className="p-6 flex-[1] bg-white rounded-[2rem] border border-gray-400 text-center">
            <img
                src={imgSrc}
                alt={altText}
                className="icon inline-block mb-4"
            />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default AboutMe;

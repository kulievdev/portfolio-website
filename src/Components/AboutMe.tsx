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
        <div className="p-6 flex-[1] rounded-[2rem] border border-gray-400 text-center hover:animate-pulse">
            <img
                src={imgSrc}
                alt={altText}
                className="icon inline-block mb-4"
            />
            <h3 className="text-primary-500 font-extrabold">{title}</h3>
            <p className="font-semibold text-gray-600">{description}</p>
        </div>
    );
};

export default AboutMe;

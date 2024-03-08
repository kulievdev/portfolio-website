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
    backgroundColor
}) => {
    return (
        <div className={`flex gap-4 p-6 rounded-3xl ${backgroundColor}`}>
            <img src={imgSrc} className="h-16 inline-block mb-4" />
            <div>
                <h3 className="mt-1 font-bold text-xl mb-2">{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default AboutMe;

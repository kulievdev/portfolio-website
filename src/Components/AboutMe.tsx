import React from "react";

type AboutMe2Props = {
    imgSrc: string;
    title: string;
    text: string;
    backgroundColor: string;
};

const AboutMe: React.FC<AboutMe2Props> = ({
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

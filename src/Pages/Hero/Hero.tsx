import profilePic from "../../assets/Images/myImageSquare.png";
import linkedinPic from "../../assets/Images/linkedin.png";
import githubPic from "../../assets/Images/github.png";
import twitterPic from "../../assets/Images/twitter.png";
import SocialMediaIcon from "../../Components/SocialMediaIcon";
import { useState } from "react";

export const mySocials = [
    {
        src: linkedinPic,
        alt: "My LinkedIn Profile"
    },
    {
        src: githubPic,
        alt: "My GitHub Profile"
    },
    {
        src: twitterPic,
        alt: "My Twitter Profile"
    }
];

const Hero = () => {
    const [pictureInPlace, setPictureInPlace] = useState(false);

    const handleImageHover = () => {
        setPictureInPlace(!pictureInPlace);
    };

    return (
        // <section className="bg-gradient-to-tl from-primary-100 to-gray-50">
        <section className="section_container flex justify-center gap-24">
            <div className="flex h-[400px] w-[335px] relative my-auto mx-0 ">
                <img
                    className="relative rounded-3xl z-10 cursor-pointer"
                    src={profilePic}
                    alt="Tohir Kuliev Profile Picture"
                    onMouseDown={handleImageHover}
                />
                {!pictureInPlace ? (
                    <div className="absolute bg-secondary-200 h-[400px] w-[335px] rounded-3xl transform transition duration-700 ease-in-out translate-x-4 translate-y-5"></div>
                ) : (
                    <div className="absolute bg-secondary-200 h-[400px] w-[335px] rounded-3xl transform transition duration-700 ease-in-out translate-x-0 translate-y-0"></div>
                )}
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <p className="font-semibold text-center">Hello, I'm</p>
                <h1 className="font-semibold text-5xl text-center">
                    Tohir Kuliev
                </h1>
                <p className="font-semibold text-3xl mb-4">
                    Full Stack Web Developer
                </p>
                <div className="flex justify-center gap-4">
                    <button className="btn border-2 border-gray-700  hover:bg-gray-700 hover:text-white ">
                        Download CV
                    </button>
                    <button className="btn border-2 border-gray-700 bg-gray-700 text-white hover:bg-black">
                        Contact Info
                    </button>
                </div>
                <div className="flex justify-center mt-4 gap-4">
                    {mySocials.map((mySocial, idx) => {
                        return (
                            <SocialMediaIcon
                                key={idx}
                                imageSrc={mySocial.src}
                                altText={mySocial.alt}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
        // </section>
    );
};

export default Hero;

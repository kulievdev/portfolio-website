import SocialMediaIcon from "../../Components/SocialMediaIcon";
import { mySocials } from "./Hero";

const HeroContent2 = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <p className="font-semibold text-center">Hello, I'm</p>
            <h1 className="font-semibold text-5xl text-center">Tohir Kuliev</h1>
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
    );
};

export default HeroContent2;

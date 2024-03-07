import { useState } from "react";
import profilePic from "../../assets/Images/myImageSquare.png";

const HeroImage2 = () => {
    const [pictureInPlace, setPictureInPlace] = useState(false);

    const handleImageHover = () => {
        setPictureInPlace(!pictureInPlace);
    };

    return (
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
    );
};

export default HeroImage2;

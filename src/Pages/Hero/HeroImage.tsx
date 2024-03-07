import { useState } from "react";
import profilePic from "../../assets/Images/newProfilePic.jpg";

const HeroImage = () => {
    const [pictureInPlace, setPictureInPlace] = useState(false);

    const handleImageHover = () => {
        setPictureInPlace(!pictureInPlace);
    };

    return (
        <div className="flex relative my-auto mx-0">
            <img
                className="relative h-[500px] w-[400px] rounded-3xl z-10 cursor-pointer object-cover"
                src={profilePic}
                alt="Tohir Kuliev Profile Picture"
                onMouseDown={handleImageHover}
            />
            {!pictureInPlace ? (
                <div className="absolute bg-secondary-200 h-[500px] w-[400px] rounded-3xl transform transition duration-700 ease-in-out translate-x-4 translate-y-5"></div>
            ) : (
                <div className="absolute bg-secondary-200 h-[500px] w-[400px] rounded-3xl transform transition duration-700 ease-in-out translate-x-0 translate-y-0"></div>
            )}
        </div>
    );
};

export default HeroImage;

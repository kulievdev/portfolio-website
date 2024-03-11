import { useState } from "react";
import profilePic from "../../assets/Images/newProfilePic.jpg";

const HeroImage = () => {
  const [pictureInPlace, setPictureInPlace] = useState(false);

  const handleImageHover = () => {
    setPictureInPlace(!pictureInPlace);
  };

  return (
    <div className="relative mx-0 my-auto flex">
      <img
        className="relative z-10 h-[500px] w-[400px] cursor-pointer rounded-3xl object-cover"
        src={profilePic}
        alt="Tohir Kuliev Profile Picture"
        onMouseDown={handleImageHover}
      />
      {!pictureInPlace ? (
        <div className="absolute h-[500px] w-[400px] translate-x-4 translate-y-5 transform rounded-3xl bg-secondary-200 transition duration-700 ease-in-out"></div>
      ) : (
        <div className="absolute h-[500px] w-[400px] translate-x-0 translate-y-0 transform rounded-3xl bg-secondary-200 transition duration-700 ease-in-out"></div>
      )}
    </div>
  );
};

export default HeroImage;

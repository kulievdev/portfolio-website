import { useState } from "react";
import profilePic from "../../assets/Images/myImageSquare.png";

const HeroImage2 = () => {
  const [pictureInPlace, setPictureInPlace] = useState(false);

  const handleImageHover = () => {
    setPictureInPlace(!pictureInPlace);
  };

  return (
    <div className="relative mx-0 my-auto flex h-[400px] w-[335px]">
      <img
        className="relative z-10 cursor-pointer rounded-3xl"
        src={profilePic}
        alt="Tohir Kuliev Profile Picture"
        onMouseDown={handleImageHover}
      />
      {!pictureInPlace ? (
        <div className="absolute h-[400px] w-[335px] translate-x-4 translate-y-5 transform rounded-3xl bg-secondary-200 transition duration-700 ease-in-out"></div>
      ) : (
        <div className="absolute h-[400px] w-[335px] translate-x-0 translate-y-0 transform rounded-3xl bg-secondary-200 transition duration-700 ease-in-out"></div>
      )}
    </div>
  );
};

export default HeroImage2;

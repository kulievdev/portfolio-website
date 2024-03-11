import { useState } from "react";
import profilePic from "../../assets/Images/newProfilePic.jpg";

const HeroImage = () => {
  const [pictureInPlace, setPictureInPlace] = useState(false);

  const handleImageHover = () => {
    setPictureInPlace(!pictureInPlace);
  };

  return (
    <div className="sm:w-max laptop:relative laptop:mx-0 laptop:my-auto laptop:flex">
      <img
        className="h-[150px] w-[150px] rounded-full object-cover ring-4 ring-secondary-300 ring-offset-4 sm:h-[300px] sm:w-[300px] sm:ring-8 sm:ring-secondary-300 sm:ring-offset-8 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] laptop:relative laptop:z-10 laptop:h-[450px] laptop:w-[350px] laptop:cursor-pointer laptop:rounded-3xl laptop:ring-0 laptop:ring-offset-0 desktop:h-[500px] desktop:w-[400px]"
        src={profilePic}
        alt="Tohir Kuliev Profile Picture"
        onMouseDown={handleImageHover}
      />
      {!pictureInPlace ? (
        <div className="laptop:absolute laptop:h-[450px] laptop:w-[350px] laptop:translate-x-4 laptop:translate-y-5 laptop:transform laptop:rounded-3xl laptop:bg-secondary-200 laptop:transition laptop:duration-700 laptop:ease-in-out desktop:h-[500px] desktop:w-[400px]"></div>
      ) : (
        <div className="laptop:absolute laptop:h-[450px] laptop:w-[350px] laptop:translate-x-0 laptop:translate-y-0 laptop:transform laptop:rounded-3xl laptop:bg-secondary-200 laptop:transition laptop:duration-700 laptop:ease-in-out desktop:h-[500px] desktop:w-[400px]"></div>
      )}
    </div>
  );
};

export default HeroImage;

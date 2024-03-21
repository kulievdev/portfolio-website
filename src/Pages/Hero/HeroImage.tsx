import { useState } from "react";
import profilePic from "../../assets/Images/myPicture.webp";
import AnimateOnScroll from "../../animation/AnimateOnScroll";

const HeroImage = () => {
  const [pictureInPlace, setPictureInPlace] = useState(false);

  const handleImageHover = () => {
    setPictureInPlace(!pictureInPlace);
  };

  return (
    <AnimateOnScroll x="10%" delay={0} scale={0.9} duration={0.6} notLazy>
      <div className="sm:w-max laptop:relative laptop:mx-0 laptop:my-auto laptop:flex">
        <img
          className="h-[160px] w-[160px] rounded-full object-cover ring-4 ring-secondary-300 ring-offset-4 xs:h-[200px] xs:w-[200px] sm:h-[250px] sm:w-[250px] sm:ring-8 sm:ring-secondary-300 sm:ring-offset-8 md:h-[300px] md:w-[300px] lg:h-[320px] lg:w-[320px] laptop:relative laptop:z-10 laptop:h-[450px] laptop:w-[350px] laptop:cursor-pointer laptop:rounded-3xl laptop:ring-0 laptop:ring-offset-0 desktop:h-[500px] desktop:w-[400px]"
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
    </AnimateOnScroll>
  );
};

export default HeroImage;

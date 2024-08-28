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
      <div className="largeTablet:relative largeTablet:mx-0 largeTablet:my-auto largeTablet:flex sm:w-max">
        <img
          className="largeTablet:relative largeTablet:rounded-3xl largeTablet:ring-0 largeTablet:ring-offset-0 largeTablet:z-10 largeTablet:h-[450px] largeTablet:w-[350px] largeTablet:cursor-pointer h-[160px] w-[160px] rounded-full object-cover ring-4 ring-secondary-300 ring-offset-4 xs:h-[200px] xs:w-[200px] sm:h-[250px] sm:w-[250px] sm:ring-8 sm:ring-secondary-300 sm:ring-offset-8 md:h-[300px] md:w-[300px] desktop:h-[500px] desktop:w-[400px]"
          src={profilePic}
          alt="Tohir Kuliev Profile Picture"
          onMouseDown={handleImageHover}
        />
        {!pictureInPlace ? (
          <div className="largeTablet:absolute largeTablet:translate-x-4 largeTablet:translate-y-5 largeTablet:transform largeTablet:rounded-3xl largeTablet:bg-secondary-200 largeTablet:transition largeTablet:duration-700 largeTablet:ease-in-out largeTablet:h-[450px] largeTablet:w-[350px] desktop:h-[500px] desktop:w-[400px]"></div>
        ) : (
          <div className="largeTablet:absolute largeTablet:translate-x-0 largeTablet:translate-y-0 largeTablet:transform largeTablet:rounded-3xl largeTablet:transition largeTablet:duration-700 largeTablet:ease-in-out largeTablet:h-[450px] largeTablet:w-[350px] largeTablet:bg-secondary-200 desktop:h-[500px] desktop:w-[400px]"></div>
        )}
      </div>
    </AnimateOnScroll>
  );
};

export default HeroImage;

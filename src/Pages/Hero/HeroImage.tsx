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
      <div className="sm:w-max largeTablet:relative largeTablet:mx-0 largeTablet:my-auto largeTablet:flex">
        <img
          className="tablet:w-[350px]h-[160px] w-[160px] cursor-pointer rounded-full object-cover ring-4 ring-secondary-300  ring-offset-4 xs:h-[200px] xs:w-[200px] sm:h-[250px] sm:w-[250px] sm:ring-8 sm:ring-secondary-300 sm:ring-offset-8 md:h-[300px] md:w-[300px] largeTablet:relative largeTablet:z-10 largeTablet:h-[350px] largeTablet:w-[250px] largeTablet:rounded-3xl largeTablet:ring-0 largeTablet:ring-offset-0 tablet:h-[450px] tablet:w-[350px] desktop:h-[500px] desktop:w-[400px]"
          src={profilePic}
          alt="Tohir Kuliev Profile Picture"
          onMouseDown={handleImageHover}
        />
        {!pictureInPlace ? (
          <div className="largeTablet:absolute largeTablet:h-[350px] largeTablet:w-[250px] largeTablet:translate-x-4 largeTablet:translate-y-5 largeTablet:transform largeTablet:rounded-3xl largeTablet:bg-secondary-200 largeTablet:transition largeTablet:duration-700 largeTablet:ease-in-out tablet:h-[450px] tablet:w-[350px] desktop:h-[500px] desktop:w-[400px]"></div>
        ) : (
          <div className="largeTablet:absolute largeTablet:h-[350px] largeTablet:w-[250px] largeTablet:translate-x-0 largeTablet:translate-y-0 largeTablet:transform largeTablet:rounded-3xl largeTablet:bg-secondary-200 largeTablet:transition largeTablet:duration-700 largeTablet:ease-in-out tablet:h-[450px] tablet:w-[350px] desktop:h-[500px] desktop:w-[400px]"></div>
        )}
      </div>
    </AnimateOnScroll>
  );
};

export default HeroImage;

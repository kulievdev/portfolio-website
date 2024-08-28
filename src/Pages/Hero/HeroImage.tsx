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
      <div className="sm:w-max tablet:relative tablet:mx-0 tablet:my-auto tablet:flex">
        <img
          className="h-[160px] w-[160px] rounded-full object-cover ring-4 ring-secondary-300 ring-offset-4 xs:h-[200px] xs:w-[200px] sm:h-[250px] sm:w-[250px] sm:ring-8 sm:ring-secondary-300 sm:ring-offset-8 md:h-[300px] md:w-[300px] lg:h-[320px] lg:w-[320px] tablet:relative tablet:z-10 tablet:h-[450px] tablet:w-[350px] tablet:cursor-pointer tablet:rounded-3xl tablet:ring-0 tablet:ring-offset-0 desktop:h-[500px] desktop:w-[400px]"
          src={profilePic}
          alt="Tohir Kuliev Profile Picture"
          onMouseDown={handleImageHover}
        />
        {!pictureInPlace ? (
          <div className="tablet:absolute tablet:h-[450px] tablet:w-[350px] tablet:translate-x-4 tablet:translate-y-5 tablet:transform tablet:rounded-3xl tablet:bg-secondary-200 tablet:transition tablet:duration-700 tablet:ease-in-out desktop:h-[500px] desktop:w-[400px]"></div>
        ) : (
          <div className="tablet:absolute tablet:h-[450px] tablet:w-[350px] tablet:translate-x-0 tablet:translate-y-0 tablet:transform tablet:rounded-3xl tablet:bg-secondary-200 tablet:transition tablet:duration-700 tablet:ease-in-out desktop:h-[500px] desktop:w-[400px]"></div>
        )}
      </div>
    </AnimateOnScroll>
  );
};

export default HeroImage;

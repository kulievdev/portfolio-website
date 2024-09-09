import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="section_container mx-6 flex h-[100vh] flex-col-reverse items-center justify-center sm:mx-10 sm:mx-12 sm:gap-10 largeTablet:flex-row largeTablet:justify-between lg:mx-28 desktop:mx-60 ">
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default Hero;

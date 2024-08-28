import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="section_container mx-6 flex h-[100vh] flex-col-reverse items-center justify-center sm:mx-10 sm:mx-12 sm:gap-10 lg:mx-28 tablet:flex-row tablet:justify-between laptop:flex laptop:h-[90vh] desktop:mx-60 desktop:h-[100vh]">
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default Hero;

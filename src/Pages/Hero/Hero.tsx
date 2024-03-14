import linkedinPic from "../../assets/Images/linkedin.png";
import githubPic from "../../assets/Images/github.png";
import twitterPic from "../../assets/Images/twitter.png";
// import SocialMediaIcon from "../../Components/SocialMediaIcon";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export const mySocials = [
  {
    src: linkedinPic,
    alt: "My LinkedIn Profile",
  },
  {
    src: githubPic,
    alt: "My GitHub Profile",
  },
  {
    src: twitterPic,
    alt: "My Twitter Profile",
  },
];

const Hero = () => {
  return (
    <section className="section_container mx-4 flex h-[100vh] flex-col-reverse items-center justify-center sm:mx-12 sm:gap-10 md:mx-32 laptop:mx-40 laptop:flex laptop:h-[90vh] laptop:flex-row laptop:justify-between desktop:h-[100vh]">
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default Hero;

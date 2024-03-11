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
    <section className="section_container mx-4 flex flex-col-reverse items-center justify-center sm:mx-40 sm:h-[90vh] sm:gap-10 laptop:flex laptop:flex-row laptop:justify-between">
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default Hero;

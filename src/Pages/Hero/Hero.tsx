import linkedinPic from "../../assets/SocialMediaIcons/linkedin.svg";
import githubPic from "../../assets/SocialMediaIcons/github.svg";
import twitterPic from "../../assets/SocialMediaIcons/twitter.svg";
// import SocialMediaIcon from "../../Components/SocialMediaIcon";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export const mySocials = [
  {
    src: linkedinPic,
    alt: "My LinkedIn Profile",
    link: "https://www.linkedin.com/in/tohir-kuliev/",
  },
  {
    src: githubPic,
    alt: "My GitHub Profile",
    link: "https://github.com/kulievdev",
  },
  {
    src: twitterPic,
    alt: "My Twitter Profile",
    link: "https://twitter.com/kulievdev",
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

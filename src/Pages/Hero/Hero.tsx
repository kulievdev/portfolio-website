import linkedinPic from "../../assets/Images/linkedin.png";
import githubPic from "../../assets/Images/github.png";
import twitterPic from "../../assets/Images/twitter.png";
// import SocialMediaIcon from "../../Components/SocialMediaIcon";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export const mySocials = [
    {
        src: linkedinPic,
        alt: "My LinkedIn Profile"
    },
    {
        src: githubPic,
        alt: "My GitHub Profile"
    },
    {
        src: twitterPic,
        alt: "My Twitter Profile"
    }
];

const Hero = () => {
    return (
        <section className="section_container h-[90vh] flex justify-between gap-24">
            <HeroContent />
            <HeroImage />
        </section>
    );
};

export default Hero;

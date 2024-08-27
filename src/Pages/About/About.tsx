import ArrowIcon from "../../Components/ArrowIcon";
import AnimateOnScroll from "../../animation/AnimateOnScroll";
import WhiteBackgroundContainer from "./WhiteBackgroundContainer";
import AboutHeader from "./AboutHeader";
import AboutBody from "./AboutBody";

const About = () => {
  return (
    <AnimateOnScroll y={20} duration={0.6} threshold={0.1} scale={0.95}>
      <section
        id="about"
        className="bg-gradient-to-br from-primary-50 to-gray-50"
      >
        <div className="section_container relative mx-6 flex h-fit flex-col justify-center py-20 sm:mx-10 lg:mx-14 desktop:mx-40">
          <WhiteBackgroundContainer>
            <AboutHeader />
            <AboutBody />
          </WhiteBackgroundContainer>
        </div>
        <ArrowIcon href="#contact" />
      </section>
    </AnimateOnScroll>
  );
};

export default About;

import ArrowIcon from "../../Components/ArrowIcon";
import MiniMainHeading from "../../Components/MiniMainHeading";
import MainHeading from "../../Components/MainHeading";
import AnimateOnScroll from "../../animation/AnimateOnScroll";
// import FrontEndStack from "./FrontEndStack";
// import BackEndStack from "./BackEndStack";
// import OverlapStack from "./OverlapStack";
import CombinedStack from "./CombinedStack";

const TechStack = () => {
  return (
    <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.8}>
      <section id="skills" className="relative">
        <div className="section_container relative mx-6 my-0 flex h-fit flex-col justify-center py-20 sm:mx-10 lg:mx-14 desktop:mx-40">
          <MiniMainHeading text="Explore My" />
          <MainHeading text="Skills" />
          {/* <MainHeading text="Tech Stack" /> */}
          {/* <div>
            <div className="mb-10 flex flex-row gap-8 xs:justify-center sm:flex sm:flex-col sm:justify-center sm:gap-10 laptop:flex laptop:flex-row laptop:gap-20">
              <FrontEndStack />
              <BackEndStack />
            </div>
            <OverlapStack />
          </div> */}
          <CombinedStack />
        </div>
        <ArrowIcon href="#about" />
      </section>
    </AnimateOnScroll>
  );
};

export default TechStack;

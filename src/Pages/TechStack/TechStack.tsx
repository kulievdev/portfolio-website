import Skill from "../../Components/Skill";
import { myFrontEndStack, myBackEndStack, myOverLapStack } from "./stacks";
import ArrowIcon from "../../Components/ArrowIcon";
import MiniMainHeading from "../../Components/MiniMainHeading";
import MainHeading from "../../Components/MainHeading";

const TechStack = () => {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-br from-primary-50 to-gray-50"
    >
      <div className="section_container relative mx-6 my-0  flex h-fit flex-col justify-center py-20 sm:mx-10 lg:mx-14 desktop:h-[100vh] desktop:py-0">
        <MiniMainHeading text="Explore My" />
        <MainHeading text="Tech Stack" />

        <div className="sm:block sm:gap-0">
          <div className=" mb-10 flex flex-row gap-8 xs:justify-center sm:flex sm:flex-col sm:justify-center sm:gap-10 desktop:flex desktop:flex-row desktop:gap-20">
            <div className="rounded-3xl p-6 shadow-2xl desktop:p-10">
              <h2 className="mb-6 text-center text-sm  font-semibold text-gray-600 sm:mb-10 sm:text-lg desktop:text-3xl">
                Frontend
              </h2>
              <div className="grid grid-cols-2 flex-wrap gap-12 sm:flex sm:flex-row desktop:grid desktop:grid-cols-5 desktop:flex-nowrap desktop:gap-10">
                {myFrontEndStack.map((stack, idx) => {
                  return (
                    <Skill key={idx} name={stack.name} imgSrc={stack.imgSrc} />
                  );
                })}
              </div>
            </div>
            <div className="rounded-3xl p-6 shadow-2xl desktop:p-10">
              <h2 className=" mb-6 text-center text-sm font-semibold text-gray-600 sm:mb-10 sm:text-lg desktop:text-3xl">
                Backend
              </h2>
              <div className="grid grid-cols-2 flex-wrap gap-12 sm:flex sm:flex-row desktop:grid desktop:grid-cols-5 desktop:flex-nowrap desktop:gap-10">
                {myBackEndStack.map((stack, idx) => {
                  return (
                    <Skill key={idx} name={stack.name} imgSrc={stack.imgSrc} />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="sm:flex-col desktop:flex desktop:flex-row desktop:justify-center">
            <div className="rounded-3xl p-5 shadow-2xl desktop:w-max desktop:p-10">
              <h2 className="mb-6 text-center text-sm font-semibold text-gray-600 sm:mb-10 sm:text-base desktop:text-3xl">
                Overlap
              </h2>
              <div className="flex flex-row flex-wrap justify-between gap-8 sm:flex sm:flex-row desktop:grid desktop:grid-cols-5 desktop:flex-nowrap desktop:gap-5">
                {myOverLapStack.map((stack, idx) => {
                  return (
                    <Skill key={idx} name={stack.name} imgSrc={stack.imgSrc} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArrowIcon href="#about" />
    </section>
  );
};

export default TechStack;

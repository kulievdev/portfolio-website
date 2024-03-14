import Skill from "../../Components/Skill";
import { myFrontEndStack, myBackEndStack, myOverLapStack } from "./stacks";
import ArrowIcon from "../../Components/ArrowIcon";

const TechStack = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-gray-50">
      <div className="section_container xs:h-[110vh] s:h-[100vh] xs:mx-6 iPhone14:h-[120vh] relative mx-4 flex h-[140vh] flex-col justify-center md:mx-10 lg:mx-20 desktop:mx-0">
        <p className="xs:text-sm mb-2 text-center text-xs font-semibold sm:mb-4 sm:text-base desktop:mb-6">
          Explore My
        </p>
        <h1 className="xs:text-2xl xs:mb-4 mb-3 text-center text-base font-extrabold sm:mb-10 sm:text-4xl desktop:mb-16 desktop:text-5xl">
          Tech Stack
        </h1>

        <div className="sm:block sm:gap-0">
          <div className="xs:mb-8 xs:justify-center mb-4 flex flex-row gap-8 sm:mb-10 sm:flex sm:flex-col sm:justify-center sm:gap-10 desktop:flex desktop:flex-row desktop:gap-20">
            <div className="rounded-3xl p-6 shadow-2xl desktop:p-10">
              <h2 className="xs:text-sm mb-6 text-center text-xs font-semibold text-gray-600 sm:mb-10 sm:text-base desktop:text-3xl">
                Frontend
              </h2>
              <div className="grid grid-cols-2 flex-wrap gap-10 sm:flex sm:flex-row desktop:grid desktop:grid-cols-5 desktop:flex-nowrap desktop:gap-10">
                {myFrontEndStack.map((stack, idx) => {
                  return (
                    <Skill key={idx} name={stack.name} imgSrc={stack.imgSrc} />
                  );
                })}
              </div>
            </div>
            <div className="rounded-3xl p-5 shadow-2xl desktop:p-10">
              <h2 className="xs:text-sm mb-6 text-center text-xs font-semibold text-gray-600 sm:mb-10 sm:text-base desktop:text-3xl">
                Backend
              </h2>
              <div className="grid grid-cols-2 flex-wrap gap-10 sm:flex sm:flex-row desktop:grid desktop:grid-cols-5 desktop:flex-nowrap desktop:gap-10">
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
              <h2 className="xs:text-sm mb-6 text-center text-xs font-semibold text-gray-600 sm:mb-10 sm:text-base desktop:text-3xl">
                Overlap
              </h2>
              <div className="desktop::flex-nowrap flex flex-row flex-wrap justify-between gap-6 sm:flex sm:flex-row desktop:grid desktop:grid-cols-5 desktop:gap-5">
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
      <ArrowIcon />
    </section>
  );
};

export default TechStack;

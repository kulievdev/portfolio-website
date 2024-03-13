import Skill from "../../Components/Skill";
import { myFrontEndStack, myBackEndStack, myOverLapStack } from "./stacks";
// import ArrowIcon from "../../Components/ArrowIcon";

const TechStack = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-gray-50">
      <div className="section_container relative mx-6 flex flex-col justify-center md:mx-10 lg:mx-20 desktop:mx-0">
        <p className="mb-2 text-center text-sm font-semibold sm:mb-4 sm:text-base desktop:mb-6">
          Explore My
        </p>
        <h1 className="mb-4 text-center text-2xl font-extrabold sm:mb-10 sm:text-4xl desktop:mb-16 desktop:text-5xl">
          Tech Stack
        </h1>

        <div className="sm:block sm:gap-0">
          <div className="mb-8 flex flex-row gap-8 bg-red-300 sm:mb-10 sm:flex sm:flex-col sm:justify-center sm:gap-10 desktop:flex desktop:flex-row desktop:gap-20">
            <div className="rounded-3xl p-5 shadow-2xl desktop:p-10">
              <h2 className="mb-6 text-center text-sm font-semibold text-gray-600 sm:mb-10 sm:text-base desktop:text-3xl">
                Frontend
              </h2>
              <div className="grid grid-cols-2 gap-10 sm:grid sm:grid-cols-6 sm:gap-6 md:grid md:grid-cols-4 md:justify-between md:gap-10 desktop:grid desktop:grid-cols-5 desktop:gap-10">
                {myFrontEndStack.map((stack, idx) => {
                  return (
                    <Skill key={idx} name={stack.name} imgSrc={stack.imgSrc} />
                  );
                })}
              </div>
            </div>
            <div className="rounded-3xl p-5 shadow-2xl desktop:p-10">
              <h2 className="mb-6 text-center text-sm font-semibold text-gray-600 sm:mb-10 sm:text-base desktop:text-3xl">
                Backend
              </h2>
              <div className="grid grid-cols-2 gap-10 sm:grid sm:grid-cols-6 sm:gap-6 md:flex md:flex-row md:justify-between desktop:grid desktop:grid-cols-5 desktop:gap-10">
                {myBackEndStack.map((stack, idx) => {
                  return (
                    <Skill key={idx} name={stack.name} imgSrc={stack.imgSrc} />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-green-300 sm:flex-col desktop:flex desktop:flex-row desktop:justify-center">
            <div className="rounded-3xl p-5 shadow-2xl desktop:w-max desktop:p-10">
              <h2 className="mb-6 text-center text-sm font-semibold text-gray-600 sm:mb-10 sm:text-base desktop:text-3xl">
                Overlap
              </h2>
              <div className="flex flex-row justify-between gap-6 sm:grid sm:grid-cols-6 sm:gap-6 md:flex md:flex-row md:justify-between desktop:grid desktop:grid-cols-4 desktop:gap-5">
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
      {/* <ArrowIcon /> */}
    </section>
  );
};

export default TechStack;

import Skill from "../../Components/Skill";
import { myFrontEndStack, myBackEndStack, myOverLapStack } from "./stacks";
import ArrowIcon from "../../Components/ArrowIcon";

const TechStack = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-gray-50">
      <div className="section_container xs:h-[180vh] xs:mx-6 relative mx-4 flex h-[260vh] flex-col justify-center sm:mx-10 md:mx-16 md:h-[100vh] laptop:mx-40 laptop:h-[120vh]  desktop:flex desktop:flex-col desktop:justify-center ">
        <p className="mb-4 text-center font-semibold desktop:mb-6">
          Explore My
        </p>
        <h1 className="mb-10 text-center text-4xl font-extrabold desktop:mb-16 desktop:text-5xl">
          Tech Stack
        </h1>
        <div className="flex flex-col gap-10 desktop:flex desktop:flex-col desktop:items-center">
          <div className="flex flex-col gap-10 desktop:mb-10 desktop:flex desktop:flex-row desktop:gap-20">
            <div className="rounded-3xl p-5 shadow-2xl desktop:p-10">
              <h2 className="mb-10 text-center font-semibold text-gray-600 desktop:text-3xl">
                Frontend
              </h2>
              <div className="grid grid-cols-2 gap-6 md:flex md:justify-between desktop:grid desktop:grid-cols-5 desktop:gap-10">
                {myFrontEndStack.map((stack, idx) => {
                  return (
                    <Skill key={idx} name={stack.name} imgSrc={stack.imgSrc} />
                  );
                })}
              </div>
            </div>
            <div className="rounded-3xl p-5 shadow-2xl desktop:p-10">
              <h2 className="mb-10 text-center font-semibold text-gray-600 desktop:text-3xl">
                Backend
              </h2>
              <div className="grid grid-cols-2 gap-6 md:flex md:justify-between desktop:grid desktop:grid-cols-5 desktop:gap-10">
                {myBackEndStack.map((stack, idx) => {
                  return (
                    <Skill key={idx} name={stack.name} imgSrc={stack.imgSrc} />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="rounded-3xl p-5 shadow-2xl desktop:w-max desktop:p-10">
            <h2 className="mb-10 text-center font-semibold text-gray-600 desktop:text-3xl">
              Overlap
            </h2>
            <div className="grid grid-cols-2 gap-6 md:flex md:justify-between desktop:grid desktop:grid-cols-4 desktop:gap-5">
              {myOverLapStack.map((stack, idx) => {
                return (
                  <Skill key={idx} name={stack.name} imgSrc={stack.imgSrc} />
                );
              })}
            </div>
          </div>
        </div>
        <ArrowIcon />
      </div>
    </section>
  );
};

export default TechStack;

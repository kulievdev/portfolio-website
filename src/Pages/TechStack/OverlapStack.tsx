import Skill from "../../Components/Skill";
import AnimateOnScroll from "../../animation/AnimateOnScroll";
import { myOverLapStack } from "./stacks";

const OverlapStack = () => {
  return (
    <div className="sm:flex-col laptop:flex laptop:flex-row laptop:justify-center">
      <AnimateOnScroll
        duration={0.6}
        threshold={0.1}
        delay={0.6}
        scale={0.9}
        y={30}
        className="rounded-3xl p-5 shadow-2xl desktop:w-max desktop:p-10"
      >
        <h2 className="mb-6 text-center text-sm font-semibold text-gray-600 sm:mb-10 sm:text-base desktop:text-3xl">
          Other
        </h2>
        <div className="flex flex-row flex-wrap gap-12 laptop:grid laptop:grid-cols-5 laptop:flex-nowrap laptop:gap-10">
          {myOverLapStack.map((stack, idx) => {
            return (
              <Skill
                link={() => {
                  window.open(stack.link);
                }}
                key={idx}
                type="stack"
                name={stack.name}
                imgSrc={stack.imgSrc}
              />
            );
          })}
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default OverlapStack;

import Skill from "../../Components/Skill";
import AnimateOnScroll from "../../animation/AnimateOnScroll";
import { myFrontEndStack } from "./stacks";

const FrontEndStack = () => {
  return (
    <AnimateOnScroll
      threshold={0}
      scale={0.9}
      duration={0.6}
      delay={0.2}
      x={"-20%"}
      y={30}
      className="rounded-3xl p-6 shadow-2xl desktop:p-10"
    >
      <h2 className="mb-6 text-center text-sm  font-semibold text-gray-600 sm:mb-10 sm:text-lg desktop:text-3xl">
        Frontend
      </h2>
      <div className="grid grid-cols-2 flex-wrap gap-12 sm:flex sm:flex-row laptop:grid laptop:grid-cols-5 laptop:flex-nowrap laptop:gap-10">
        {myFrontEndStack.map((stack, idx) => {
          return (
            <Skill
              link={() => {
                window.open(stack.link);
              }}
              key={idx}
              name={stack.name}
              imgSrc={stack.imgSrc}
            />
          );
        })}
      </div>
    </AnimateOnScroll>
  );
};

export default FrontEndStack;

import Skill from "../../Components/Skill";
import AnimateOnScroll from "../../animation/AnimateOnScroll";
import { myBackEndStack } from "./stacks";

const BackEndStack = () => {
  return (
    <AnimateOnScroll
      duration={0.6}
      threshold={0.1}
      delay={0.4}
      scale={0.9}
      x={window.innerWidth < 1920 ? "10%" : "20%"}
      y={30}
      className="rounded-3xl p-6 shadow-2xl desktop:p-10"
    >
      <h2 className=" mb-6 text-center text-sm font-semibold text-gray-600 sm:mb-10 sm:text-lg desktop:text-3xl">
        Backend
      </h2>
      <div className="grid grid-cols-2 flex-wrap gap-12 sm:flex sm:flex-row laptop:grid laptop:grid-cols-5 laptop:flex-nowrap laptop:gap-10">
        {myBackEndStack.map((stack, idx) => {
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

export default BackEndStack;

import Skill from "../../Components/Skill";
import AnimateOnScroll from "../../animation/AnimateOnScroll";
import { myCombinedSkills } from "./stacks";

const CombinedStack = () => {
  return (
    <AnimateOnScroll
      threshold={0}
      scale={0.9}
      duration={0.6}
      delay={0.2}
      x={window.innerWidth < 1920 ? "-10%" : "-20%"}
      y={30}
      className="p-6 desktop:p-10"
    >
      <div className="grid grid-cols-2 gap-16 sm:grid sm:grid-cols-4">
        {myCombinedSkills.map((stack, idx) => {
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
  );
};

export default CombinedStack;

import Skill from "../../Components/Skill";
import { myFrontEndStack, myBackEndStack, myOverLapStack } from "./stacks";
import arrow from "../../assets/Images/arrow.png";

const TechStack = () => {
    return (
        <div className="bg-gradient-to-l from-primary-50 to-gray-50">
            <section className="relative flex flex-col items-center">
                <p className="text-center mb-6 font-semibold">Explore My</p>
                <h1 className="text-5xl text-center font-extrabold mb-16">
                    Tech Stack
                </h1>

                <div className="flex gap-20 mb-10">
                    <div className="p-5 border-2 rounded-3xl">
                        <h2 className="text-gray-600 text-center font-semibold text-3xl mb-16">
                            Frontend
                        </h2>
                        <div className="grid grid-cols-5 gap-8">
                            {myFrontEndStack.map((stack, idx) => {
                                return (
                                    <Skill
                                        key={idx}
                                        name={stack.name}
                                        imgSrc={stack.imgSrc}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="p-5 border-2 rounded-3xl">
                        <h2 className="text-gray-600 text-center font-semibold text-3xl mb-16">
                            Backend
                        </h2>
                        <div className="grid grid-cols-5 gap-8">
                            {myBackEndStack.map((stack, idx) => {
                                return (
                                    <Skill
                                        key={idx}
                                        name={stack.name}
                                        imgSrc={stack.imgSrc}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="p-5 w-max border-2 rounded-3xl">
                    <h2 className="text-gray-600 text-center font-semibold text-3xl mb-16">
                        Overlap
                    </h2>
                    <div className="grid grid-cols-3 gap-8">
                        {myOverLapStack.map((stack, idx) => {
                            return (
                                <Skill
                                    key={idx}
                                    name={stack.name}
                                    imgSrc={stack.imgSrc}
                                />
                            );
                        })}
                    </div>
                </div>
                <img
                    src={arrow}
                    alt="Arrow icon"
                    className="icon absolute right-[-5rem] bottom-10"
                />
            </section>
        </div>
    );
};

export default TechStack;

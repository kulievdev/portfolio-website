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
                    <div className="p-10 border border-gray-500 hover:shadow-2xl rounded-3xl">
                        <h2 className="text-gray-600 text-center font-semibold text-3xl mb-10">
                            Frontend
                        </h2>
                        <div className="grid grid-cols-5 gap-10">
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
                    <div className="p-10 border border-gray-500 rounded-3xl hover:shadow-2xl">
                        <h2 className="text-gray-600 text-center font-semibold text-3xl mb-10">
                            Backend
                        </h2>
                        <div className="grid grid-cols-5 gap-10">
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
                <div className="p-10 w-max border border-gray-500 rounded-3xl hover:shadow-2xl">
                    <h2 className="text-gray-600 text-center font-semibold text-3xl mb-10">
                        Overlap
                    </h2>
                    <div className="grid grid-cols-3 gap-10">
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

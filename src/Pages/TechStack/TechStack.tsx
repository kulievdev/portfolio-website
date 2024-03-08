import Skill from "../../Components/Skill";
import { myFrontEndStack, myBackEndStack, myOverLapStack } from "./stacks";
import ArrowIcon from "../../Components/ArrowIcon";

const TechStack = () => {
    return (
        <section className="bg-gradient-to-br from-primary-50 to-gray-50">
            <div className="section_container relative flex flex-col justify-center">
                <p className="text-center mb-6 font-semibold">Explore My</p>
                <h1 className="text-5xl text-center font-extrabold mb-16">
                    Tech Stack
                </h1>
                <div className="flex flex-col items-center">
                    <div className="flex gap-20 mb-10">
                        <div className="p-10 shadow-2xl rounded-3xl">
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
                        <div className="p-10 rounded-3xl shadow-2xl">
                            <h2 className="text-gray-600 text-center font-semibold text-3xl mb-10">
                                Backend
                            </h2>
                            <div className="grid grid-cols-5 gap-16">
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
                    <div className="p-10 w-max rounded-3xl shadow-2xl">
                        <h2 className="text-gray-600 text-center font-semibold text-3xl mb-10">
                            Overlap
                        </h2>
                        <div className="grid grid-cols-4 gap-10">
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
                </div>
                <ArrowIcon />
            </div>
        </section>
    );
};

export default TechStack;

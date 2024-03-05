import myPicture from "../../assets/myPicture.png";
import myExperience from "../../assets/experience.png";
import myEducation from "../../assets/education.png";
import arrow from "../../assets/arrow.png";
import { useState } from "react";

const About = () => {
    const [learnMore, setLearnMore] = useState(false);

    return (
        <section className="relative">
            <p className="text-center mb-6">Get To Know More</p>
            <h1 className="text-5xl text-center mb-10">About Me</h1>
            <div className="flex h-[80%] gap-16">
                <div className="flex my-auto mx-0 ">
                    <img
                        src={myPicture}
                        alt="Profile picture"
                        className="rounded-[2rem] w-[600px] h-[700px] object-cover max-w-none"
                    />
                </div>
                <div className="flex justify-center flex-col">
                    <div className="flex gap-8 my-8">
                        <div className="p-6 flex-[1] bg-white rounded-[2rem] border border-gray-400 text-center">
                            <img
                                src={myExperience}
                                alt="Experience icon"
                                className="icon inline-block mb-4"
                            />
                            <h3>Experience</h3>
                            <p>
                                1+ years <br />
                                Full Stack Development
                            </p>
                        </div>
                        <div className="p-6 flex-[1] bg-white rounded-[2rem] border border-gray-400 text-center">
                            <img
                                src={myEducation}
                                alt="Education icon"
                                className="icon inline-block mb-4"
                            />
                            <h3>Education</h3>
                            <p>
                                BBA in Corporate Finance
                                <br />
                                BA in Economics
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Hey there again! 👋 My journey has been all about
                            embracing change and following my passions.
                            Originally, I was on track for a career in law—got
                            admitted to law schools and all. But as I delved
                            deeper into legal world, I realized my heart wasn't
                            in it. Instead, I found myself drawn to the exciting
                            world of technology. The endless possibilities
                            fascinated me, so I made a big decision to switch
                            gears. 💡 That's when I jumped into software
                            engineering and enrolled in a software engineering
                            bootcamp, where I immersed myself in learning the
                            ins and outs of software development. Now? Well,{" "}
                            {learnMore ? (
                                `Fast forward to today, I proudly stand as a
                            proficient full-stack web developer. With a solid
                            foundation in front-end and back-end development, I
                            thrive in crafting intuitive, robust, and
                            user-centric web solutions that make an impact. 🚀
                            My journey's taught me a lot about adaptability,
                            resilience, and the importance of pursuing what
                            truly lights you up inside. I'm always up for
                            learning something new, innovating, and using tech
                            to make positive changes in the world. 🌟 Let's
                            connect! I'm all about collaboration and creating
                            meaningful experiences together. 🤝`
                            ) : (
                                <button
                                    className="text-primary-500 font-extrabold"
                                    onClick={() => setLearnMore(true)}
                                >
                                    Learn More ...
                                </button>
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <img
                src={arrow}
                alt="Arrow icon"
                className="icon absolute right-[-5rem] bottom-10"
            />
        </section>
    );
};

export default About;

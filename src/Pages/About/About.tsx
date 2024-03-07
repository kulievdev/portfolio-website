import myExperience from "../../assets/Images/experience.png";
import myEducation from "../../assets/Images/education.png";
import myHobbies from "../../assets/Images/hobbies.png";
import myLocation from "../../assets/Images/location.png";
import arrow from "../../assets/Images/arrow.png";
import { useState } from "react";
import AboutMe from "../../Components/AboutMe";

const myInfo = [
    {
        imgSrc: myExperience,
        altText: "Experience Icon",
        title: "Experience",
        description: "1+ years Full Stack Development"
    },
    {
        imgSrc: myEducation,
        altText: "Education Icon",
        title: "Education",
        description: "BBA in Corporate Finance and BA in Economics"
    },
    {
        imgSrc: myLocation,
        altText: "Location Icon",
        title: "Location",
        description: "New York, USA"
    },
    {
        imgSrc: myHobbies,
        altText: "Hobbies Icon",
        title: "Hobbies",
        description:
            "Learning New Technologies, soccer, reading, traveling and photography"
    }
];

const About = () => {
    const [learnMore, setLearnMore] = useState(false);

    return (
        // <section className="bg-gradient-to-r from-primary-50 to-gray-50">
        <>
            <section className="section_container relative flex flex-col justify-center">
                <p className="text-center mb-6 font-semibold">
                    Get To Know More
                </p>
                <h1 className="text-5xl text-center font-extrabold mb-16">
                    About Me
                </h1>
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        {myInfo.map((info, idx) => {
                            return (
                                <AboutMe
                                    key={idx}
                                    imgSrc={info.imgSrc}
                                    altText={info.altText}
                                    title={info.title}
                                    description={info.description}
                                />
                            );
                        })}
                    </div>
                    <div>
                        <p className="text-gray-800 text-xl text-justify">
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
                                    className="text-primary-500 font-extrabold animate-pulse transform transition duration-500 ease-in hover:translate-x-4"
                                    onClick={() => setLearnMore(true)}
                                >
                                    Continue Reading ...
                                </button>
                            )}
                        </p>
                    </div>
                </div>
                <img
                    src={arrow}
                    alt="Arrow icon"
                    className="icon absolute right-[-5rem] bottom-10"
                />
            </section>
            <div className="w-full border-t border-gray-300"></div>
        </>
        // </section>
    );
};

export default About;

import AboutMe from "../../Components/AboutMe";
import codeIcon from "../../assets/Images/code.png";
import hobbiesIcon from "../../assets/Images/puzzle.png";
import educationIcon from "../../assets/Images/university.png";
import learningIcon from "../../assets/Images/knowledge.png";
import ArrowIcon from "../../Components/ArrowIcon";

const About = () => {
    return (
        <section>
            <div className="relative my-0 mx-40 py-16 px-56">
                <div className="bg-white flex flex-col gap-10 py-16 px-16 rounded-3xl">
                    <div className="flex items-center gap-8">
                        <h2 className="font-extrabold text-5xl">About</h2>
                        <div className="border bg-blue-500 w-60 h-2 rounded-full"></div>
                    </div>
                    <div className="flex flex-col w-[80%] gap-6">
                        <p>
                            I am a Web Developer from New York City,
                            specializing in building websites and web
                            applications.
                        </p>
                        <p>
                            I use my coding and programming skills to create
                            user-friendly and responsive web pages. I have
                            gained web development experience from building many
                            complex projects.
                        </p>
                    </div>
                    <h2 className="font-bold text-2xl">Quick Summary!</h2>
                    <div className="grid grid-cols-2 gap-10">
                        <AboutMe
                            imgSrc={codeIcon}
                            title="Web Development"
                            text="I have been coding for 1+ years now, almost every day honing my skills in web development and design."
                            backgroundColor="bg-gradient-to-br from-primary-50 to-gray-50"
                        />
                        <AboutMe
                            imgSrc={educationIcon}
                            title="Education"
                            text="I hold Bachelor's Degrees in Business Administration (BBA) with a concentration in Corporate Finance and Economics (BA) from CUNY Queens College."
                            backgroundColor="bg-gradient-to-bl from-primary-50 to-secondary-100"
                        />
                        <AboutMe
                            imgSrc={learningIcon}
                            title="Continuous Growth"
                            text="Continuous growth is a fundamental aspect of my professional journey. I am committed to lifelong learning. Skills I am currently learning are Next.js and AWS."
                            backgroundColor="bg-gradient-to-bl from-primary-50 to-secondary-100"
                        />
                        <AboutMe
                            imgSrc={hobbiesIcon}
                            title="Hobbies"
                            text="Outside of work and learning, I like to play soccer, go out with my family, try new food and travel as much as possible."
                            backgroundColor="bg-gradient-to-br from-primary-50 to-gray-50"
                        />
                    </div>
                </div>
                <ArrowIcon />
            </div>
        </section>
    );
};

export default About;

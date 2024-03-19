import AboutMe from "../../Components/AboutMe";
import codeIcon from "../../assets/Images/code.png";
import hobbiesIcon from "../../assets/Images/puzzle.png";
import educationIcon from "../../assets/Images/university.png";
import learningIcon from "../../assets/Images/knowledge.png";
import ArrowIcon from "../../Components/ArrowIcon";
import AnimateOnScroll from "../../animation/AnimateOnScroll";

const About = () => {
  return (
    <AnimateOnScroll y={20} duration={0.6} threshold={0.4} scale={0.95}>
      <section id="about" className="relative">
        <div className="section_container relative mx-6 flex h-fit flex-col justify-center py-20 sm:mx-10 lg:mx-14 desktop:mx-40">
          <div className="flex flex-col justify-center gap-6 rounded-3xl bg-white p-4 px-6 shadow-2xl sm:px-14 sm:py-16 lg:px-12 lg:py-20 laptop:px-32 desktop:gap-10 desktop:px-44 bigDesktop:px-52">
            <div className="flex items-center gap-8">
              <h2 className="text-2xl font-extrabold sm:text-3xl desktop:text-5xl">
                About
              </h2>
              <div className="h-[5px] w-24 rounded-full border bg-blue-500 sm:h-2 sm:w-80 "></div>
            </div>
            <div className="flex flex-col gap-6 lg:w-[80%]">
              <p className="text-base md:text-lg laptop:text-xl">
                I am a Web Developer from New York City, specializing in
                building websites and web applications.
              </p>
              <p className="text-base md:text-lg laptop:text-xl">
                I use my coding and programming skills to create user-friendly
                and responsive web pages. I have gained web development
                experience from building many complex projects.
              </p>
            </div>
            <h2 className="text-lg font-bold md:text-xl desktop:text-2xl">
              Quick Summary!
            </h2>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6 desktop:gap-10">
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
        </div>
        <ArrowIcon href="#contact" />
      </section>
    </AnimateOnScroll>
  );
};

export default About;

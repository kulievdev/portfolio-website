import AboutMe from "../../Components/AboutMe";
import codeIcon from "../../assets/Images/code.png";
import hobbiesIcon from "../../assets/Images/puzzle.png";
import educationIcon from "../../assets/Images/university.png";
import learningIcon from "../../assets/Images/knowledge.png";
import ArrowIcon from "../../Components/ArrowIcon";

const About = () => {
  return (
    <section>
      <div className="xs:mx-6 relative mx-4 my-0 py-16 sm:mx-10 md:mx-16 laptop:mx-40 desktop:px-56">
        <div className="xs:px-4 flex flex-col gap-10 rounded-3xl bg-white py-16 sm:px-16">
          <div className="flex items-center gap-8">
            <h2 className="text-5xl font-extrabold">About</h2>
            <div className="h-2 w-60 rounded-full border bg-blue-500"></div>
          </div>
          <div className="flex flex-col gap-6 lg:w-[80%]">
            <p>
              I am a Web Developer from New York City, specializing in building
              websites and web applications.
            </p>
            <p>
              I use my coding and programming skills to create user-friendly and
              responsive web pages. I have gained web development experience
              from building many complex projects.
            </p>
          </div>
          <h2 className="text-2xl font-bold">Quick Summary!</h2>
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-10">
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

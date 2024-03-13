import Project from "./Project";
import project1 from "../../assets/Images/project.png";
import ArrowIcon from "../../Components/ArrowIcon";

const Projects = () => {
  return (
    <section>
      <div className="section_container bigDesktop:h-[100vh] xs:h-[300vh] relative mx-4 flex h-[340vh] flex-col justify-center sm:mx-10 sm:h-[220vh] md:mx-16 md:h-[200vh] lg:h-[140vh] laptop:mx-40 laptop:h-[180vh] xl:h-[140vh]">
        <p className="mb-6 text-center font-semibold">Browse My Recent</p>
        <h1 className="text-center text-5xl font-extrabold">Projects</h1>
        <div className="my-8 flex flex-wrap justify-center gap-8 laptop:flex laptop:flex-row laptop:justify-center">
          <Project projectName="Project 1" imageSrc={project1} />
          <Project projectName="Project 2" imageSrc={project1} />
          <Project projectName="Project 3" imageSrc={project1} />
        </div>
        <ArrowIcon />
      </div>
    </section>
  );
};

export default Projects;

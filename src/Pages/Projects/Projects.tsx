import Project from "./Project";
import project1 from "../../assets/Images/project.png";
import ArrowIcon from "../../Components/ArrowIcon";

const Projects = () => {
  return (
    <section>
      <div className="section_container relative flex h-[100vh] flex-col justify-center">
        <p className="mb-6 text-center font-semibold">Browse My Recent</p>
        <h1 className="text-center text-5xl font-extrabold">Projects</h1>
        <div className="flex flex-col justify-center">
          <div className="my-8 flex flex-row gap-8 desktop:flex desktop:justify-center">
            <Project projectName="Project 1" imageSrc={project1} />
            <Project projectName="Project 2" imageSrc={project1} />
            <Project projectName="Project 3" imageSrc={project1} />
          </div>
        </div>
        <ArrowIcon />
      </div>
    </section>
  );
};

export default Projects;

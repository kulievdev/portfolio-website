import Project from "./Project";
import project1 from "../../assets/Images/project.png";
import MiniMainHeading from "../../Components/MiniMainHeading";
import MainHeading from "../../Components/MainHeading";

const Projects = () => {
  return (
    <section>
      <div className="mx-6 flex h-fit flex-col justify-center py-20 sm:mx-10 lg:mx-14 desktop:mx-40">
        <MiniMainHeading text="Browse My Recent" />
        <MainHeading text="Projects" />
        <div className="my-8 flex flex-wrap justify-center gap-8 sm:grid sm:grid-cols-2 xl:flex">
          <Project imageSrc={project1} projectName="Project One" />
          <Project imageSrc={project1} projectName="Project One" />
          <Project imageSrc={project1} projectName="Project One" />
          <Project imageSrc={project1} projectName="Project One" />
        </div>
      </div>
    </section>
  );
};

export default Projects;

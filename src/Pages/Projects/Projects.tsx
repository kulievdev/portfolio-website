import Project from "./Project";
import project1 from "../../assets/Images/project.png";

const Projects = () => {
  return (
    <section>
      <div className="mx-6 flex h-fit flex-col justify-center py-20 sm:mx-10 lg:mx-14 desktop:mx-40">
        <p className="mb-6 text-center text-sm font-semibold sm:text-xl desktop:text-2xl">
          Browse My Recent
        </p>
        <h1 className="text-center text-4xl font-extrabold sm:text-5xl desktop:text-7xl">
          Projects
        </h1>
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

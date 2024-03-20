import Project from "./Project";
import MiniMainHeading from "../../Components/MiniMainHeading";
import MainHeading from "../../Components/MainHeading";
import ArrowIcon from "../../Components/ArrowIcon";
import AnimateOnScroll from "../../animation/AnimateOnScroll";
import myProjects from "./myProjects";

const Projects = () => {
  return (
    <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
      <section id="projects" className="relative">
        <div className="mx-6 flex h-fit flex-col justify-center py-20 sm:mx-10 lg:mx-14 desktop:mx-40">
          <MiniMainHeading text="Browse My Recent" />
          <MainHeading text="Projects" />
          <div className="my-8 flex flex-wrap justify-center gap-8 sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3">
            {myProjects.map((project, idx) => (
              <Project
                key={idx}
                index={idx}
                name={project.projectName}
                imageSrc={project.imgSrc}
              />
            ))}
          </div>
        </div>
        <ArrowIcon href="#skills" />
      </section>
    </AnimateOnScroll>
  );
};

export default Projects;

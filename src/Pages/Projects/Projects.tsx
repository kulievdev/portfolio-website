import Project from "./Project";
import project1 from "../../assets/Images/project.png";
import MiniMainHeading from "../../Components/MiniMainHeading";
import MainHeading from "../../Components/MainHeading";
import ArrowIcon from "../../Components/ArrowIcon";
import AnimateOnScroll from "../../animation/AnimateOnScroll";

const Projects = () => {
  return (
    <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
      <section id="projects" className="relative">
        <div className="mx-6 flex h-fit flex-col justify-center py-20 sm:mx-10 lg:mx-14 desktop:mx-40">
          <MiniMainHeading text="Browse My Recent" />
          <MainHeading text="Projects" />
          <div className="my-8 flex flex-wrap justify-center gap-8 sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3">
            <Project index={1} imageSrc={project1} projectName="Project One" />
            <Project index={2} imageSrc={project1} projectName="Project One" />
            <Project index={3} imageSrc={project1} projectName="Project One" />
            <Project index={4} imageSrc={project1} projectName="Project One" />
            <Project index={5} imageSrc={project1} projectName="Project One" />
            <Project index={6} imageSrc={project1} projectName="Project One" />
          </div>
        </div>
        <ArrowIcon href="#skills" />
      </section>
    </AnimateOnScroll>
  );
};

export default Projects;

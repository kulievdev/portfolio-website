import Project from "./Project";
import project1 from "../../assets/Images/project.png";
import ArrowIcon from "../../Components/ArrowIcon";

const Projects = () => {
    return (
        <section className="relative">
            <div className="section_container h-[100vh] relative flex flex-col justify-center">
                <p className="text-center mb-6 font-semibold">
                    Browse My Recent
                </p>
                <h1 className="text-5xl text-center font-extrabold">
                    Projects
                </h1>
                <div className="flex flex-col justify-center">
                    <div className="flex gap-8 my-8">
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

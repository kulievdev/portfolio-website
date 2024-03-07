import Project from "./Project";
import project1 from "../../assets/Images/waterfall.jpg";

import arrow from "../../assets/Images/arrow.png";

const Projects = () => {
    return (
        <section className="relative">
            <div className="section_container relative flex flex-col justify-center">
                <p className="text-center mb-6 font-semibold">
                    Browse My Recent
                </p>
                <h1 className="text-5xl text-center font-extrabold mb-16">
                    Projects
                </h1>
                <div className="flex flex-col justify-center">
                    <div className="flex gap-8 my-8">
                        <Project projectName="Project 1" imageSrc={project1} />
                        <Project projectName="Project 2" imageSrc={project1} />
                        <Project projectName="Project 3" imageSrc={project1} />
                    </div>
                </div>
                <img
                    src={arrow}
                    alt="Arrow icon"
                    className="icon absolute right-[-5rem] bottom-10"
                />
            </div>
        </section>
    );
};

export default Projects;

import React, { useState } from "react";
import MiniMainHeading from "../../Components/MiniMainHeading";
import MainHeading from "../../Components/MainHeading";
import ArrowIcon from "../../Components/ArrowIcon";
import AnimateOnScroll from "../../animation/AnimateOnScroll";
import myProjects from "./myProjects";
import Project from "./Project";
import Buttons from "./Buttons";

const Projects: React.FC = () => {
  const [item, setItems] = useState(myProjects);
  const projectItems = [
    ...new Set(myProjects.map((project) => project.category)),
  ];

  const filterItems = (cat: string) => {
    const newItems = myProjects.filter((project) => project.category === cat);
    setItems(newItems);
  };

  return (
    <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
      <section id="projects" className="relative">
        <div className="mx-6 flex h-fit flex-col justify-center py-20 sm:mx-10 lg:mx-14 desktop:mx-40">
          <MiniMainHeading text="Browse My Recent" />
          <MainHeading text="Projects" />
          <Buttons
            projectItems={projectItems}
            filterItems={filterItems}
            setItems={setItems}
          />
          <div className="my-8 flex flex-col flex-wrap justify-center gap-8 md:grid md:grid-cols-2">
            {item.map((project, idx) => (
              <Project
                key={idx}
                index={idx}
                name={project.projectName}
                images={project.images}
                githubLink={project.github}
                websiteLink={project.website}
                logo={project.logo}
                description={project.description}
                stacks={project.stacks}
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

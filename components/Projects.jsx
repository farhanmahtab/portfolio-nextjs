import React from "react";
import img from "../public/assets/travel.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='project'  className="w-full my-5 mt-12 py-12">
      <div className="max-w-[1240px] mx-auto mt-10 px-2 py-10 ">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-2 tracking-widest text-green-200">What i've built</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="Travel Planner"
          backgroundImg={img}
          projectURL="/travel"
        />
        <ProjectItem
          title="Travel Planner"
          backgroundImg={img}
          projectURL="/travel"
        />
        <ProjectItem
          title="Travel Planner"
          backgroundImg={img}
          projectURL="/travel"
        />
        <ProjectItem
          title="Travel Planner"
          backgroundImg={img}
          projectURL="/travel"
        />
      </div>
  
    </div>
  );
};

export default Projects;

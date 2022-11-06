import React from "react";
import img from "../public/assets/travel.jpg";
import iict from "../public/assets/iict.png"
import blog from "../public/assets/blog.jpg"
import game from "../public/assets/game.jpg"
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
          projectURL="https://github.com/anindo9185/travel350"
          desc="NextJS , TailwindCSS"
        />
        <ProjectItem
          title="IICT Website"
          backgroundImg={iict}
          projectURL="https://github.com/Fahimefto/iict-sust-backend"
          desc="nextJs , TailwindCSS ,   NodeJS , Cloudinery and MongoDB"
        />
        <ProjectItem
          title="Blog App"
          backgroundImg={blog}
          projectURL="https://github.com/farhanmahtab/NodeJS-MongoDB-BlogApp-RestAPI"
          desc="React ,NodeJS ,Express and MongoDB"
        />
        <ProjectItem
          title="Astroid shooter"
          backgroundImg={game}
          projectURL="/https://github.com/farhanmahtab/raylib_game_project"
          desc="CPP ,Using Raylib library"
        />
      </div>
  
    </div>
  );
};

export default Projects;

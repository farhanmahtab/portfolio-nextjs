import React, { FC } from "react";
import ProjectItem from "./ProjectItem";
import IMAGE_ASSETS from "@/lib/imageAssets";

const Projects: FC = () => {
  return (
    <div id="project" className="w-full my-5 mt-12 py-12">
      <div className="max-w-310 mx-auto mt-10 px-2 py-10 ">
        <p className="text-xl font-semibold tracking-widest uppercase text-[#4f8e38]">
          Projects
        </p>
        <h2 className="py-2 tracking-widest text-green-200">
          What i&#39;ve built
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="IICT Website"
          backgroundImg={IMAGE_ASSETS.iict}
          projectURL="https://github.com/Fahimefto/iict-sust-backend"
          desc="nextJs , TailwindCSS ,   NodeJS , Cloudinery and MongoDB"
        />
        <ProjectItem
          title="Blog App"
          backgroundImg={IMAGE_ASSETS.blog}
          projectURL="https://github.com/farhanmahtab/NodeJS-MongoDB-BlogApp-RestAPI"
          desc="React ,NodeJS ,Express and MongoDB"
        />
      </div>
    </div>
  );
};

export default Projects;

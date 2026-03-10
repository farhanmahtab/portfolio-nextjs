"use client";
import React, { FC } from "react";
import ShowcaseItem from "./ShowcaseItem";
import { PROJECTS } from "@/lib/projects";
import { motion } from "framer-motion";

const Showcase: FC = () => {
  return (
    <div id="showcase" className="w-full my-5 py-16">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold tracking-widest uppercase text-[#4f8e38]"
        >
          Showcase
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="py-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white"
        >
          Products I&#39;ve worked on
        </motion.h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
        {PROJECTS.map((project, index) => (
          <ShowcaseItem
            key={project.id}
            id={project.id}
            title={project.title}
            backgroundImg={project.backgroundImg}
            desc={project.shortDesc}
          />
        ))}
      </div>
    </div>
  );
};

export default Showcase;

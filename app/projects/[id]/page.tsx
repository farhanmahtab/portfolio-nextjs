"use client";
import React from "react";
import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";

const ProjectPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen pt-24 pb-12 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link 
          href="/#showcase" 
          className="flex items-center gap-2 text-gray-400 hover:text-[#4f8e38] transition-colors mb-8 group"
        >
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Image and Links */}
            <div className="space-y-8">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <Image
                  src={project.backgroundImg}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={project.projectURL} 
                  target="_blank"
                  className="px-8 py-3 bg-[#4f8e38] text-white rounded-full font-bold shadow-lg hover:bg-[#3d6e2b] transition-all flex items-center gap-2 hover:scale-105"
                >
                  <FaExternalLinkAlt /> Live Demo
                </Link>
                {project.githubURL && (
                  <Link 
                    href={project.githubURL} 
                    target="_blank"
                    className="px-8 py-3 bg-[#2d2d2d] text-white rounded-full font-bold shadow-lg hover:bg-[#3d3d3d] transition-all border border-white/10 flex items-center gap-2 hover:scale-105"
                  >
                    <FaGithub /> Source Code
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="space-y-8">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-6xl font-extrabold text-white mb-4"
                >
                  {project.title}
                </motion.h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#4f8e38]">Overview</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.longDesc}
                </p>
              </div>

              {project.features && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#4f8e38]">Key Features</h3>
                  <ul className="grid gap-4">
                    {project.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4f8e38] shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;

"use client";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { HiOutlineArrowLeft } from "react-icons/hi";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetails from "@/components/projects/ProjectDetails";

const ProjectPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen pt-24 pb-12 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link
          href="/#showcase"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
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
            <ProjectHero
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectURL={project.projectURL}
              githubURL={project.githubURL}
              isLive={project.isLive}
            />

            <ProjectDetails
              title={project.title}
              techStack={project.techStack}
              longDesc={project.longDesc}
              features={project.features}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;

"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import TechStack from "./TechStack";
import ProjectFeatureList from "./ProjectFeatureList";

interface ProjectDetailsProps {
  title: string;
  techStack: string[];
  longDesc: string;
  features?: string[];
}

const ProjectDetails: FC<ProjectDetailsProps> = ({
  title,
  techStack,
  longDesc,
  features,
}) => {
  return (
    <div className="space-y-8">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-foreground mb-4"
        >
          {title}
        </motion.h1>
        <TechStack techStack={techStack} />
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-primary">Overview</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {longDesc}
        </p>
      </div>

      {features && features.length > 0 && (
        <ProjectFeatureList features={features} />
      )}
    </div>
  );
};

export default ProjectDetails;

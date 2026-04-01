"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface ProjectFeatureListProps {
  features: string[];
}

const ProjectFeatureList: FC<ProjectFeatureListProps> = ({ features }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-primary">Key Features</h3>
      <ul className="grid gap-4">
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="flex items-start gap-3 text-muted-foreground"
          >
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFeatureList;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  period,
  description,
  icon: Icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-3xl bg-card border border-border shadow-xl shadow-black/5 hover:border-primary/50 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
        <Icon size={80} className="text-primary" />
      </div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <Icon size={24} className="text-primary" />
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {institution}
        </h3>
        <p className="text-primary font-semibold mb-4 leading-tight">{degree}</p>
        
        <div className="inline-block px-3 py-1 rounded-full bg-accent text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
          {period}
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
    </motion.div>
  );
};

export default EducationCard;

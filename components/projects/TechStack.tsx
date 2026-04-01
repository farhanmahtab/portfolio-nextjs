import React, { FC } from "react";

interface TechStackProps {
  techStack: string[];
}

const TechStack: FC<TechStackProps> = ({ techStack }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-accent border border-border rounded-full text-sm text-muted-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;

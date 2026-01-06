"use client";

import React from "react";
import SkillCard from "./SkillCard";
import type { StaticImageData } from "next/image";
import IMAGE_ASSETS from "@/lib/imageAssets";

interface Skill {
  readonly id: string;
  readonly title: string;
  readonly icon: StaticImageData;
}

interface SkillCategory {
  readonly title: string;
  readonly skills: readonly Skill[];
}

const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { id: "cpp", title: "CPP", icon: IMAGE_ASSETS.cpp },
      { id: "java", title: "Java", icon: IMAGE_ASSETS.java },
      { id: "javascript", title: "JavaScript", icon: IMAGE_ASSETS.javaScript },
      { id: "ruby", title: "Ruby", icon: IMAGE_ASSETS.ruby },
      { id: "python", title: "Python", icon: IMAGE_ASSETS.python },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { id: "html", title: "HTML", icon: IMAGE_ASSETS.html },
      { id: "css", title: "CSS", icon: IMAGE_ASSETS.css },
      { id: "react", title: "React", icon: IMAGE_ASSETS.react },
      { id: "nextjs", title: "NextJS", icon: IMAGE_ASSETS.nextjs },
    ],
  },
  {
    title: "Backend",
    skills: [
      { id: "nodejs", title: "NodeJS", icon: IMAGE_ASSETS.nodejs },
      { id: "rails", title: "Rails", icon: IMAGE_ASSETS.rails },
      { id: "go", title: "Go", icon: IMAGE_ASSETS.go },
    ],
  },
  {
    title: "Database",
    skills: [
      { id: "mongodb", title: "MongoDB", icon: IMAGE_ASSETS.mongodb },
      { id: "mysql", title: "mySQL", icon: IMAGE_ASSETS.mysql },
      { id: "postgresql", title: "PostgreSQL", icon: IMAGE_ASSETS.postgresql },
      { id: "sqlserver", title: "SQL Server", icon: IMAGE_ASSETS.sqlServer },
    ],
  },
] as const;

interface SkillCategorySectionProps {
  readonly title: string;
  readonly skills: readonly Skill[];
}

const SkillCategorySection: React.FC<SkillCategorySectionProps> = ({
  title,
  skills,
}): React.ReactElement => (
  <>
    <div>
      <p className="py-4 text-green-200 text-xl font-semibold">{title}</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-green-200 mb-8">
      {skills.map((skill) => (
        <SkillCard key={skill.id} title={skill.title} background={skill.icon} />
      ))}
    </div>
  </>
);

const Skills: React.FC = (): React.ReactElement => {
  return (
    <section id="skills" className="w-full lg:h-screen p-2 mt-6">
      <div className="max-w-310 m-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#4f8e38]">
          Skills
        </p>
        <h2 className="py-4 text-green-200 text-4xl font-bold">
          Things I can do
        </h2>
        {SKILL_CATEGORIES.map((category) => (
          <SkillCategorySection
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

"use client";

import React from "react";
import SkillCard from "./SkillCard";
import type { StaticImageData } from "next/image";

import cpp from "../../public/asset/cpp.png";
import java from "../../public/asset/java.png";
import javaScript from "../../public/asset/js.png";
import html from "../../public/asset/html.png";
import css from "../../public/asset/css-3.png";
import react from "../../public/asset/react.png";
// import vue from "../../public/asset/vue.png";
import nextjs from "../../public/asset/nextjs.png";
import nodejs from "../../public/asset/nodejs.png";
import mongodb from "../../public/asset/mongoDb.png";
import sqlServer from "../../public/asset/sql-server.png";
import postgresql from "../../public/asset/postgresql.png";

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
      { id: "cpp", title: "CPP", icon: cpp },
      { id: "java", title: "Java", icon: java },
      { id: "javascript", title: "JavaScript", icon: javaScript },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { id: "html", title: "HTML", icon: html },
      { id: "css", title: "CSS", icon: css },
      { id: "react", title: "React", icon: react },
      // { id: "vue", title: "Vue", icon: vue },
      { id: "nextjs", title: "NextJS", icon: nextjs },
    ],
  },
  {
    title: "Backend",
    skills: [{ id: "nodejs", title: "NodeJS", icon: nodejs }],
  },
  {
    title: "Database",
    skills: [
      { id: "mongodb", title: "MongoDB", icon: mongodb },
      { id: "mysql", title: "mySQL", icon: sqlServer },
      { id: "postgresql", title: "PostgreSQL", icon: postgresql },
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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-green-200 mb-8">
      {skills.map((skill) => (
        <SkillCard key={skill.id} title={skill.title} background={skill.icon} />
      ))}
    </div>
  </>
);

const Skills: React.FC = (): React.ReactElement => {
  return (
    <section id="skills" className="w-full lg:h-screen p-2 mt-6 mb-4">
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

import React, { FC } from "react";
import ExperienceItem from "./ExperienceItem";

const Experience: FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "BizMotion Ltd",
      period: "Oct 2025 - Current",
      achievements: [
        "Designed and developed a full-stack web application using Ruby on Rails and Next.js to help users estimate car resale profit and identify optimal selling time.",
        "Processed and analyzed large-scale vehicle datasets for pricing, depreciation trends, and market insights.",
        "Built a robust REST API layer backed by PostgreSQL, optimizing queries for performance and scalability.",
        "Collaborated closely with product and frontend teams to deliver end-to-end features.",
      ],
    },
  ];

  return (
    <div id="experience" className="w-full my-5 mt-12 py-12">
      <div className="max-w-310 mx-auto mt-10 px-2 pt-20">
        <p className="text-xl font-semibold tracking-widest uppercase text-theme">
          Experience
        </p>
        <h2 className="py-2 tracking-widest text-green-200">
          Where I&#39;ve Worked
        </h2>
      </div>

      <div className="max-w-310 mx-auto px-2 py-10 lg:mx-20">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            achievements={exp.achievements}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;

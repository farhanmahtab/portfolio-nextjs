import React, { FC } from "react";
import ExperienceItem from "./ExperienceItem";

const Experience: FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "BizMotion Limited",
      period: "Oct 2025 - Current",
      achievements: [
        "Designed and developed a full-stack web application using Ruby on Rails and Next.js to help users estimate car resale profit and identify optimal selling time.",
        "Processed and analyzed large-scale vehicle datasets for pricing, depreciation trends, and market insights.",
        "Built a robust REST API layer backed by PostgreSQL, optimizing queries for performance and scalability.",
        "Collaborated closely with product and frontend teams to deliver end-to-end features.",
      ],
    },
    {
      title: "Software Engineer I / Associate Team Lead ",
      company: "Shellbeehaken Limited",
      period: "Jan 2025 - Oct 2025",
      achievements: [
        "Designed and implemented backend systems for three production applications serving client requirements.",
        "Developed payment disbursement systems using batch processing with AWS Lambda, ensuring reliability and fault tolerance.",
        "Worked on microservices and distributed systems, improving system modularity and scalability.",
        "Assisted in technical decision-making and code reviews as an associate team lead.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Shellbeehaken Limited",
      period: "Aug 2023 - Dec 2024",
      achievements: [
        "Developed real-time messaging systems using Socket.IO and Redis across three projects.",
        "Built secure authentication and authorization systems.",
        "Designed and maintained RESTful APIs and frontend features for applications serving thousands of active users.",
        "Improved system performance by implementing server-side and client-side caching.",
        "Refactored codebases to improve maintainability and enforce clean coding standards.",
        "Mentored interns and junior engineers during onboarding and project work.",
      ],
    },
    {
      title: "Intern Software Engineer",
      company: "Shellbeehaken Limited",
      period: "Feb 2023 - Aug 2023",
      achievements: [
        "Gained hands-on experience with Next.js, React, Express, and MongoDB.",
        "Developed full-stack modules for two projects and contributed to maintaining a legacy system.",
        "Collaborated with senior engineers to deliver production features.",
      ],
    },
  ];

  return (
    <div id="experience" className="w-full mt-12">
      <div className="max-w-310 mx-auto mt-10 px-2">
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

"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";
import EducationCard from "./EducationCard";

const EDUCATION_DATA = [
  {
    institution: "Shahjalal University of Science and Technology , Sylhet",
    degree: "B.Sc. in Software Engineering",
    period: "2018 - 2023",
    description: "Focused on core computing principles, software architecture, and advanced web technologies. Graduated with a CGPA of 3.73.",
    icon: GraduationCap,
  },
  {
    institution: "Notre Dame College, Dhaka",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2016 - 2018",
    description: "Specialized in Science. Developed a strong foundation in Mathematics, Physics, and analytical problem-solving.",
    icon: School,
  },
  {
    institution: "Rani Bilashmoni Govt. Boys high School, Gazipur",
    degree: "Secondary School Certificate (SSC)",
    period: "2011 - 2016",
    description: "Completed secondary education with focused studies in basic sciences and information technology.",
    icon: BookOpen,
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full py-24 bg-background/50 mb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
          >
            Education
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EDUCATION_DATA.map((edu, index) => (
            <EducationCard
              key={index}
              {...edu}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

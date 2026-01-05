import React, { FC } from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  achievements,
}) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-theme hover:border-green-400 transition-colors duration-300">
      <div className="absolute -left-2.25 top-0 w-4 h-4 bg-theme rounded-full border-4 border-white dark:border-[#0a0a0a]" />
      <div className="space-y-3 hover:text-green-400">
        <div className="flex items-end width-full justify-between">
          <div className="flex-col">
            <h3 className="text-xl font-bold text-theme">{title}</h3>
            <p className="text-theme font-semibold">{company}</p>
          </div>
          <div>
            <p className="text-sm text-[#4f8e38]dark:text-gray-400 ">
              {period}
            </p>
          </div>
        </div>

        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
            >
              <span className="text-theme font-bold mt-1">●</span>
              <span className="leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;

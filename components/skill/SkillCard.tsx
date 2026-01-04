"use client";

import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface SkillCardProps {
  readonly title: string;
  readonly background: StaticImageData | string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  background,
}): React.ReactElement => {
  return (
    <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200 transition-transform cursor-pointer">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            className="w-full h-auto m-auto bg-white rounded-lg"
            src={background}
            alt={`${title} icon`}
            width={100}
            height={100}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-center text-white font-semibold text-lg">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

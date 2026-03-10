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
    <div className="p-4 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-black/5 border border-border transition-transform cursor-pointer bg-card">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            className="w-full h-auto m-auto bg-white/10 p-1 rounded-lg"
            src={background}
            alt={`${title} icon`}
            width={60}
            height={60}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-center text-foreground font-semibold text-lg">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

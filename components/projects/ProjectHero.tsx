"use client";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectHeroProps {
  title: string;
  backgroundImg: StaticImageData;
  projectURL: string;
  githubURL?: string;
  isLive?: boolean;
}

const ProjectHero: FC<ProjectHeroProps> = ({
  title,
  backgroundImg,
  projectURL,
  githubURL,
  isLive,
}) => {
  return (
    <div className="space-y-8">
      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/5 border border-border">
        <Image
          src={backgroundImg}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      {isLive && (
        <div className="flex flex-wrap gap-4">
          <Link
            href={projectURL}
            target="_blank"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-2 hover:scale-105"
          >
            <FaExternalLinkAlt /> Live Demo
          </Link>
          {githubURL && (
            <Link
              href={githubURL}
              target="_blank"
              className="px-8 py-3 bg-accent text-foreground rounded-full font-bold shadow-lg hover:bg-accent/80 transition-all border border-border flex items-center gap-2 hover:scale-105"
            >
              <FaGithub /> Source Code
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectHero;

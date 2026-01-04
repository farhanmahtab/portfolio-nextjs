"use client";

import React from "react";
import Image from "next/image";
import img from "../../public/asset/img.jpg";
import EXTERNAL_LINKS from "@/lib/constants/ExternalLinks";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
}): React.ReactElement => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 hover:text-green-600 transition-colors duration-300"
  >
    {children}
  </a>
);

export default function About() {
  return (
    <section
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto w-full md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#4f8e38]">
            About
          </p>
          <h2 className="py-4 text-green-200 text-4xl font-bold">Who I Am.</h2>

          <p className="py-2 text-green-100 font-semibold">Bio Intro</p>

          <p className="py-2 text-green-100 leading-relaxed">
            I am an undergrad student, majoring in Software Engineering in{" "}
            <ExternalLink href={EXTERNAL_LINKS.university.href}>
              {EXTERNAL_LINKS.university.text}
            </ExternalLink>
            . I am pursuing a career in the computer science field.
          </p>

          <p className="py-2 text-green-100 leading-relaxed">
            I am interested in the field of{" "}
            <ExternalLink href={EXTERNAL_LINKS.machineLearning.href}>
              {EXTERNAL_LINKS.machineLearning.text}
            </ExternalLink>
            ,{" "}
            <ExternalLink href={EXTERNAL_LINKS.dataScience.href}>
              {EXTERNAL_LINKS.dataScience.text}
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink href={EXTERNAL_LINKS.cloudComputing.href}>
              {EXTERNAL_LINKS.cloudComputing.text}
            </ExternalLink>
            .
          </p>

          <p className="py-2 text-green-100 leading-relaxed">
            My hobbies are coin collecting, gardening, playing games, and
            reading comics.
          </p>
        </div>

        <div className="relative h-auto w-full mx-auto py-0 shadow-md mb-3 shadow-yellow-200 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 transition-transform">
          <Image
            className="rounded-xl object-cover"
            src={img}
            alt="Farhan Mahtab profile picture"
            priority
          />
        </div>
      </div>
    </section>
  );
}

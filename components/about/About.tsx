"use client";

import React from "react";
import Image from "next/image";
import profileImage from "../../public/asset/profile_image.jpeg";
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
      className="w-full p-2 flex items-center min-h-screen pb-12"
    >
      <div className="max-w-310 m-auto w-full md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-theme">
            About Me
          </p>
          <h2 className="py-4 text-green-200 text-4xl font-bold">Who I Am.</h2>

          <p className="py-2 text-green-100 leading-relaxed">
            I am a Software Engineer with strong experience building and
            maintaining scalable backend systems and full-stack web applications
            in production environments. I specialize in designing clean,
            reliable APIs, working with relational and NoSQL databases, and
            delivering end-to-end features that balance performance,
            maintainability, and real user impact.
          </p>

          <p className="py-2 text-green-100 leading-relaxed">
            I have hands-on experience across the full software development
            lifecycle, working extensively with technologies such as Ruby on
            Rails, Node.js, Next.js, React, PostgreSQL, MySQL, MongoDB, Redis,
            and AWS Lambda. My work includes building backend services, payment
            disbursement systems, real-time messaging platforms, and data-driven
            applications that process large datasets efficiently.
          </p>

          <p className="py-2 text-green-100 leading-relaxed">
            Currently, I work as a Software Engineer at{" "}
            <ExternalLink href={EXTERNAL_LINKS.bizotion.href}>
              {EXTERNAL_LINKS.bizotion.text}
            </ExternalLink>
            , where I develop full-stack solutions that help users estimate
            vehicle resale value and determine optimal selling times. My
            responsibilities include designing backend architectures, optimizing
            database queries, and collaborating closely with frontend and
            product teams to deliver reliable, user-focused features.
          </p>

          <p className="py-2 text-green-100 leading-relaxed">
            Previously at{" "}
            <ExternalLink href={EXTERNAL_LINKS.shellbeehaken.href}>
              {EXTERNAL_LINKS.shellbeehaken.text}
            </ExternalLink>
            , I progressed from Intern Software Engineer to Associate Software
            Engineer and later Software Engineer I / Associate Team Lead. During
            this time, I played a key role in developing multiple production
            systems, including microservices-based architectures, real-time
            communication features using Socket.IO and Redis, and backend
            systems supporting thousands of active users. I also contributed to
            system performance improvements through caching strategies and
            helped mentor interns and junior engineers.
          </p>

          <p className="py-2 text-green-100 leading-relaxed">
            Beyond my professional work, I have a strong foundation in
            problem-solving and algorithms, having solved over 500 problems
            across platforms such as Codeforces, LeetCode, and HackerRank. This
            background influences my structured approach to debugging,
            optimization, and system design.
          </p>

          <p className="py-2 text-green-100 leading-relaxed">
            I hold a B.Sc. in Software Engineering from{" "}
            <ExternalLink href={EXTERNAL_LINKS.university.href}>
              {EXTERNAL_LINKS.university.text}
            </ExternalLink>
            , with a CGPA of 3.73. I am driven by an interest in software
            architecture, clean code practices, and building systems that teams
            can confidently scale and maintain over time. I value collaboration,
            thoughtful engineering decisions, and creating technology that
            delivers long-term value.
          </p>
        </div>

        <div className="col-span-1 flex items-start justify-center pt-12">
          <div className="relative h-140 w-100 shadow-md shadow-yellow-200 rounded-xl overflow-hidden shrink-0 hover:scale-105 ease-in duration-300 transition-transform">
            <Image
              className="rounded-xl object-cover w-full h-full"
              src={profileImage}
              alt="Farhan Mahtab profile picture"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

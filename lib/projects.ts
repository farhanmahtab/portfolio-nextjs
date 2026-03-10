import IMAGE_ASSETS from "./imageAssets";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  techStack: string[];
  backgroundImg: StaticImageData;
  projectURL: string;
  githubURL?: string;
  features?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "cypress",
    title: "Cypress",
    shortDesc: "Ruby on Rails, NextJs, TailwindCSS, RSpec and PostgreSQL",
    longDesc: "A comprehensive business management platform designed for efficiency and scalability. It features a robust backend built with Ruby on Rails and a modern, responsive frontend using Next.js and TailwindCSS.",
    techStack: ["Ruby on Rails", "Next.js", "TailwindCSS", "RSpec", "PostgreSQL"],
    backgroundImg: IMAGE_ASSETS.cypress,
    projectURL: "https://cypress.bizmotionapp.com/",
    features: [
      "User authentication and role-based access control",
      "Real-time data visualization and reporting",
      "Integrated payment processing system",
      "Comprehensive API for mobile and third-party integrations"
    ]
  },
  {
    id: "kriyakarak",
    title: "Kriyakarak",
    shortDesc: "React, NodeJS, Express, MongoDB, AWS, SSLCommerce",
    longDesc: "A specialized platform for managing traditional services and logistics. Built with the MERN stack, it leverages AWS for reliable hosting and SSLCommerce for secure transactions.",
    techStack: ["React", "NodeJS", "Express", "MongoDB", "AWS", "SSLCommerce"],
    backgroundImg: IMAGE_ASSETS.kriyakarak,
    projectURL: "https://kriyakarak.com/",
    features: [
      "Dynamic service booking engine",
      "Integrated vendor management dashboard",
      "Automated notification system (Email/SMS)",
      "Secure multi-gateway payment integration"
    ]
  },
  {
    id: "mapage-ec",
    title: "Mapage EC",
    shortDesc: "NextJS, React, NodeJS, Express and MongoDB",
    longDesc: "An e-commerce solution providing a seamless shopping experience. It focuses on performance and user engagement with a modern tech stack.",
    techStack: ["Next.js", "React", "NodeJS", "Express", "MongoDB"],
    backgroundImg: IMAGE_ASSETS.mapageEc,
    projectURL: "https://shellbeehaken.com/portfolio/1",
    features: [
      "Highly optimized product search and filtering",
      "Responsive shopping cart and checkout flow",
      "Admin panel for inventory and order management",
      "SEO-friendly server-side rendering with Next.js"
    ]
  },
  {
    id: "mapage-user",
    title: "Mapage User",
    shortDesc: "NextJS, React, NodeJS, Express and MongoDB",
    longDesc: "A user-centric portal for the Mapage ecosystem, allowing users to manage their profiles, orders, and preferences.",
    techStack: ["Next.js", "React", "NodeJS", "Express", "MongoDB"],
    backgroundImg: IMAGE_ASSETS.mapageUser,
    projectURL: "https://shellbeehaken.com/portfolio/2",
  },
  {
    id: "mapage-space",
    title: "Mapage Space Management",
    shortDesc: "NextJS, React, NodeJS, Express and MongoDB",
    longDesc: "A sophisticated tool for managing physical and digital spaces within the Mapage network.",
    techStack: ["Next.js", "React", "NodeJS", "Express", "MongoDB"],
    backgroundImg: IMAGE_ASSETS.mapageSpace,
    projectURL: "https://shellbeehaken.com/portfolio/4",
  },
  {
    id: "iict-website",
    title: "IICT Website",
    shortDesc: "NextJs, TailwindCSS, NodeJS, Cloudinary and MongoDB",
    longDesc: "The official website for the Institute of Information and Communication Technology (IICT) at SUST. It features dynamic content management and a modern UI.",
    techStack: ["Next.js", "TailwindCSS", "NodeJS", "Cloudinary", "MongoDB"],
    backgroundImg: IMAGE_ASSETS.iict,
    projectURL: "https://github.com/Fahimefto/iict-sust-backend",
    githubURL: "https://github.com/Fahimefto/iict-sust-backend",
    features: [
      "Dynamic news and event announcement system",
      "Faculty and student directory with search",
      "Resource management for academic materials",
      "Media gallery integrated with Cloudinary"
    ]
  },
];

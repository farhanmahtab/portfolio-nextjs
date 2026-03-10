"use client";
import Link from "next/link";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-7xl w-full h-full mx-auto p-2 flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-gray-200 uppercase">
            Let&apos;s build something new together
          </p>
          <h1 className="py-4 text-gray-200 text-5xl md:text-6xl font-extrabold tracking-tight">
            Hi, I&apos;m <span className="text-[#4f8e38]">Mahi</span>
          </h1>
          <h1 className="py-2 text-4xl md:text-5xl text-gray-200 font-bold">
            A{" "}
            <span className="text-[#4f8e38]">
              Full-Stack
            </span>{" "}
            Web Developer
          </h1>
          <p className="py-6 text-gray-300 max-w-[80%] md:max-w-[70%] m-auto text-lg leading-relaxed">
            Software Engineer with hands-on experience designing and building
            scalable backend systems and full-stack web applications. Strong
            expertise in Ruby on Rails, Next.js, PostgreSQL, and distributed
            systems. Passionate about software architecture, clean code, and system design.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-8">
            <Link 
              href="/farhan_mahi_resume.pdf" 
              target="_blank" 
              className="px-8 py-3 bg-[#4f8e38] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#3d6e2b] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              download
            >
              Download CV
            </Link>
            
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-full shadow-lg shadow-[#1a1a1a] p-4 cursor-pointer hover:scale-110 hover:text-[#4f8e38] ease-in duration-300 bg-[#2d2d2d]">
                <Link href="https://www.linkedin.com/in/farhan-mahtab-mahi-72037320a/">
                  <FaLinkedinIn size={20} />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-[#1a1a1a] p-4 cursor-pointer hover:scale-110 hover:text-[#4f8e38] ease-in duration-300 bg-[#2d2d2d]">
                <Link href="https://github.com/farhanmahtab">
                  <FaGithub size={20} />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-[#1a1a1a] p-4 cursor-pointer hover:scale-110 hover:text-[#4f8e38] ease-in duration-300 bg-[#2d2d2d]">
                <Link href="mailto:farhan.mahi1999@gmail.com">
                  <AiOutlineMail size={20} />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-[#1a1a1a] p-4 cursor-pointer hover:scale-110 hover:text-[#4f8e38] ease-in duration-300 bg-[#2d2d2d]">
                <Link href="https://www.facebook.com/farhan.mahtab.56">
                  <AiFillFacebook size={20} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

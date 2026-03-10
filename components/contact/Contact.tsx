"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="w-full py-24 pb-12">
      <div className="max-w-7xl m-auto px-4 w-full text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold tracking-widest uppercase text-[#4f8e38]"
        >
          Contact
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="py-4 text-4xl md:text-5xl font-extrabold text-white"
        >
          Get In Touch
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-[#2d2d2d] rounded-3xl p-8 md:p-16 shadow-2xl shadow-black/50 border border-white/10 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-white">Farhan Mahtab Mahi</h2>
            <p className="text-xl text-[#4f8e38] font-semibold -mt-4">
              Fullstack Web Developer
            </p>
            <p className="text-gray-300 text-lg max-w-2xl text-center leading-relaxed">
              I am passionate about building high-quality, scalable web applications and 
              always looking for new opportunities to learn and grow. 
              Available for freelance and permanent roles.
            </p>

            <div className="w-full h-px bg-white/10 my-4" />

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link 
                href="https://www.linkedin.com/in/farhan-mahtab-mahi-72037320a/" 
                target="_blank"
                className="flex items-center gap-3 px-6 py-3 bg-[#4f8e38] text-white rounded-full font-bold hover:bg-[#3d6e2b] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#4f8e38]/20"
              >
                <FaLinkedinIn size={20} /> LinkedIn
              </Link>
              <Link 
                href="https://github.com/farhanmahtab" 
                target="_blank"
                className="flex items-center gap-3 px-6 py-3 bg-[#1a1a1a] text-white rounded-full font-bold border border-white/10 hover:bg-[#252525] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
              >
                <FaGithub size={20} /> GitHub
              </Link>
              <Link 
                href="mailto:farhan.mahi1999@gmail.com" 
                className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
              >
                <AiOutlineMail size={20} /> Email Me
              </Link>
              <Link 
                href="https://www.facebook.com/farhan.mahtab.56" 
                target="_blank"
                className="flex items-center gap-3 px-6 py-3 bg-[#1877F2] text-white rounded-full font-bold hover:bg-[#166fe5] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
              >
                <AiFillFacebook size={20} /> Facebook
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-24">
          <Link href="/home">
            <motion.div 
              whileHover={{ y: -5 }}
              className="rounded-full bg-[#2d2d2d] p-6 cursor-pointer shadow-xl shadow-black/50 border border-white/10"
            >
              <HiOutlineChevronDoubleUp size={30} className="text-[#4f8e38]" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

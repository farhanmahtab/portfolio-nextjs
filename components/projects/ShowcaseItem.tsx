"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ShowcaseItemProps {
  id: string;
  title: string;
  backgroundImg: StaticImageData;
  desc: string;
}

const ShowcaseItem: FC<ShowcaseItemProps> = ({
  id,
  title,
  backgroundImg,
  desc,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#1a1a1a] rounded-2xl overflow-hidden group bg-[#2d2d2d]"
    >
      <Image
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20"
        src={backgroundImg}
        alt={title}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 bg-black/40 backdrop-blur-sm">
        <h3 className="text-3xl font-bold tracking-tight text-white text-center mb-2">
          {title}
        </h3>
        <p className="text-gray-200 text-center mb-6 line-clamp-2">{desc}</p>
        <Link href={`/projects/${id}`}>
          <p className="px-8 py-3 bg-[#4f8e38] text-white rounded-full font-bold text-lg cursor-pointer transform transition hover:scale-105 active:scale-95 shadow-lg">
            More info
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default ShowcaseItem;

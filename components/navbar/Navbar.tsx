"use client";

import NAV_LINKS from "@/lib/constants/NavLinks";
import SOCIAL_LINKS from "@/lib/constants/SocialLinks";
import IMAGE_ASSETS from "@/lib/imageAssets";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../logo/Logo";

const SCROLL_THRESHOLD = 90;
const NAV_BG_COLOR = "#1d1d1f";

const DesktopNav = () => (
  <ul className="hidden md:flex gap-10">
    {NAV_LINKS.map(({ href, label }) => (
      <li key={href}>
        <Link
          href={href}
          className="text-sm uppercase hover:border-b-2 border-green-400 transition-all duration-300"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => (
  <>
    {isOpen && (
      <div
        className="md:hidden fixed inset-0 bg-white/20 z-40"
        onClick={onClose}
      />
    )}

    <div
      className={`fixed left-0 top-0 w-[75%] sm:w-[65%] h-screen bg-[#1d1d1f] p-10 transform transition-transform duration-500 ease-in z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex w-full items-center justify-between mb-4">
        <Link href="/home" onClick={onClose}>
          {/* <Image
            className="shadow-sm shadow-[#585c58] cursor-pointer"
            src={IMAGE_ASSETS.logoSvg}
            alt="Logo"
            width={85}
            height={83}
          /> */}
        </Link>
        <button
          onClick={onClose}
          className="rounded-full shadow-lg shadow-[#585c58] p-3 cursor-pointer hover:scale-110 transition-transform"
          aria-label="Close menu"
        >
          <AiOutlineClose size={25} />
        </button>
      </div>

      <div className="border-b border-[#585c58] my-4">
        <p className="w-[85%] md:w-[90%] py-4 text-sm">
          From dust I have come, Dust shall I be.
        </p>
      </div>

      <nav className="py-4">
        <ul className="uppercase space-y-4">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onClose}
                className="text-md hover:text-green-400 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-10 left-10 right-10">
        <p className="py-4 tracking-widest text-[#bea12f] text-sm font-semibold">
          Let&apos;s Connect
        </p>
        <div className="flex items-center justify-between gap-4">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full shadow-lg shadow-[#585c58] p-3 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </>
);

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY >= SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: NAV_BG_COLOR }}
      className={`fixed w-full h-20 z-100 transition-shadow duration-300 ${
        hasShadow ? "shadow-sm shadow-green-200" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/" className="shrink-0">
          {/* <Image
            src={IMAGE_ASSETS.logoSvg}
            alt="Logo"
            width={100}
            height={100}
            priority
          /> */}
        </Link>

        <DesktopNav />

        <button
          onClick={() => setIsNavOpen(true)}
          className="md:hidden cursor-pointer hover:scale-110 transition-transform"
          aria-label="Open menu"
          aria-expanded={isNavOpen}
        >
          <AiOutlineMenu size={25} />
        </button>
      </div>

      <MobileNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </header>
  );
};

export default Navbar;

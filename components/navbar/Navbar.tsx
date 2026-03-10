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
          className="text-sm font-bold uppercase hover:text-primary text-foreground transition-all duration-300 tracking-widest"
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
        className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
        onClick={onClose}
      />
    )}

    <div
      className={`fixed right-0 top-0 w-[85%] sm:w-[50%] h-screen bg-background p-10 transform transition-transform duration-500 ease-in-out z-[120] border-l border-border ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex w-full items-center justify-between mb-8">
        <Link href="/home" onClick={onClose}>
          <h1 className="text-2xl font-bold text-primary tracking-tight">MAHI</h1>
        </Link>
        <button
          onClick={onClose}
          className="rounded-full bg-accent p-4 cursor-pointer hover:scale-110 shadow-lg border border-border text-foreground transition-all"
          aria-label="Close menu"
        >
          <AiOutlineClose size={25} />
        </button>
      </div>

      <div className="border-b border-border my-8">
        <p className="w-[85%] md:w-[90%] py-4 text-muted-foreground italic font-serif">
          &quot;Building digital experiences that matter.&quot;
        </p>
      </div>

      <nav className="py-8">
        <ul className="uppercase space-y-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onClose}
                className="text-xl font-bold tracking-widest hover:text-primary text-foreground transition-all flex items-center justify-between group"
              >
                {label}
                <div className="w-0 h-0.5 bg-primary group-hover:w-8 transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-12 left-10 right-10">
        <p className="py-4 tracking-[0.2em] text-primary text-xs font-bold uppercase mb-4">
          Connect
        </p>
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full bg-accent p-4 cursor-pointer hover:scale-110 hover:text-primary text-muted-foreground transition-all border border-border shadow-lg"
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </>
);

import { ThemeToggle } from "./ThemeToggle";

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
      className={`fixed w-full h-20 z-[100] transition-all duration-300 ${
        hasShadow 
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 max-w-7xl mx-auto">
        <Link href="/" className="shrink-0">
          {/* <h1 className="text-2xl font-bold text-primary tracking-tight hover:scale-105 transition-transform">MAHI</h1> */}
          {/*add logo */}
        </Link>

        <div className="flex items-center gap-8">
          <DesktopNav />
          <ThemeToggle />
          <button
            onClick={() => setIsNavOpen(true)}
            className="md:hidden cursor-pointer hover:scale-110 transition-transform p-2 text-foreground"
            aria-label="Open menu"
            aria-expanded={isNavOpen}
          >
            <AiOutlineMenu size={25} />
          </button>
        </div>
      </div>

      <MobileNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </header>
  );
};

export default Navbar;

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import uplandLogo from "@/public/logoBg.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Define section breakpoints based on your layout
      // Hero section (dark) - 0 to 100vh
      // TrustedBy section (light) - 100vh to 200vh
      // WhyTrust section (light) - 200vh to 300vh
      // CoreServices section (dark) - 300vh to 400vh
      // CTA section (dark) - 400vh+

      const sectionIndex = Math.floor(scrollY / windowHeight);
      const isDark = sectionIndex % 2 === 0; // Even sections are dark, odd are light

      setIsDarkSection(isDark);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-4 z-50 w-full px-2 sm:px-4 md:px-8 bg-transparent">
      <div
        ref={menuRef}
        className={`max-w-5xl w-full mx-auto mt-2 mb-8 rounded-2xl border backdrop-blur-xl shadow-2xl px-2 sm:px-6 md:pr-8 md:pl-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 transition-all duration-500 ${
          isDarkSection
            ? "border-white/30 bg-[#132A4D]/80 shadow-[#132A4D]/20"
            : "border-[#132A4D]/20 bg-[#132A4D]/70 shadow-[#132A4D]/10"
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
            tabIndex={0}
            aria-label="Go to homepage"
          >
            <Image
              src={uplandLogo}
              alt="Upland Logo"
              width={100}
              height={100}
              className="!w-32 !h-auto"
            />
          </Link>
          {/* Hamburger for mobile */}
          <button
            className={`sm:hidden flex items-center justify-center p-2 rounded-md border backdrop-blur-sm transition ml-auto ${
              isDarkSection
                ? "border-white/30 bg-white/20 hover:bg-white/30"
                : "border-[#132A4D]/30 bg-[#132A4D]/20 hover:bg-[#132A4D]/30"
            }`}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className={`w-6 h-6 ${
                isDarkSection ? "text-white" : "text-gray-900"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <nav
          className={`${
            menuOpen
              ? "flex flex-col w-full mt-4 gap-4 px-4 py-4 bg-[#132A4D]/90 backdrop-blur-xl rounded-lg border border-white/30 shadow-2xl"
              : "hidden"
          } sm:flex sm:flex-row sm:gap-4 sm:mt-0 sm:px-0 sm:py-0 sm:bg-transparent sm:backdrop-blur-none sm:border-none sm:rounded-none text-sm sm:text-base justify-center sm:justify-end w-full sm:w-auto transition-all duration-300 ${
            isDarkSection ? "text-white/90" : "text-white/90"
          }`}
        >
          <Link
            href="/services"
            className="transition block py-2 sm:py-0 px-2 sm:px-0 rounded-md hover:text-white hover:bg-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="transition block py-2 sm:py-0 px-2 sm:px-0 rounded-md hover:text-white hover:bg-white/10"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition block py-2 sm:py-0 px-2 sm:px-0 rounded-md hover:text-white hover:bg-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

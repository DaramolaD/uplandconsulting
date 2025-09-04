"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-4 z-50 w-full px-2 sm:px-4 md:px-8 bg-transparent">
      <div 
        ref={menuRef}
        className={`max-w-5xl w-full mx-auto mt-2 mb-8 rounded-2xl border backdrop-blur-md shadow-lg px-2 sm:px-6 md:pr-8 md:pl-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 transition-all duration-500 ${
        isDarkSection 
          ? 'border-white/20 bg-white/10' 
          : 'border-gray-300/30 bg-white/60'
      }`}>
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group" tabIndex={0} aria-label="Go to homepage">
            <div className={`w-fit px-2 py-1 font-bold rounded-lg border-2 text-base sm:text-2xl leading-normal group-hover:opacity-80 transition flex items-center justify-center ${
              isDarkSection 
                ? 'text-white border-white/20 bg-[#132A4D]' 
                : 'text-gray-900 border-gray-300/50 bg-white/80'
            }`}>
              <span className="text-center font-bold">U</span>
            </div>
            <span className={`font-semibold text-base sm:text-lg md:text-xl text-center sm:text-left group-hover:underline transition ${
              isDarkSection ? 'text-white' : 'text-gray-900'
            }`}>
              Upland
            </span>
          </Link>
          {/* Hamburger for mobile */}
          <button
            className={`sm:hidden flex items-center justify-center p-2 rounded-md border transition ml-auto ${
              isDarkSection 
                ? 'border-white/20 bg-white/10 hover:bg-white/20' 
                : 'border-gray-300/50 bg-white/60 hover:bg-white/80'
            }`}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className={`w-6 h-6 ${isDarkSection ? 'text-white' : 'text-gray-900'}`}
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
              ? "flex flex-col w-full mt-4 gap-4 px-4 py-4 bg-white/90 backdrop-blur-md rounded-lg border border-white/20"
              : "hidden"
          } sm:flex sm:flex-row sm:gap-4 sm:mt-0 sm:px-0 sm:py-0 sm:bg-transparent sm:backdrop-blur-none sm:border-none sm:rounded-none text-sm sm:text-base justify-center sm:justify-end w-full sm:w-auto transition-all duration-300 ${
            isDarkSection ? 'text-white/80' : 'text-gray-700'
          }`}
        >
          <Link 
            href="/services" 
            className={`transition block py-2 sm:py-0 px-2 sm:px-0 rounded-md ${
              isDarkSection 
                ? 'hover:text-white' 
                : 'hover:text-gray-900'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className={`transition block py-2 sm:py-0 px-2 sm:px-0 rounded-md ${
              isDarkSection 
                ? 'hover:text-white' 
                : 'hover:text-gray-900'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`transition block py-2 sm:py-0 px-2 sm:px-0 rounded-md ${
              isDarkSection 
                ? 'hover:text-white' 
                : 'hover:text-gray-900'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

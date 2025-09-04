'use client';

import { TypewriterText, TypewriterMultiLine } from './index';

export default function TypewriterDemo() {
  return (
    <div className="space-y-12 p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Typewriter Animation Demo
        </h1>
        
        {/* Single line typewriter */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Single Line Typewriter</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <TypewriterText
              text="Welcome to Upland Consulting"
              speed={80}
              delay={500}
              className="text-3xl font-bold text-[#132A4D]"
              showCursor={true}
              cursorChar="|"
            />
          </div>
        </div>

        {/* Multi-line typewriter */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Multi-Line Typewriter</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <TypewriterMultiLine
              lines={[
                "Strategic Consulting Excellence",
                "For High-Stakes Industries",
                "Oil & Gas • Utilities • Public Sector"
              ]}
              speed={60}
              delay={1000}
              className="text-2xl font-bold text-[#132A4D] space-y-2"
              showCursor={true}
              cursorChar="|"
              pauseBetweenLines={800}
            />
          </div>
        </div>

        {/* Fast typewriter */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Fast Typewriter</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <TypewriterText
              text="Fast and responsive typing effect"
              speed={30}
              delay={2000}
              className="text-xl text-gray-700"
              showCursor={true}
              cursorChar="_"
            />
          </div>
        </div>

        {/* Slow typewriter */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Slow Typewriter</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <TypewriterText
              text="Slow and deliberate typing effect"
              speed={150}
              delay={3000}
              className="text-xl text-gray-700"
              showCursor={true}
              cursorChar="█"
            />
          </div>
        </div>

        {/* No cursor typewriter */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">No Cursor Typewriter</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <TypewriterText
              text="Clean typing effect without cursor"
              speed={50}
              delay={4000}
              className="text-xl text-gray-700"
              showCursor={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

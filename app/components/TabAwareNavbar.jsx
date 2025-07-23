// @flow strict
'use client';

import Link from "next/link";
import { useState } from "react";

function Navbar({ activeTab, onTabChange }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'certificates', label: 'CERTIFICATES' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-md bg-[#0d1224]/90 border-b border-gray-800/50 w-full">
      <div className="flex items-center justify-between py-4 px-6 mx-auto max-w-7xl">
        <div className="flex flex-shrink-0 items-center">
          <button
            onClick={() => handleNavClick('hero')}
            className="text-[#16f2b3] text-2xl lg:text-3xl font-black tracking-tight hover:animate-glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg px-2"
          >
            ASAD ALI
          </button>
        </div>

        <ul className="hidden md:flex md:flex-row md:space-x-1 md:items-center" id="navbar-default">
          {navItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => handleNavClick(item.id)}
                className={`
                  block px-3 py-2 no-underline outline-none rounded-lg transition-all duration-300 ease-out
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900
                  ${activeTab === item.id 
                    ? 'bg-[#16f2b3]/20 text-[#16f2b3] shadow-lg shadow-[#16f2b3]/20' 
                    : 'hover:bg-[#16f2b3]/10 text-gray-300 hover:text-[#16f2b3]'
                  }
                `}
              >
                <div className="text-sm font-medium transition-colors duration-300 ease-out">
                  {item.label}
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-[#16f2b3] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-gray-700/50">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full text-left block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-emerald-400
                  ${activeTab === item.id 
                    ? 'bg-[#16f2b3]/20 text-[#16f2b3]' 
                    : 'text-gray-300 hover:bg-[#16f2b3]/10 hover:text-[#16f2b3]'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

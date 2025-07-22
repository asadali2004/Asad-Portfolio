// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-md bg-[#0d1224]/90 border-b border-gray-800/50 w-full">
      <div className="flex items-center justify-between py-4 px-6 mx-auto max-w-7xl">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-2xl lg:text-3xl font-black tracking-tight hover:animate-glow transition-all duration-300">
            ASAD ALI
          </Link>
        </div>

        <ul className="hidden md:flex md:flex-row md:space-x-1 md:items-center" id="navbar-default">
          <li>
            <Link className="block px-3 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 ease-out hover:bg-[#16f2b3]/10" href="/#about">
              <div className="text-sm font-medium text-gray-300 transition-colors duration-300 ease-out hover:text-[#16f2b3]">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-3 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 ease-out hover:bg-[#16f2b3]/10" href="/#experience">
              <div className="text-sm font-medium text-gray-300 transition-colors duration-300 ease-out hover:text-[#16f2b3]">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-3 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 ease-out hover:bg-[#16f2b3]/10" href="/#skills">
              <div className="text-sm font-medium text-gray-300 transition-colors duration-300 ease-out hover:text-[#16f2b3]">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-3 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 ease-out hover:bg-[#16f2b3]/10" href="/#education">
              <div className="text-sm font-medium text-gray-300 transition-colors duration-300 ease-out hover:text-[#16f2b3]">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-3 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 ease-out hover:bg-[#16f2b3]/10" href="/#certificate">
              <div className="text-sm font-medium text-gray-300 transition-colors duration-300 ease-out hover:text-[#16f2b3]">CERTIFICATES</div>
            </Link>
          </li>
          <li>
            <Link className="block px-3 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 ease-out hover:bg-[#16f2b3]/10" href="/#projects">
              <div className="text-sm font-medium text-gray-300 transition-colors duration-300 ease-out hover:text-[#16f2b3]">PROJECTS</div>
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-[#16f2b3] transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
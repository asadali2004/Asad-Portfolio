// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-gradient-to-br from-slate-900/80 via-emerald-900/60 to-cyan-900/70 backdrop-blur-sm border-emerald-500/30 text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-3 lg:py-5">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs">
            © Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/asadalli/" className="text-emerald-400 hover:text-cyan-400 transition-colors duration-300">Asad Ali</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/asadali2004/Asad-portfolio"
              className="flex items-center gap-2 uppercase hover:text-emerald-400 transition-colors duration-300"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/asadali2004/Asad-portfolio/fork"
              className="flex items-center gap-2 uppercase hover:text-emerald-400 transition-colors duration-300"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
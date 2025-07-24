// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import SectionWrapper from "../../SectionWrapper";

function HeroSection() {
  return (
    <SectionWrapper noPadding>
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900">
        {/* Modern 2025 animated background - simplified for mobile */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/15 to-blue-600/10 md:from-emerald-500/15 md:via-cyan-500/20 md:to-blue-600/15"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-pink-500/5 md:from-orange-500/10 md:to-pink-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/5 via-transparent to-transparent md:from-cyan-400/10"></div>
        
        <Image
          src="/hero.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-15"
        />
        
        {/* Enhanced floating elements with 2025 colors - optimized for mobile */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/15 to-cyan-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-float hidden md:block"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-orange-400/12 to-pink-400/12 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000 hidden md:block"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400/12 to-blue-500/12 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-4000 hidden md:block"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full mix-blend-multiply filter blur-2xl hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-400/8 to-amber-400/8 rounded-full mix-blend-multiply filter blur-2xl hidden lg:block"></div>

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16 gap-y-8 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10 w-full">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 text-sm font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full backdrop-blur-sm">
              👋 Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-4xl font-black leading-tight text-white md:font-black lg:text-[3.5rem] lg:leading-[4rem] xl:text-[4rem] xl:leading-[4.5rem] mb-6">
            <span className="block text-gray-300 text-2xl md:text-3xl lg:text-4xl font-normal mb-2">
              Hello, I&apos;m
            </span>
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
              {personalData.name}
            </span>
            <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl">
              <span className="text-gray-300">Crafting </span>
              <span className="text-emerald-400 font-bold">Digital Solutions</span>
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl text-gray-400 font-normal mt-2">
              Full Stack Developer & DevOps Engineer
            </span>
          </h1>
          

          <div className="my-8 flex items-center gap-6">
            <Link
              href={personalData.github}
              target='_blank'
              className="group p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-400/10 backdrop-blur-sm"
            >
              <BsGithub size={24} className="text-gray-300 group-hover:text-emerald-400 transition-colors duration-300" />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="group p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:bg-cyan-400/10 backdrop-blur-sm"
            >
              <BsLinkedin size={24} className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="group p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-110 hover:bg-orange-400/10 backdrop-blur-sm"
            >
              <SiLeetcode size={24} className="text-gray-300 group-hover:text-orange-400 transition-colors duration-300" />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="group p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:bg-blue-400/10 backdrop-blur-sm"
            >
              <FaXTwitter size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            <button 
              onClick={() => {
                // Try to get the tab change function from parent
                const event = new CustomEvent('changeTab', { detail: 'contact' });
                window.dispatchEvent(event);
              }}
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-600 p-[2px] rounded-xl transition-all duration-300 hover:from-emerald-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <div className="px-6 py-4 bg-slate-900/90 rounded-lg border-none text-center text-sm font-semibold uppercase tracking-wider text-white no-underline transition-all duration-300 ease-out flex items-center gap-2 hover:gap-3 group-hover:bg-gradient-to-r group-hover:from-emerald-500/10 group-hover:to-cyan-600/10">
                <RiContactsFill size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                <span>Let&apos;s Connect</span>
              </div>
            </button>

            <Link 
              className="group relative overflow-hidden flex items-center gap-2 hover:gap-3 rounded-xl bg-gradient-to-r from-orange-400 to-amber-500 px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider text-black no-underline transition-all duration-300 ease-out hover:from-orange-500 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-400/25" 
              role="button" 
              target="_blank" 
              href={personalData.resume}
            >
              <MdDownload size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Download Resume</span>
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 relative">
          {/* Glass morphism container with modern colors */}
          <div className="from-slate-900/90 border-emerald-400/20 relative rounded-2xl border bg-gradient-to-br to-slate-800/90 backdrop-blur-xl shadow-2xl shadow-emerald-500/10">
            <div className="flex flex-row">
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400 to-cyan-500"></div>
              <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>
            <div className="px-6 lg:px-8 py-6">
              <div className="flex flex-row space-x-2">
                <div className="h-4 w-4 rounded-full bg-red-400 animate-pulse"></div>
                <div className="h-4 w-4 rounded-full bg-orange-400 animate-pulse animation-delay-1000"></div>
                <div className="h-4 w-4 rounded-full bg-green-200 animate-pulse animation-delay-2000"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900/50 px-6 lg:px-8 py-6 lg:py-8">
              <code className="font-mono text-sm md:text-base lg:text-lg leading-relaxed">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">Asad Ali</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">Java</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">JavaScript</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">React</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Node.js</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Docker</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">AWS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Kubernetes</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">criticalThinker:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">proactiveLearner:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">collaborativeInnovator:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{'() {'}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">criticalThinker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">proactiveLearner</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                <div><span className="text-gray-400">{`};`}</span></div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
};

export default HeroSection;
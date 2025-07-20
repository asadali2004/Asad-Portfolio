// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Modern background elements with 2025 colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 via-transparent to-cyan-900/5 rounded-3xl"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8 z-10">
        <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md backdrop-blur-sm">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-emerald-500 to-cyan-500"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg text-justify">
              {personalData.description}
        </p>

        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Asad Ali"
            className="rounded-lg transition-all duration-1000  hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
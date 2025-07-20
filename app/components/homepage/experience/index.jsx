// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <section id="experience" className="relative z-50 border-t my-12 lg:my-24 border-emerald-500/30">
      <Image
        src="/section.svg"
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="w-24 h-[2px] bg-gradient-to-r from-emerald-600 to-cyan-600"></span>
          <h2 className="bg-gradient-to-r from-emerald-700 to-cyan-700 w-fit text-white p-2 px-5 text-xl rounded-md backdrop-blur-sm border border-emerald-500/30">
            Experiences
          </h2>
          <span className="w-24 h-[2px] bg-gradient-to-r from-cyan-600 to-emerald-600"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8">
        <div className="flex justify-center items-start">
          <Image
            src="/assets/svg/experience/expBlue.svg"
            alt="Experience Illustration"
            width={400}
            height={400}
            className="w-full h-auto object-contain max-w-[400px]"
          />
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((experience) => (
            <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
              <div className="p-3 relative">
                <Image
                  src="/blur-23.svg"
                  alt="Background Blur"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-[#16f2b3]">
                    {experience.duration}
                  </p>
                </div>
                <div className="flex items-center gap-x-6 px-3 py-5">
                  <BsPersonWorkspace size={36} className="text-violet-500 hover:scale-125 transition-all duration-300" />
                  <div>
                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                      {experience.title}
                    </p>
                    <p className="text-sm sm:text-base">
                      {experience.company}
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

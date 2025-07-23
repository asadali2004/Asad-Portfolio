// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import SectionWrapper from "../../SectionWrapper";

function Education() {
  return (
    <SectionWrapper>
      <section id="education" className="relative z-50 border-t my-12 lg:my-24 border-emerald-500/30">
      <Image
        src="/section.svg"
        alt="Section background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="w-24 h-[2px] bg-gradient-to-r from-emerald-600 to-cyan-600"></span>
          <h2 className="bg-gradient-to-r from-emerald-700 to-cyan-700 w-fit text-white p-2 px-5 text-xl rounded-md backdrop-blur-sm border border-emerald-500/30">
            Education
          </h2>
          <span className="w-24 h-[2px] bg-gradient-to-r from-cyan-600 to-emerald-600"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left side SVG image (not Lottie) */}
          <div className="flex justify-center items-start">
            <div className="flex items-center justify-center w-full h-full min-h-[300px]">
              <Image
                src="/assets/svg/education/eduBlue.svg"
                alt="Education Illustration"
                width={400}
                height={400}
                className="w-full max-w-[400px] h-auto object-contain mx-auto"
              />
            </div>
          </div>

          {/* Right side education cards */}
          <div className="flex flex-col gap-6">
            {educations.map((education) => (
              <GlowCard key={education.id} identifier={`education-${education.id}`}>
                <div className="p-3 relative text-white">
                  <Image
                    src="/blur-23.svg"
                    alt="Card background blur"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">{education.duration}</p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {education.title}
                      </p>
                      <p className="text-sm sm:text-base mb-1">{education.institution}</p>
                      {education.marks && (
                        <p className="text-sm text-emerald-400 font-semibold">
                          Score: {education.marks}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
}

export default Education;

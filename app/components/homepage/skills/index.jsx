// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-emerald-800/30">
      {/* Modern background elements with 2025 colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-cyan-900/15 to-blue-900/10 rounded-3xl"></div>
      <div className="w-[150px] h-[150px] bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl"></div>
      <div className="w-[100px] h-[100px] bg-gradient-to-r from-orange-400/15 to-amber-400/15 rounded-full absolute bottom-10 right-10 filter blur-2xl"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-emerald-500"></span>
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 w-fit text-white p-2 px-5 text-xl rounded-md backdrop-blur-sm">
            Technical Skills
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-cyan-500"></span>
        </div>
      </div>

      {/* Skills Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Programming Languages & Web Technologies */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Programming Languages & Web Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Java', 'Python', 'Javascript', 'Typescript', 'PHP', 'HTML', 'CSS', 'React', 'Node JS'].map((skill, id) => (
              <SkillCard key={id} skill={skill} />
            ))}
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Frameworks & Development Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Tailwind', 'Bootstrap', 'MaterialUI', 'MongoDB', 'MySQL', 'Git', 'Linux', 'Nginx'].map((skill, id) => (
              <SkillCard key={id} skill={skill} />
            ))}
          </div>
        </div>

        {/* Cloud & DevOps Technologies */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Cloud & DevOps Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['AWS', 'Docker', 'Jenkins', 'Terraform', 'Kubernetes', 'Shell Scripting', 'GenAI'].map((skill, id) => (
              <SkillCard key={id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ skill }) {
  const skillImage = skillsImage(skill);
  
  // Define specific colors and better text handling for skills without proper icons
  const getSkillProps = (skill) => {
    const skillMap = {
      'Java': { color: 'from-orange-500 to-red-600', text: 'JAVA' },
      'Python': { color: 'from-blue-500 to-indigo-600', text: 'PY' },
      'Javascript': { color: 'from-yellow-400 to-orange-500', text: 'JS' },
      'HTML': { color: 'from-orange-500 to-red-500', text: 'HTML' },
      'CSS': { color: 'from-blue-400 to-blue-600', text: 'CSS' },
      'React': { color: 'from-cyan-400 to-blue-500', text: 'REACT' },
      'Node JS': { color: 'from-green-500 to-emerald-600', text: 'NODE' },
      'Tailwind': { color: 'from-cyan-300 to-blue-500', text: 'TW' },
      'Bootstrap': { color: 'from-purple-500 to-purple-700', text: 'BS' },
      'MaterialUI': { color: 'from-blue-600 to-indigo-700', text: 'MUI' },
      'Typescript': { color: 'from-blue-500 to-blue-700', text: 'TS' },
      'MongoDB': { color: 'from-green-500 to-green-700', text: 'MONGO' },
      'MySQL': { color: 'from-blue-500 to-cyan-600', text: 'SQL' },
      'PHP': { color: 'from-purple-500 to-indigo-600', text: 'PHP' },
      'Git': { color: 'from-orange-500 to-red-600', text: 'GIT' },
      'API Integration': { color: 'from-pink-500 to-purple-600', text: 'API' },
      'DBMS': { color: 'from-blue-600 to-purple-600', text: 'DBMS' },
      'Linux': { color: 'from-yellow-400 to-orange-500', text: 'LINUX' },
      'AWS': { color: 'from-orange-400 to-yellow-500', text: 'AWS' },
      'Docker': { color: 'from-blue-400 to-cyan-500', text: 'DOCK' },
      'Jenkins': { color: 'from-red-500 to-orange-600', text: 'J' },
      'Terraform': { color: 'from-purple-500 to-indigo-600', text: 'T' },
      'Kubernetes': { color: 'from-blue-500 to-purple-600', text: 'K8S' },
      'Nginx': { color: 'from-green-500 to-teal-600', text: 'NGINX' },
      'Shell Scripting': { color: 'from-gray-600 to-gray-800', text: 'SHELL' },
      'SDLC': { color: 'from-indigo-500 to-purple-600', text: 'SDLC' },
      'Agile Development': { color: 'from-green-500 to-blue-600', text: 'AGILE' },
      'OOPs': { color: 'from-blue-500 to-indigo-600', text: 'OOP' },
      'DSA': { color: 'from-purple-500 to-pink-600', text: 'DSA' },
      'GenAI': { color: 'from-pink-500 to-purple-600', text: 'AI' },
      'Computer Networks': { color: 'from-cyan-500 to-blue-600', text: 'NET' },
    };
    
    return skillMap[skill] || { color: 'from-violet-500 to-pink-500', text: skill.charAt(0).toUpperCase() };
  };
  
  const skillProps = getSkillProps(skill);
  
  return (
    <div className="group relative flex flex-col items-center justify-center p-4 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 via-cyan-900/15 to-slate-900/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 hover:bg-gradient-to-br hover:from-emerald-900/30 hover:via-cyan-900/25 hover:to-slate-900/40 hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer">
      <div className="flex -translate-y-[1px] justify-center absolute top-0 left-0 right-0">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/0 group-hover:via-emerald-400 to-transparent transition-all duration-300" />
        </div>
      </div>
      
      <div className="h-12 w-12 mb-3 flex items-center justify-center">
        {skillImage ? (
          <Image
            src={skillImage.src}
            alt={skill}
            width={48}
            height={48}
            className="h-12 w-12 rounded-lg object-contain group-hover:scale-110 transition-transform duration-300"
            style={{ width: 'auto', height: 'auto', maxWidth: '48px', maxHeight: '48px' }}
          />
        ) : (
          <div className={`w-12 h-12 bg-gradient-to-br ${skillProps.color} rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {skillProps.text}
          </div>
        )}
      </div>
      
      <p className="text-white text-sm font-medium text-center group-hover:text-emerald-300 transition-colors duration-300 leading-tight">
        {skill}
      </p>
    </div>
  );
}

export default Skills;
// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="relative rounded-xl overflow-hidden group smooth-transform hover:scale-[1.02]">
      {/* Glass morphism background with better opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-cyan-900/50 to-slate-900/70 backdrop-blur-xl"></div>
      
      {/* Enhanced border with glow effect */}
      <div className="absolute inset-0 rounded-xl border border-emerald-400/40 group-hover:border-emerald-300/60 smooth-transition shadow-lg shadow-emerald-500/10 group-hover:shadow-emerald-400/20"></div>
      
      {/* Content container with relative positioning */}
      <div className="relative z-10 w-full">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-400 to-cyan-500"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </div>
        
        <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
          <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400 shadow-sm"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400 shadow-sm"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200 shadow-sm"></div>
          </div>
          <p className="text-center ml-3 text-emerald-300 text-base lg:text-xl font-semibold drop-shadow-sm">
            {project.name}
          </p>
        </div>
        
        <div className="overflow-hidden border-t-[2px] border-emerald-400/30 px-4 lg:px-8 py-4 lg:py-8 bg-black/10 backdrop-blur-sm">
          <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
            <div className="blink">
              <span className="mr-2 text-pink-400 font-semibold drop-shadow-sm">const</span>
              <span className="mr-2 text-white font-medium drop-shadow-sm">project</span>
              <span className="mr-2 text-pink-400 font-semibold drop-shadow-sm">=</span>
              <span className="text-gray-300 drop-shadow-sm">{'{'}</span>
            </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white font-medium drop-shadow-sm">name:</span>
            <span className="text-gray-300 drop-shadow-sm">{`'`}</span>
            <span className="text-amber-300 font-medium drop-shadow-sm">{project.name}</span>
            <span className="text-gray-300 drop-shadow-sm">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white font-medium drop-shadow-sm">tools:</span>
            <span className="text-gray-300 drop-shadow-sm">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300 font-medium drop-shadow-sm">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-300 drop-shadow-sm">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-300 drop-shadow-sm">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white font-medium drop-shadow-sm">myRole:</span>
            <span className="text-orange-300 font-medium drop-shadow-sm">{project.role}</span>
            <span className="text-gray-300 drop-shadow-sm">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white font-medium drop-shadow-sm">Description:</span>
            <div className="text-cyan-300 font-medium drop-shadow-sm mt-2 leading-relaxed text-justify">
              {project.description}
            </div>
            <span className="text-gray-300 drop-shadow-sm">,</span>
          </div>
          <div><span className="text-gray-300 drop-shadow-sm">{`};`}</span></div>
        </code>
        
        {/* Action buttons */}
        <div className="px-4 lg:px-8 py-4 bg-black/20 backdrop-blur-sm border-t border-emerald-400/20">
          <div className="flex gap-3 justify-center">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-sm font-medium rounded-lg btn-smooth shadow-lg hover:shadow-emerald-500/25 border border-emerald-400/30"
              >
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-medium rounded-lg btn-smooth shadow-lg hover:shadow-orange-500/25 border border-orange-400/30"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
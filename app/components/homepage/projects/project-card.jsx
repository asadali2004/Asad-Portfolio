// @flow strict

import * as React from 'react';
import { FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="group relative w-full bg-gradient-to-br from-emerald-900/40 via-cyan-900/30 to-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl overflow-hidden hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02]">
      
      {/* Project Header */}
      <div className="p-6 border-b border-emerald-500/20">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-200 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-sm text-cyan-400 font-medium mb-3">
              {project.role}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-600/20 hover:bg-emerald-600/40 border border-emerald-500/30 hover:border-emerald-400/50 rounded-lg text-emerald-300 hover:text-emerald-200 transition-all duration-300 hover:scale-110"
                title="View Code"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-orange-600/20 hover:bg-orange-600/40 border border-orange-500/30 hover:border-orange-400/50 rounded-lg text-orange-300 hover:text-orange-200 transition-all duration-300 hover:scale-110"
                title="Live Demo"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6 text-justify">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
            <FaCode size={16} />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-800/50 border border-emerald-500/20 rounded-full text-xs font-medium text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-400/30 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Action Buttons (Larger) */}
        <div className="flex gap-4 pt-4 border-t border-emerald-500/20">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 hover:from-emerald-600/30 hover:to-cyan-600/30 border border-emerald-500/30 hover:border-emerald-400/50 rounded-lg text-emerald-300 hover:text-emerald-200 transition-all duration-300 hover:scale-[1.02] font-medium"
            >
              <FaGithub size={16} />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 border border-orange-500/30 hover:border-orange-400/50 rounded-lg text-orange-300 hover:text-orange-200 transition-all duration-300 hover:scale-[1.02] font-medium"
            >
              <FaExternalLinkAlt size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:from-emerald-400/10 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:from-cyan-400/10 transition-all duration-500"></div>
    </div>
  );
}

export default ProjectCard;
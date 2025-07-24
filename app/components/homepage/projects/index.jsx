import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import SectionWrapper from '../../SectionWrapper';

const Projects = () => {
  return (
    <SectionWrapper>
      <div id='projects' className="relative z-50 my-12 lg:my-24">
        {/* Header Section */}
        <div className="sticky top-10 mb-12">
          <div className="w-[80px] h-[80px] bg-emerald-400/20 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-40"></div>
          <div className="flex items-center justify-start relative">
            <span className="bg-gradient-to-r from-emerald-700 to-cyan-700 absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md backdrop-blur-sm border border-emerald-500/30">
              PROJECTS
            </span>
            <span className="w-full h-[2px] bg-gradient-to-r from-emerald-600 to-cyan-600"></span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="w-full"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-emerald-400/20 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-40"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-gradient-to-r from-emerald-700 to-cyan-700 absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md backdrop-blur-sm border border-emerald-500/30">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-gradient-to-r from-emerald-600 to-cyan-600"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
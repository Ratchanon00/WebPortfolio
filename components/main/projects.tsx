import { SparklesIcon } from "@heroicons/react/24/solid";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex w-full flex-col items-start justify-center px-6 py-6 md:px-20 md:py-8"
    >
      <div className="w-full">
        <div className="mb-5 w-full md:mb-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7042f88b] bg-[#0b0b2d]/80 px-4 py-2 shadow-[0_0_20px_rgba(124,58,237,0.25)]">
              <SparklesIcon className="h-4 w-4 text-[#c5b3ff]" />
              <span className="text-[13px] font-medium tracking-[0.08em] text-[#e8e2ff] uppercase">
                Projects
              </span>
            </div>
            <h2 className="mt-3 text-[32px] font-bold leading-tight text-white md:text-[44px]">
              Projects
            </h2>
            <p className="mt-2 max-w-[600px] text-base text-gray-400">
              ผลงานและโปรเจกต์ที่พัฒนาจากการเรียนรู้และประสบการณ์
            </p>
          </div>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              demoLink={"demoLink" in project ? project.demoLink : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

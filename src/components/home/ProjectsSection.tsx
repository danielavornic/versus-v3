import { Project as IProject } from '~/lib/sanity.queries'

import Project from './Project'

const ProjectsSection = ({ projects }: { projects: IProject[] }) => {
  return (
    <section className="bg-white text-gray pt-[112px] pb-[42px] lg:pt-[70px] lg:pb-[120px]">
      <div className="container 3xl:px-[100px]">
        <h2 className="text-black mobile-title font-medium md:text-[42px] 1.5xl:text-[64px] title uppercase mb-[70px] lg:mb-[42px]">
          stay tuned on <br className="hidden md:block" /> our VERSUS
          <br className="hidden lg:block" />
          PROJECTS
        </h2>

        <div className="space-y-[42px]">
          {projects?.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

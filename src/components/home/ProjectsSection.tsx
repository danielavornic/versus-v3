import { Project as IProject } from '~/lib/sanity.queries'

import Project from './Project'

const projects: IProject[] = [
  {
    name: 'UNSESSION',
    image: '/images/unsession.png',
    video: '/videos/unsession.webm',
    videoMobile: '/videos/unsession.webm',
    color: '#D7FF55',
    content: (
      <>
        <p className="mb-[28px] 2lx:mr-[20%]">
          Este o emisiune online marca VERSUS ARTIST care constă din 2 elemente:
        </p>
        <ul className="list-disc list-inside space-y-5 2xl:mr-[20%]">
          <li>
            Interpretarea live de către artiști new-entry sau consacrați, din
            Moldova și România atât a premierelor muzicale, cât și a hiturilor,
            în diverse forme: versiunea originală, acoustic, stilizată, mash-up
            cu altă piesă, duet cu alt artist.
          </li>
          <li>O discuție non-formală cu Satoshi despre muzică.</li>
        </ul>
      </>
    ),
  },
  {
    name: 'Versus Music Camp',
    image: '/images/vmc.png',
    color: '#80ED99',
    images: [
      '/images/vmc/s1.png',
      '/images/vmc/s2.png',
      '/images/vmc/s3.png',
      '/images/vmc/s4.png',
      '/images/vmc/s5.png',
      '/images/vmc/s6.png',
      '/images/vmc/s7.png',
    ],
    content:
      'Un camp muzical este un eveniment non-formal în care participă mai mulți producători muzicali și songwriteri, care timp de câteva zile, pornind de la improvizație, crează idei de piese, instrumentale, versuri și linii melodice.',
    content2:
      'Obiectivele music campului sunt de a consolida comunitatea muzicală și de a crea conexiuni între actorii acesteia, de a antrena producătorii și songwriterii întru dezvoltarea competențelor acestora și de a genera muzică nouă. Versus Artist a organizat 4 campuri până acum, la care au participat peste 40 de producători și artiști.',
  },
]

const ProjectsSection = () => {
  return (
    <section className="bg-white text-gray pt-[112px] pb-[160px] lg:pt-[70px] lg:pb-[120px]">
      <div className="container 3xl:px-[100px]">
        <h2 className="text-black mobile-title font-medium md:text-[42px] 1.5xl:text-[64px] title uppercase mb-[70px] lg:mb-[42px]">
          stay tuned on <br className="hidden md:block" /> our VERSUS
          <br className="hidden md:block" />
          PROJECTS
        </h2>

        <div className="space-y-[42px] lg:space-y-[100px] 1.5xl:space-y-[120px]">
          {projects?.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

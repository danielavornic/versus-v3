import { Project as IProject } from '~/lib/sanity.queries'

import Project from './Project'

const projects: IProject[] = [
  {
    name: 'UNSESSION',
    image: '/images/unsession.png',
    video:
      'https://res.cloudinary.com/deqfi4dkh/video/upload/f_auto:video,q_auto/khshri8j2dtpb548xdga',
    videoMobile:
      'https://res.cloudinary.com/deqfi4dkh/video/upload/f_auto:video,q_auto/j5qk5bhmtz2h37b6l8pk',
    color: '#D7FF55',
    content: (
      <>
        <p className="mb-[28px] 2lx:mr-[20%]">
          UNSESSION & UNARTIST sunt 2 platforme prin care poți descoperi
          artistul prin muzica sa și omul prin cuvintele sale.
          <br />
          <br />
          Subscribe la{' '}
          <a
            href="https://www.youtube.com/@versusartist"
            target="_blank"
            className="hover:underline"
          >
            canalul de YouTube Versus Artist
          </a>{' '}
          și urmărește cele mai bune lansări.
        </p>
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

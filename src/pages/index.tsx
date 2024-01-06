import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLayoutEffect } from 'react'
import SplitType from 'split-type'

import ArtistsGrid from '~/components/home/ArtistsGrid'
import BookingSection from '~/components/home/BookingSection'
import Conceptualization from '~/components/home/Conceptualization'
import ConcertsSection from '~/components/home/ConcertsSection'
import HomeHero from '~/components/home/HomeHero'
import ProdSection from '~/components/home/ProdSection'
import ProjectsSection from '~/components/home/ProjectsSection'
import ReleasesSection from '~/components/home/ReleasesSection'
import Layout from '~/components/layout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getArtists, getProjects, getReleases } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    artists: any
    releases: any
    projects: any
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const artists = await getArtists(client)
  const releases = await getReleases(client)
  const projects = await getProjects(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      artists,
      releases,
      projects,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { artists, releases, projects } = props
  console.log('props', projects)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)

      gsap.to('.versus-logo', {
        yPercent: -20,
        duration: 1,
        delay: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.versus-logo',
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          toggleActions: 'play play reverse reverse',
        },
      })

      const artistNames = document.querySelectorAll('.artist-name')
      artistNames.forEach((char) => {
        const split = new SplitType(char as HTMLElement, {
          types: 'lines',
        })

        split.lines.forEach((line) => {
          gsap.fromTo(
            line,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1,
              ease: 'power2.out',
              stagger: 0.05,
              scrollTrigger: {
                trigger: char,
                start: 'top 90%',
                end: 'top 50%',
                scrub: false,
                toggleActions: 'play play reverse reverse',
              },
            },
          )
        })
      })

      const titles = document.querySelectorAll('.title')
      titles.forEach((title) => {
        const split = new SplitType(title as HTMLElement, {
          types: 'chars',
        })
        split.chars.forEach((line, i) => {
          gsap.fromTo(
            line,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1.2,
              ease: 'power2.out',
              stagger: 0.035,
              delay: i * 0.025,
              scrollTrigger: {
                trigger: title,
                start: 'top 90%',
                end: 'top 50%',
                scrub: false,
                toggleActions: 'play play reverse reverse',
              },
            },
          )
        })
      })

      const revealingLines = document.querySelectorAll('.revealing-line')
      revealingLines.forEach((line) => {
        const split = new SplitType(line as HTMLElement, {
          types: 'lines',
        })
        split.lines.forEach((line) => {
          gsap.fromTo(
            line,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1,
              ease: 'power2.out',
              stagger: 0.05,
              scrollTrigger: {
                trigger: line,
                start: 'top 90%',
                end: 'top 40%',
                scrub: false,
                toggleActions: 'play play reverse reverse',
              },
            },
          )
        })
      })

      const revealingWords = document.querySelectorAll('.revealing-words')
      revealingWords.forEach((text) => {
        const split = new SplitType(text as HTMLElement, {
          types: 'words',
        })

        split.words.forEach((c, i) => {
          gsap.fromTo(
            c,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1.5,
              ease: 'power2.out',
              stagger: 0.05,
              delay: 0.05,
              scrollTrigger: {
                trigger: c,
                start: 'top 90%',
                end: 'top 30%',
                scrub: false,
                toggleActions: 'play play reverse reverse',
              },
            },
          )
        })
      })
    })

    return () => ctx?.revert()
  }, [])

  console.log('artists', artists)

  return (
    <Layout>
      <HomeHero />
      <ArtistsGrid artists={artists} />
      <BookingSection />
      <ReleasesSection releases={releases} />
      <ProdSection />
      <ConcertsSection />
      <Conceptualization />
      <ProjectsSection projects={projects} />
    </Layout>
  )
}

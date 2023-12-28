import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import { useEffect } from 'react'
import SplitType from 'split-type'

import ArtistsGrid from '~/components/home/ArtistsGrid'
import BookingSection from '~/components/home/BookingSection'
import HomeHero from '~/components/home/HomeHero'
import ReleasesSection from '~/components/home/ReleasesSection'
import Layout from '~/components/layout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getArtists, getReleases } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    artists: any
    releases: any
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const artists = await getArtists(client)
  const releases = await getReleases(client)

  artists.sort((a, b) => {
    const aDate = new Date(a._createdAt)
    const bDate = new Date(b._createdAt)

    return aDate.getTime() - bDate.getTime()
  })

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      artists,
      releases,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [artists] = useLiveQuery(
    props.artists,
    props.draftMode ? readToken : undefined,
  )

  const [releases] = useLiveQuery(
    props.releases,
    props.draftMode ? readToken : undefined,
  )

  console.log('artists', artists)

  useEffect(() => {
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
    })

    return () => ctx?.revert()
  }, [])

  return (
    <Layout>
      <HomeHero />
      <ArtistsGrid artists={artists} />
      <BookingSection />
      <ReleasesSection releases={releases} />
    </Layout>
  )
}

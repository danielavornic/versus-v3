import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useLayoutEffect, useState } from 'react'
import SplitType from 'split-type'

import { Artist } from '~/lib/sanity.queries'

import ArtistCard from './ArtistCard'

const ArtistsGrid = ({ artists }: { artists: Artist[] }) => {
  const [activeArtist, setActiveArtist] = useState('')

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)

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

    return () => {
      ctx.kill()
    }
  }, [])

  return (
    <section
      id="artists"
      className="artists-grid pt-20 lg:pt-32 bg-black w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    >
      {artists.map((artist) => (
        <ArtistCard
          key={artist._id}
          artist={artist}
          activeArtist={activeArtist}
          setActiveArtist={setActiveArtist}
        />
      ))}
    </section>
  )
}

export default ArtistsGrid

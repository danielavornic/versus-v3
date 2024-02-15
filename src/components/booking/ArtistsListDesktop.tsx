/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useRef } from 'react'

import { Artist } from '~/lib/sanity.queries'

const ArtistsListDesktop = ({ artists }: { artists: Artist[] }) => {
  const { query, push } = useRouter()
  const { artist } = query

  const handleArtistClick = (artist: string) => {
    push({ query: { artist } }, undefined, { shallow: true })
  }

  const videRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    videRef.current?.play()
  }

  return (
    <ul className="hidden space-y-[10px] w-[70vw] 3xl:space-y-[28px] h-[calc(100vh-80px)] overflow-y-auto artists-scrollbar text-center lg:block mx-auto">
      {artists?.map(({ name, promoVideo }, i) => (
        <li
          key={name}
          className="relative group"
          onMouseEnter={handleMouseEnter}
        >
          {promoVideo && (
            <video
              ref={videRef}
              muted
              loop
              autoPlay
              className={clsx(
                'absolute top-[30px] 1.5xl:top-[40px] 3xl:top-[50px] opacity-0 group-hover:opacity-100 z-10 transition-all ease-in-out duration-500 w-[160px] xl:w-[200px] 1.5xl:w-[210px] 1.5xl:left-[65%] 3xl:w-[280px] left-[65%] transform -translate-x-1/2',
                {
                  'top-[-70px] xl:!top-[-80px] 2xl:top-[-100px] 3xl:!top-[-120px]':
                    i > artists.length / 2 + 1,
                },
              )}
            >
              <source src={promoVideo} type="video/mp4" />
            </video>
          )}
          <button
            onClick={() => handleArtistClick(name)}
            className={clsx(
              'text-[43px] lg:text-[52px] xl:text-[56px] relative group-hover:text-white xl:leading-[60px] 1.5xl:text-[64px] 1.5xl:leading-[1.1] 2xl:leading-[1] 3xl:text-[92px] hover:text-white font-medium uppercase text-center leading-[48px] transition-all',
              { 'text-gray': artist !== name },
            )}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ArtistsListDesktop

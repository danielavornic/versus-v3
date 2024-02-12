/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import { useRouter } from 'next/router'

import { Artist } from '~/lib/sanity.queries'

const ArtistsListDesktop = ({ artists }: { artists: Artist[] }) => {
  const { query, push } = useRouter()
  const { artist } = query

  const handleArtistClick = (artist: string) => {
    push({ query: { artist } }, undefined, { shallow: true })
  }

  return (
    <ul className="hidden space-y-[10px] w-[70vw] 3xl:space-y-[28px] h-[calc(100vh-80px)] overflow-y-auto artists-scrollbar text-center lg:block mx-auto pb-[80px]">
      {artists?.map(({ name }) => (
        <li key={name} className="relative group">
          <img
            src="/images/test-video-promo.png"
            className="absolute top-[30px] 1.5xl:top-[40px] 3xl:top-[50px] opacity-0 group-hover:opacity-100 z-10 transition-all ease-in-out duration-500 w-[160px] xl:w-[200px] 1.5xl:w-[210px] 1.5xl:left-[65%] 3xl:w-[280px] left-[65%] transform -translate-x-1/2"
          />
          <button
            onClick={() => handleArtistClick(name)}
            className={clsx(
              'text-[43px] lg:text-[50px] xl:text-[56px] relative group-hover:text-white xl:leading-[60px] 1.5xl:text-[64px] 1.5xl:leading-[1.1] 2xl:leading-[1] 3xl:text-[92px] hover:text-white font-medium uppercase text-center leading-[48px] transition-all',
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

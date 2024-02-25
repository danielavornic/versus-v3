/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import { useEffect, useRef } from 'react'

import { useAppDispatch } from '~/store/hooks'
import { reset, updateSocials } from '~/store/socialsSlice'

const ArtistsListDesktop = ({ artists, artist, setArtist }) => {
  const currentArtist = artists.find((a) => a.name === artist)

  const dispatch = useAppDispatch()

  const handleArtistClick = (artist: string) => {
    setArtist(artist)
  }

  const videRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    videRef.current?.play()
  }

  useEffect(() => {
    if (currentArtist) {
      dispatch(
        updateSocials({
          tiktok: currentArtist?.tiktok || '',
          insta: currentArtist?.instagram || '',
          fb: currentArtist?.facebook || '',
          yt: currentArtist?.youtube || '',
        }),
      )
    } else {
      dispatch(reset())
    }
  }, [currentArtist, dispatch])

  return (
    <ul className="hidden space-y-[10px] w-[70vw] 3xl:space-y-[28px] text-center lg:block mx-auto">
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
                'absolute top-[30px] 1.5xl:top-[40px] pointer-events-none object-cover 3xl:top-[50px] opacity-0 group-hover:opacity-100 z-10 transition-all ease-in-out duration-500 w-full max-w-[300px] max-h-[400px] xl:max-w-[350px] mx-auto left-[70%] 3xl:left-[65%]  transform -translate-x-1/2',
                {
                  'top-[-70px] xl:top-[-150px] 2xl:!top-[-160px]':
                    i > artists.length / 2 + 1,
                },
              )}
            >
              <source src={promoVideo} type="video/mp4" />
            </video>
          )}
          <p
            onClick={() => handleArtistClick(name)}
            className={clsx(
              'text-[43px] lg:text-[52px] cursor-pointer focus:outline-none xl:text-[56px] relative group-hover:text-white xl:leading-[60px] 1.5xl:text-[64px] 1.5xl:leading-[1.1] 2xl:leading-[1] 3xl:text-[92px] hover:text-white font-medium uppercase text-center leading-[48px] transition-all',
              { 'text-gray': artist !== name },
            )}
          >
            {name}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default ArtistsListDesktop

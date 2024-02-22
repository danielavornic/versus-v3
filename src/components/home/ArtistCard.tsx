import clsx from 'clsx'

import { Facebook, Instagram, TikTok, YouTube } from '~/icons'
import { urlForImage } from '~/lib/sanity.image'
import { Artist } from '~/lib/sanity.queries'

const StreamingButton = ({ link, icon }: { link: string; icon: string }) => {
  if (!link) return null

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[100px] h-[40px] lg:w-[80px] lg:h-[30px] flex items-center justify-center hover:bg-black p-[12px] text-white transition-all duration-500 rounded-[12px] bg-[#05050580]"
    >
      <img src={icon} alt="Streaming" className="w-full h-5" />
    </a>
  )
}

interface ArtistCardProps {
  artist: Artist
  activeArtist: string
  setActiveArtist: (name: string) => void
}

const ArtistCard = ({
  artist,
  activeArtist,
  setActiveArtist,
}: ArtistCardProps) => {
  const {
    name,
    image,
    tiktok,
    facebook,
    instagram,
    youtube,
    tiktok2,
    facebook2,
    instagram2,
    youtube2,
    spotify,
    appleMusic,
    deezer,
    spotify2,
    appleMusic2,
  } = artist

  const isTouchDevice = () => {
    if (typeof window === 'undefined') return false
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }

  const handleArtistChange = () => {
    if (activeArtist === name) {
      setActiveArtist('')
    } else {
      setActiveArtist(name)
    }
  }

  return (
    <div
      className="w-full relative cursor-pointer"
      onClick={handleArtistChange}
      onMouseEnter={() => !isTouchDevice() && setActiveArtist(name)}
      onMouseLeave={() => setActiveArtist('')}
    >
      <div className="flex flex-col absolute socials left-8 right-8 top-6 bottom-6 lg:top-[30px] lg:bottom-[30px] lg:left-[30px] lg:right-[30px] 2xl:left-10 2xl:right-10 2xl:top-10 2xl:bottom-10 justify-between xl:justify-end xl:space-y-6">
        <div
          className={clsx('z-10 space-y-6 transition-all duration-500', {
            'opacity-0': activeArtist !== name,
            'opacity-100': activeArtist === name,
          })}
        >
          <div className="flex justify-between">
            <div className="flex space-x-[20px] lg:space-x-[12px] xl:space-x-[14px] items-center">
              <a
                href={tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 lg:w-[14px] text-white hover:text-tiktok transition-all duration-500"
              >
                <TikTok />
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 lg:w-[16px] text-white hover:text-instagram transition-all duration-500"
              >
                <Instagram />
              </a>
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[14px] lg:w-[10px] text-white hover:text-facebook transition-all duration-500"
              >
                <Facebook />
              </a>
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 lg:w-[17px] text-white hover:text-youtube transition-all duration-500"
              >
                <YouTube />
              </a>
            </div>

            {(tiktok2 || instagram2 || facebook2 || youtube2) && (
              <div className="flex space-x-[20px] lg:space-x-[12px] xl:space-x-[14px] items-center">
                <a
                  href={tiktok2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 lg:w-[14px] text-white hover:text-tiktok transition-all duration-500"
                >
                  <TikTok />
                </a>
                <a
                  href={instagram2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 lg:w-[16px] text-white hover:text-instagram transition-all duration-500"
                >
                  <Instagram />
                </a>
                <a
                  href={facebook2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[14px] lg:w-[10px] text-white hover:text-facebook transition-all duration-500"
                >
                  <Facebook />
                </a>
                <a
                  href={youtube2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 lg:w-[17px] text-white hover:text-youtube transition-all duration-500"
                >
                  <YouTube />
                </a>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-y-2 lg:gap-2 xl:gap-5 xl:grid-cols-4">
            <StreamingButton link={spotify} icon="/images/spotify-logo.svg" />
            <StreamingButton
              link={appleMusic}
              icon="/images/apple-music-logo.svg"
            />
            <StreamingButton link={deezer} icon="/images/deezer-logo.svg" />
            <StreamingButton link={spotify2} icon="/images/spotify-logo.svg" />
            <StreamingButton
              link={appleMusic2}
              icon="/images/apple-music-logo.svg"
            />
          </div>
        </div>

        <h3 className="overflow-hidden lg:max-w-[300px] artist-name mobile-header lg:text-[28px] text-white z-10 uppercase 2xl:text-[43px]">
          {name}
        </h3>
      </div>

      <img
        className={clsx(
          'w-full h-full object-cover relative transition-all duration-500',
          { 'filter grayscale': activeArtist === name },
        )}
        src={urlForImage(image)?.url()}
        alt={name}
      />
      <div
        className={clsx(
          'absolute w-full h-full top-0 left-0 bg-black bg-opacity-20 transition-all duration-500',
          {
            'opacity-0 pointer-events-none': activeArtist !== name,
            'opacity-100 pointer-events-auto': activeArtist === name,
          },
        )}
      ></div>
    </div>
  )
}

export default ArtistCard

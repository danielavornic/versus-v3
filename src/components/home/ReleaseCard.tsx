import clsx from 'clsx'

import { urlForImage } from '~/lib/sanity.image'
import { Release } from '~/lib/sanity.queries'

const StreamingButton = ({
  link,
  icon,
  size,
}: {
  link: string
  icon: string
  size: number
}) => {
  if (!link) return null

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'w-[75px] h-[30px] flex items-center justify-center hover:bg-black p-[12px] text-white transition-all duration-500 rounded-[8px] bg-[#05050580]',
        {
          'lg:w-[38px] lg:h-[16px] lg:rounded-[4px] lg:p-[5px]': size === 0,
          'lg:w-[42px] lg:h-[17px] lg:rounded-[5px] lg:p-[6px]': size === 1,
          'lg:w-[50px] lg:h-[20px] lg:rounded-[6px] lg:p-[7px]': size === 2,
        },
      )}
    >
      <img src={icon} alt="Streaming" className="w-full h-4" />
    </a>
  )
}

const sizesDict = {
  0: 'lg:w-[170px] lg:h-[170px]',
  1: 'lg:w-[200px] lg:h-[200px]',
  2: 'lg:w-[245px] lg:h-[245px]',
}

const horizontalPositions = [
  'lg:left-[80vw] 1.5xl:left-[40vw] top-[0px]',
  'lg:left-[600px] top-[50px]',
  'lg:left-[85vw] 1.5xl:right-[10vw] top-[65px]',
  'lg:left-[55vw] 1.5xl:right-[40vw] top-[100px]',
  'lg:right-[300px] top-[100px]',
  'lg:left-[60vw] top-[150px]',
  'lg:right-[-50px] top-[220px]',
  'lg:right-[50px] top-[300px]',
  'lg:right-[55vw] top-[320px]',
  'lg:right-[20vw] 2xl:right-[20vw] top-[400px]',
  'lg:right-[500px] top-[420px]',
  'lg:right-[-50px] top-[450px]',
  'lg:left-[30vw] top-[520px]',
  'lg:left-[50px] top-[550px]',
  'lg:left-[10vw] top-[600px]',
  'lg:right-[10vw] top-[620px]',
  'lg:left-[35vw] top-[650px]',
]

const sizes = [2, 0, 1, 1, 1, 2, 1, 0, 1, 0, 2, 1, 2, 1, 0, 1, 1]

const ReleaseCard = ({
  release,
  index,
}: {
  release: Release
  index: number
}) => {
  const { name, artist, coverImg, spotify, appleMusic, deezer } = release
  const size = sizes[index]
  const sizeClassName = sizesDict[size]

  return (
    <div
      className={clsx(
        horizontalPositions[index],
        sizeClassName,
        'release bg-cover w-[300px] hover:z-[1000] h-[300px] bg-no-repeat bg-center lg:absolute lg:hover:transform duration-500 lg:hover:scale-[1.2] transition-all',
      )}
      style={{ backgroundImage: `url(${urlForImage(coverImg)?.url()})` }}
      title={`${name} by ${artist}`}
      id={`release-${index}`}
    >
      <div
        className={clsx(
          'h-[60px] w-[100%] bg-black bg-opacity-30 absolute bottom-0 left-0 flex justify-center items-center space-x-5 ',
          {
            'lg:h-[34px] lg:space-x-2': size === 0,
            'lg:h-[40px] lg:space-x-2.5': size === 1,
            'lg:h-[45px] lg:space-x-3': size === 2,
          },
        )}
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <StreamingButton
          link={spotify}
          icon="/images/spotify-logo.svg"
          size={size}
        />
        <StreamingButton
          link={appleMusic}
          icon="/images/apple-music-logo.svg"
          size={size}
        />
        <StreamingButton
          link={deezer}
          icon="/images/deezer-logo.svg"
          size={size}
        />
      </div>
    </div>
  )
}

export default ReleaseCard

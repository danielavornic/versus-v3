import { urlForImage } from '~/lib/sanity.image'
import { Release } from '~/lib/sanity.queries'

const StreamingButton = ({ link, icon }: { link: string; icon: string }) => {
  if (!link) return null

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[75px] h-[30px] lg:w-[100px] lg:h-[40px] lg:rounded-[12px] flex items-center justify-center hover:bg-black p-[12px] text-white transition-all duration-500 rounded-[8px] bg-[#05050580]"
    >
      <img src={icon} alt="Streaming" className="w-full h-4 lg:h-5" />
    </a>
  )
}

const ReleaseCard = ({ release }: { release: Release }) => {
  const { name, artist, coverImg, spotify, appleMusic, deezer } = release

  return (
    <div
      className="bg-cover w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${urlForImage(coverImg)?.url()})` }}
      title={`${name} by ${artist}`}
    >
      <div
        className="h-[60px] lg:h-[100px] w-[100%] bg-black bg-opacity-30 absolute bottom-0 left-0 flex justify-center items-center space-x-5 lg:space-x-6"
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <StreamingButton link={spotify} icon="/images/spotify-logo.svg" />
        <StreamingButton
          link={appleMusic}
          icon="/images/apple-music-logo.svg"
        />
        <StreamingButton link={deezer} icon="/images/deezer-logo.svg" />
      </div>
    </div>
  )
}

export default ReleaseCard

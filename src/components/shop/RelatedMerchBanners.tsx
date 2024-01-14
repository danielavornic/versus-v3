import clsx from 'clsx'
import Link from 'next/link'

interface RelatedMerchBannerProps {
  artist: 'satoshi' | 'dara' | 'csd'
}

const artists = ['satoshi', 'dara', 'csd']

const Banner = ({ artist }: { artist: string }) => {
  return (
    <Link href={`/shop/${artist}`} className="w-full lg:flex-[1]">
      <div
        className="w-full md:hidden h-[320px] bg-cover bg-top flex justify-center items-center"
        style={{
          backgroundImage: `url(/images/shop/${artist}-banner.png)`,
        }}
      >
        <h3 className="text-xl text-center uppercase text-white font-semibold">
          SHop {artist === 'csd' ? 'Carla’s' : artist}
        </h3>
      </div>

      <div className="flex w-full">
        <div
          className="w-1/3 bg-top bg-cover h-[230px] lg:h-[200px] 1.5xl:h-[240px] 3xl:h-[300px] hidden md:block"
          style={{
            backgroundImage: `url(/images/shop/${artist}-banner.png)`,
          }}
        />
        <div
          className={clsx('flex w-2/3 justify-center', {
            'bg-[#A9B0B8] text-white': artist === 'dara',
            'bg-[#454848] text-white': artist === 'csd',
            'bg-[#EDEDEE] text-black': artist === 'satoshi',
          })}
        >
          <h3 className="text-[36px] 2xl:text-[43px] text-center uppercase font-medium self-center">
            Shop {artist === 'csd' ? 'Carla’s' : artist}
          </h3>
        </div>
      </div>
    </Link>
  )
}

const RelatedMerchBanners = ({ artist }: RelatedMerchBannerProps) => {
  const images = artists.filter((a) => a !== artist)

  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full lg:gap-0">
      {images.map((img, index) => (
        <Banner artist={img} key={index} />
      ))}
    </div>
  )
}

export default RelatedMerchBanners

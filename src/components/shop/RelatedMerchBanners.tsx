import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface RelatedMerchBannerProps {
  artist: 'satoshi' | 'dara' | 'csd' | 'magnat-feoctist'
}

const artists = ['satoshi', 'dara', 'csd', 'magnat-feoctist']

const Banner = ({ artist }: { artist: string }) => {
  const [currArtist, setCurrArtist] = useState(
    artist === 'magnat-feoctist' ? 'magnat' : artist,
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrArtist((currArtist) =>
        currArtist === 'magnat'
          ? 'feoctist'
          : artist === 'magnat-feoctist'
            ? 'magnat'
            : artist,
      )
    }, 2000)

    return () => clearInterval(intervalId)
  }, [artist])

  const name =
    artist === 'csd'
      ? "Carla's"
      : artist === 'magnat-feoctist'
        ? 'Magnat & Feoctist'
        : artist
  return (
    <Link
      href={`/shop/${artist}`}
      className="w-full lg:min-w-[450px] lg:max-w-[450px] xl:min-w-[580px] xl:max-w-[580px] 1.5xl:min-w-[600px] 1.5xl:max-w-[600px] 2xl:min-w-0 2xl:max-w-none 2xl:flex-1"
    >
      <div
        className="w-full md:hidden h-[320px] bg-cover bg-top flex justify-center flex-wrap items-center"
        style={{
          backgroundImage: `url(/images/shop/${currArtist}-banner.png)`,
        }}
      >
        <h3 className="text-xl text-center uppercase text-white font-semibold">
          SHop {name}
        </h3>
      </div>

      <div className="flex w-full">
        <div
          className="w-1/3 bg-top bg-cover h-[230px] lg:h-[200px] 1.5xl:h-[240px] 3xl:h-[300px] hidden md:block"
          style={{
            backgroundImage: `url(/images/shop/${currArtist}-banner.png)`,
          }}
        />
        <div
          className={clsx('w-2/3 justify-center hidden md:flex', {
            'bg-[#A9B0B8] text-white': artist === 'dara',
            'bg-[#454848] text-white': artist === 'csd',
            'bg-[#EDEDEE] text-black': artist === 'satoshi',
            'bg-[#B0B2B5] text-white': artist === 'magnat-feoctist',
          })}
        >
          <h3 className="text-[36px] px-5 2xl:text-[43px] text-center leading-[1.15] uppercase font-medium self-center">
            Shop {name}
          </h3>
        </div>
      </div>
    </Link>
  )
}

const RelatedMerchBanners = ({ artist }: RelatedMerchBannerProps) => {
  const images = artists.filter((a) => a !== artist)

  return (
    <section className="pb-[220px] md:pb-[120px] bg-[#fff] lg:pb-[70px] container flex flex-col lg:flex-wrap lg:justify-center lg:flex-row gap-5 w-full lg:gap-0 2xl:flex-nowrap">
      {images.map((img, index) => (
        <Banner artist={img} key={index} />
      ))}
    </section>
  )
}

export default RelatedMerchBanners
